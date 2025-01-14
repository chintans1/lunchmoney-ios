import { Asset, PlaidAccount } from 'lunch-money';
import { AppAccount, AppDraftAccount } from '../models/lunchmoney/appModels';

const getFormatter = (currency: string) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency ?? 'USD',
  });
};

export const negativeCreditTypes: string[] = [
  'loan',
  'credit',
  'other liability',
];

export const formatBalance = (
  account: Asset | PlaidAccount | AppDraftAccount | AppAccount,
): string => {
  if ('type' in account && negativeCreditTypes.includes(account.type)) {
    // For credit accounts, negative balance is positive, positive is negative
    return (parseFloat(account.balance) * -1).toString();
  }
  if (
    'type_name' in account &&
    negativeCreditTypes.includes(account.type_name)
  ) {
    return (parseFloat(account.balance) * -1).toString();
  }

  return account.balance;
};

export const formatAmountString = (
  amount: number | string,
  currency: string = 'USD',
): string => {
  let amountToFormat: number;
  if (typeof amount === 'string') {
    amountToFormat = parseFloat(amount); // Convert string to number
  } else {
    amountToFormat = amount;
  }
  return getFormatter(currency).format(amountToFormat);
};
