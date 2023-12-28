import { FlatList, View } from 'react-native';
import { commonStyles } from '../styles/commonStyles';
import React from 'react';
import { TransactionComponent } from '../components/Transaction';
import { useParentContext } from '../context/app/appContextProvider';

export default function Transactions({ route, navigation }) {
  const { transactions } = useParentContext()?.appState;

  return (
    <View style={commonStyles.container}>
      <FlatList
        data={transactions}
        renderItem={({ item }) => <TransactionComponent transaction={item} />}
      />
    </View>
  )
}