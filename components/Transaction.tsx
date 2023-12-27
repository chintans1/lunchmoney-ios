import { View, Text, StyleSheet } from "react-native";
import { commonStyles } from "../styles/commonStyles";
import { brandingColours } from "../styles/brandingConstants";
import { AppTransaction } from "../models/lunchmoney/appModels";
import { CategoryComponent } from "./Category";

type TransactionProps = {
  transaction: AppTransaction
}

// borderStyle: "dotted", borderColor: "#000000", borderWidth: 1

const transactionStyles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",

    backgroundColor: brandingColours.shadedColour,
    borderRadius: 5,

    // marginHorizontal: 5,
    marginVertical: 3,
    paddingVertical: 10,
    paddingHorizontal: 15,
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
  transactionName: {
    flexWrap: "wrap",
    flexShrink: 1,
    color: brandingColours.primaryColour,
    fontSize: 16,
    fontWeight: "bold"
  },
  date: {
    ...commonStyles.textBase,
    color: "grey",
    fontSize: 10
  },
  account: {
    ...commonStyles.textBase,
    color: "grey",
    fontSize: 10
  },
  amount: {
    color: brandingColours.secondaryColour,
    fontWeight: "bold"
  },
  amountNegative: {
    color: brandingColours.red
  },
  amountPositive: {
    color: brandingColours.green
  }
});

export function TransactionComponent({ transaction }: TransactionProps) {
  return (
    <View style={transactionStyles.card}>
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
    </View>
  );
}