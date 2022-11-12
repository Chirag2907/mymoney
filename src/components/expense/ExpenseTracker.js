import React from 'react'
import { Header } from "./Header";
import { Balance } from "./Balance";
import { IncomeExpenses } from "./IncomeExpenses";
import { TransactionList } from "./TransactionList";
import AddTransaction from "./AddTransaction";
import { GlobalProvider } from "../../context/GlobalState";

export default function ExpenseTracker() {
  return (
    <div>

        <div className="main-content">
        <GlobalProvider>
          <AddTransaction />
          <Header />
          <div className="container">
            <Balance />
            <IncomeExpenses />
            <TransactionList />
          </div>
        </GlobalProvider>
      </div>
    </div>
  )
}
