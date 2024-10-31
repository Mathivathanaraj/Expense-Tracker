import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/balance';
import { IncomeExpenses } from './components/IncomeExpense';

import { AddTransaction } from './components/addTransaction';
import './App.css';
import { TransactionList } from './components/TransactionList';
import { GlobalProvider } from './context/GlobalState';
function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;