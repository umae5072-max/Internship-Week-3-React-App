import { useState } from 'react'

function ExpenseForm({ onAddExpense }) {
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('')
  const [date, setDate] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    if (!description.trim() || !amount || !category || !date) {
      setError('Please fill in all fields.')
      return
    }

    const numericAmount = Number(amount)

    if (!Number.isFinite(numericAmount) || numericAmount <= 0) {
      setError('Amount must be a positive number.')
      return
    }

    const newExpense = {
      id: Date.now(),
      description: description.trim(),
      amount: numericAmount,
      category,
      date,
    }

    onAddExpense(newExpense)
    setDescription('')
    setAmount('')
    setCategory('')
    setDate('')
    setError('')
  }

  return (
    <form className="expense-form card" onSubmit={handleSubmit}>
      <div className="section-heading">
        <div>
          <p className="eyebrow">New entry</p>
          <h2>Add an expense</h2>
        </div>
      </div>

      <div className="form-grid">
        <div className="field field-description">
          <label htmlFor="description">Description</label>
        <input
          id="description"
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="e.g. Weekly groceries"
        />
        </div>

        <div className="field">
          <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          type="number"
          min="0.01"
          step="0.01"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
          placeholder="0.00"
        />
        </div>

        <div className="field">
          <label htmlFor="category">Category</label>
        <select
          id="category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="">Select a category</option>
          <option value="Food">Food</option>
          <option value="Transportation">Transportation</option>
          <option value="Bills">Bills</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Other">Other</option>
        </select>
        </div>

        <div className="field">
          <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
        </div>
      </div>

      {error && <p className="form-error" role="alert">{error}</p>}

      <button className="primary-button" type="submit">
        Add Expense
      </button>
    </form>
  )
}

export default ExpenseForm
