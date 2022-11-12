import React, {useContext} from 'react';
import { GlobalContext } from '../../context/GlobalState';
import fire from '../../config/Fire'

//Money formatter function
function moneyFormatter(num) {
  let p = num.toFixed(2).split('.');
  return (
    '₹ ' +
    p[0]
      .split('')
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
      }, '') +
    '.' +
    p[1]
  );
}

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  // const currentUID= fire.auth().currentUser.uid

  const sign = transaction.amount < 0 ? '-' : '+';
  // const type=transaction.amount<0?'expense':'income';

  // const BackUpState = this.state.transactions;
  //           BackUpState.push({
  //               id: Transaction.id,
  //               text: transaction.text,
  //               type: transaction.type,
  //               price: transaction.amount,
  //               user_id: currentUID
  //           });
  //   fire.database().ref('Transactions/' ).push({
  //     id: transaction.id,
  //     Text: transaction.text,
  //     Amount: transaction.amount,
  //     user_id: currentUID,
  //     Type:type,
  //     Date:transaction.date
  // }).catch((error)=>{
  //     //error callback
  //     console.log('error ' , error)
  // });

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text} <span> <span style={{marginRight: 8}}>{transaction.date}</span> {sign}{moneyFormatter(transaction.amount)}</span><button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
    </li>
  )
}