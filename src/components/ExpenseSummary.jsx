function ExpenseSummary({ expenses }) {
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0)

  return (
    <section className="summary-card card">
      <p className="eyebrow">All expenses</p>
      <h2>Total spending</h2>
      <p className="total-amount">₱{total.toFixed(2)}</p>
    </section>
  )
}

export default ExpenseSummary
