import React, { useContext } from 'react';
import { Transaction } from './Transaction';
import fire from '../../config/Fire'


import { GlobalContext } from '../../context/GlobalState';

export const TransactionList = () => {
  let { transactions } = useContext(GlobalContext);
  //  const componentWillMount=()=>{
  //   const {currentUID, money} = this.state;
  //   let totalMoney = money;
  //   const BackUpState = this.state.transactions;
  //   fire.database().ref('Transactions/' + currentUID).once('value',
  //   (snapshot) => {
  //       // console.log(snapshot);
  //       snapshot.forEach((childSnapshot) => {

  //           totalMoney = 
  //               childSnapshot.val().type === 'deposit' ? 
  //               parseFloat(childSnapshot.val().price) + totalMoney
  //               : totalMoney - parseFloat(childSnapshot.val().price);
            
  //           BackUpState.push({
  //               id: childSnapshot.val().id,
  //               name: childSnapshot.val().text,
  //               type: childSnapshot.val().type,
  //               price: childSnapshot.val().amount,
  //               user_id: childSnapshot.val().uid
  //           });
  //           // console.log(childSnapshot.val().name);
  //       });
  //       this.setState({
  //           transactions: BackUpState,
  //           money: totalMoney
  //       });
  //   });
// }
    transactions = transactions.sort((a, b) => {
      return new Date(b.date) - new Date(a.date)
    })

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
    </>
  )
}
