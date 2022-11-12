import React, {useState, useContext} from 'react'
import { GlobalContext } from '../../context/GlobalState';
import fire from '../../config/Fire'

function AddTransaction() {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState('');

  const { addTransaction } = useContext(GlobalContext);

 const handleExpense = (e) => { 
  e.preventDefault();
    if(amount===0 || text==="" || date===""){
      alert("Field cannot be empty")
      
    }
    else{
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: -amount,
      date: date
    }

    addTransaction(newTransaction);
    setText("")
    setAmount("")
    setDate("")

    const currentUID= fire.auth().currentUser.uid

  const type=amount<0?'expense':'income';

  
    fire.database().ref('Transactions/'+newTransaction.id ).push({
      id: newTransaction.id,
      Text: text,
      Amount: amount,
      user_id: currentUID,
      Type:type,
      Date:date
  }).catch((error)=>{
      //error callback
      console.log('error ' , error)
  });
  }
  }

const handleIncome = (e) => { 
  e.preventDefault();
    if(amount===0 || text==="" || date===""){
      alert("Field cannot be empty")
      
    }
    else{
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
      date: date
    }

    addTransaction(newTransaction);
    setText("")
    setAmount("")
    setDate("")

    const currentUID= fire.auth().currentUser.uid

  const type=amount<0?'expense':'income';

  
    fire.database().ref('Transactions/'+newTransaction.id ).push({
      id:newTransaction.id,
      Text: text,
      Amount: amount,
      user_id: currentUID,
      Type:type,
      Date:date
  }).catch((error)=>{
      //error callback
      console.log('error ' , error)
  });
  }
 }

  // const onSubmit = e => {
  //   e.preventDefault();
  //   if(amount===0 || text==="" || date===""){
  //     alert("Field cannot be empty")
      
  //   }
  //   else{
  //   const newTransaction = {
  //     id: Math.floor(Math.random() * 100000000),
  //     text,
  //     amount: +amount,
  //     date: date
  //   }

  //   addTransaction(newTransaction);
  //   setText("")
  //   setAmount(0)
  //   setDate("")
  // }
  // }
  // const currentUID= fire.auth().currentUser.uid

  // const sign = amount < 0 ? '-' : '+';
  // const type=amount<0?'expense':'income';

  // const BackUpState = this.state.transactions;
  //           BackUpState.push({
  //               id: newTransaction.id,
  //               text: newTransaction.text,
  //               type: type,
  //               price: amount,
  //               user_id: currentUID
  //           });
  //   fire.database().ref('Transactions/' ).push({
  //     id: id,
  //     Text: text,
  //     Amount: amount,
  //     user_id: currentUID,
  //     Type:type,
  //     Date:date
  // }).catch((error)=>{
  //     //error callback
  //     console.log('error ' , error)
  // });

  return (
    <div>
    <div>
    <div className='transaction-main'>
       <h3 className='my-4'>Add Transaction</h3>
      <div>
        <div className="form-control">
          <label>Text</label>
          <input value={text} onChange={(event) => setText(event.target.value)} placeholder="Enter Text..." type="text" />
        </div>
        <div className="form-control">
          <label>Amount</label>
          <input value={amount} onChange={(event) => setAmount(event.target.value)} placeholder="Enter Amount..." type="number" />
        </div>

       

        <div className="form-control my-0">
          <label>Date</label>
          <input value={date} onChange={(event) => setDate(event.target.value)} placeholder="Enter Amount..." type="date" />
        </div>
        {/* <button className="btn">Add Transaction</button> */}
        <div className='buttons my-0'>
        <button onClick={handleIncome} className="btn btn-success">Income</button>
        <button onClick={handleExpense} className="btn btn-danger">Expense</button>
        </div>
      </div>
    </div>
    </div>
    </div>
  )

}

export default AddTransaction