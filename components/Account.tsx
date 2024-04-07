import { View, Text, StyleSheet } from "react-native";
import { commonStyles } from "../styles/commonStyles";
import { brandingColours } from "../styles/brandingConstants";
import { AppAccount } from "../models/lunchmoney/appModels";

type AccountProps = {
  account: AppAccount
}

// borderStyle: "dotted", borderColor: "#000000", borderWidth: 1

const transactionStyles = StyleSheet.create({
  card: {
    ...commonStyles.card,
    alignItems: "center",
  },
  leftSection: {
    flex: 3.5,
    flexDirection: "column"
  },
  rightSection: {
    flex: 1,
    alignItems: "flex-end",
    flexDirection: "column"
  },
  accountName: {
    flexWrap: "wrap",
    flexShrink: 1,
    color: brandingColours.primaryColour,
    fontSize: 24,
    fontWeight: "bold"
  },
  account: {
    ...commonStyles.textBase,
    color: "grey",
    fontSize: 10
  },
  amount: {
    fontWeight: "bold"
  },
  amountNegative: {
    color: brandingColours.red
  },
  amountPositive: {
    color: brandingColours.green
  }
});

export function AccountComponent({ account }: AccountProps) {
  const accountBalance = parseFloat(account.balance);
  const balanceString = accountBalance >= 0 ?
    `$${accountBalance.toFixed(2)}` : `-$${Math.abs(accountBalance).toFixed(2)}`;

  return (
    <View style={transactionStyles.card}>
      <View style={transactionStyles.leftSection}>
        <Text adjustsFontSizeToFit={true} numberOfLines={1} style={transactionStyles.accountName}>{ account.accountName }</Text>
        <Text style={transactionStyles.account}>{ account.institutionName }</Text>
      </View>
      <View style={transactionStyles.rightSection}>
        <Text
          adjustsFontSizeToFit={true}
          numberOfLines={1}
          style={[
            transactionStyles.amount,
            accountBalance >= 0 ? transactionStyles.amountPositive : transactionStyles.amountNegative
          ]}>{balanceString}</Text>
      </View>
    </View>
  );
}
/*
      <View style={transactionStyles.leftSection}>
        <View style={{ flexDirection: "row" }}>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={transactionStyles.transactionName}>{transaction.notes}</Text>
          <CategoryComponent categoryName={transaction.categoryName} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={transactionStyles.account}>{transaction.assetName}</Text>
        </View>
      </View>
      <View style={transactionStyles.rightSection}>
        <Text
          style={[transactionStyles.amount, parseFloat(transaction.amount) > 0 ? transactionStyles.amountPositive : transactionStyles.amountNegative]}>
          {parseFloat(transaction.amount).toFixed(2)}
        </Text>
        <Text style={transactionStyles.date}>{transaction.date}</Text>
      </View>
      */