import { useEffect, useState } from 'react'
import './App.css'
import ExpenseForm from './components/ExpenseForm.jsx'
import ExpenseFilter from './components/ExpenseFilter.jsx'
import ExpenseList from './components/ExpenseList.jsx'
import ExpenseSummary from './components/ExpenseSummary.jsx'
import ExpenseChart from './components/ExpenseChart.jsx'

const STORAGE_KEY = 'personal-expenses'

function getSavedExpenses() {
  try {
    const savedExpenses = localStorage.getItem(STORAGE_KEY)

    if (!savedExpenses) {
      return []
    }

    const parsedExpenses = JSON.parse(savedExpenses)
    return Array.isArray(parsedExpenses) ? parsedExpenses : []
  } catch {
    return []
  }
}

function App() {
  const [expenses, setExpenses] = useState(getSavedExpenses)
  const [searchText, setSearchText] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses))
    } catch {
      // The app can still work if browser storage is unavailable.
    }
  }, [expenses])

  const filteredExpenses = expenses.filter((expense) => {
    const matchesSearch = expense.description
      .toLowerCase()
      .includes(searchText.toLowerCase())
    const matchesCategory =
      selectedCategory === 'All' || expense.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  function handleAddExpense(newExpense) {
    setExpenses([...expenses, newExpense])
  }

  function handleDeleteExpense(expenseId) {
    setExpenses(expenses.filter((expense) => expense.id !== expenseId))
  }

  return (
    <main className="app-shell">
      <div className="app-container">
        <header className="app-header">
          <p className="eyebrow">Personal finance</p>
          <h1>Expense Tracker</h1>
          <p className="header-description">
            Keep track of your everyday spending in one place.
          </p>
        </header>

        <ExpenseForm onAddExpense={handleAddExpense} />

        <div className="overview-grid">
          <ExpenseSummary expenses={expenses} />
          <ExpenseChart expenses={expenses} />
        </div>

        <ExpenseFilter
          searchText={searchText}
          selectedCategory={selectedCategory}
          onSearchTextChange={setSearchText}
          onCategoryChange={setSelectedCategory}
        />
        <ExpenseList
          expenses={filteredExpenses}
          hasExpenses={expenses.length > 0}
          onDeleteExpense={handleDeleteExpense}
        />
      </div>
    </main>
  )
}

export default App
