function ExpenseItem({ expense, onDeleteExpense }) {
  return (
    <li className="expense-item">
      <div className="expense-details">
        <div>
          <p className="expense-description">{expense.description}</p>
          <div className="expense-meta">
            <span className="category-badge">{expense.category}</span>
            <span>{expense.date}</span>
          </div>
        </div>
        <p className="expense-amount">₱{expense.amount.toFixed(2)}</p>
      </div>
      <button
        className="delete-button"
        type="button"
        onClick={() => onDeleteExpense(expense.id)}
      >
        Delete
      </button>
    </li>
  )
}

export default ExpenseItem
