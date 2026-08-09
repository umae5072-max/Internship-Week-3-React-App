import ExpenseItem from './ExpenseItem.jsx'

function ExpenseList({ expenses, hasExpenses, onDeleteExpense }) {
  if (expenses.length === 0) {
    return (
      <section className="expense-list card empty-state">
        <h2>Expenses</h2>
        <p>{hasExpenses ? 'No matching expenses.' : 'No expenses yet.'}</p>
      </section>
    )
  }

  return (
    <section className="expense-list card">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Your records</p>
          <h2>Expenses</h2>
        </div>
        <span className="expense-count">
          {expenses.length} {expenses.length === 1 ? 'expense' : 'expenses'}
        </span>
      </div>
      <ul className="expense-items">
        {expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            expense={expense}
            onDeleteExpense={onDeleteExpense}
          />
        ))}
      </ul>
    </section>
  )
}

export default ExpenseList
