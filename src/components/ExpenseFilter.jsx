function ExpenseFilter({
  searchText,
  selectedCategory,
  onSearchTextChange,
  onCategoryChange,
}) {
  return (
    <section className="expense-filter card">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Find expenses</p>
          <h2>Search and filter</h2>
        </div>
      </div>
      <div className="filter-controls">
        <div className="field search-field">
        <label htmlFor="search">Search expenses</label>
        <input
          id="search"
          type="search"
          value={searchText}
          onChange={(event) => onSearchTextChange(event.target.value)}
        />
        </div>

        <div className="field">
        <label htmlFor="filter-category">Category</label>
        <select
          id="filter-category"
          value={selectedCategory}
          onChange={(event) => onCategoryChange(event.target.value)}
        >
          <option value="All">All</option>
          <option value="Food">Food</option>
          <option value="Transportation">Transportation</option>
          <option value="Bills">Bills</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Other">Other</option>
        </select>
        </div>
      </div>
    </section>
  )
}

export default ExpenseFilter
