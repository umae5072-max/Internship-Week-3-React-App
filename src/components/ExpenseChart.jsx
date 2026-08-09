function ExpenseChart({ expenses }) {
  const categoryTotals = expenses.reduce((totals, expense) => {
    totals[expense.category] = (totals[expense.category] || 0) + expense.amount
    return totals
  }, {})

  const chartData = Object.entries(categoryTotals)

  if (chartData.length === 0) {
    return (
      <section className="chart-card card empty-state">
        <h2>Spending by category</h2>
        <p>No data to display.</p>
      </section>
    )
  }

  const highestTotal = Math.max(
    ...chartData.map(([, total]) => total),
  )

  return (
    <section className="chart-card card">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Breakdown</p>
          <h2>Spending by category</h2>
        </div>
      </div>
      <ul className="chart-list">
        {chartData.map(([category, total]) => (
          <li className="chart-item" key={category}>
            <div className="chart-label">
              <span>{category}</span>
              <strong>₱{total.toFixed(2)}</strong>
            </div>
            <progress aria-label={`${category}: ₱${total.toFixed(2)}`} value={total} max={highestTotal}>
              {total}
            </progress>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ExpenseChart
