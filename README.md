# Expense Tracker 💸

A simple and user-friendly expense tracker application built with React.js, designed to help you manage your finances by tracking income and expenses. This app allows users to add transactions, delete them, and view a running balance of their finances in real-time.

## Features

- **Add Transactions**: Quickly log income or expenses by entering a description and amount.
- **View Transaction History**: See a list of all transactions with easy identification of income (positive) and expenses (negative).
- **Real-Time Balance Update**: Automatically updates the total balance, income, and expenses as transactions are added or removed.
- **Delete Transactions**: Remove individual transactions to keep records up-to-date.
- **Responsive Design**: Works seamlessly on desktop and mobile devices.

## Built With

- **React.js**: A popular JavaScript library for building user interfaces.
- **Context API & useReducer**: For state management of transactions.
- **CSS**: Custom styling for a clean and intuitive user interface.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/expense-tracker.git
   cd expense-tracker
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the application:
   ```bash
   npm start
   ```

4. Open the application in your browser at `http://localhost:3000`.

## Project Structure

- `src/components`: Contains the UI components, including `AddTransaction`, `TransactionList`, and `Balance`.
- `src/context`: Holds the `GlobalState` and `AppReducer` for managing state with Context API and `useReducer`.
- `src/App.js`: The main app component, combining all other components.

## Usage

1. Enter a description (e.g., "Groceries") and an amount (negative for expenses, positive for income).
2. Click "Add Transaction" to log the transaction.
3. View the updated balance and transaction history.
4. To delete a transaction, click the delete button next to it.

## Future Improvements

- **Persistent Storage**: Save transactions to local storage or integrate a backend API.
- **Categories**: Add transaction categories for better organization.
- **Date Tracking**: Add a timestamp for each transaction.

