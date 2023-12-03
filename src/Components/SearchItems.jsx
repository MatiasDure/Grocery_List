function SearchItems({search, setSearch}) {
    return (
        <form className="searchName" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="search">Search</label>
            <input 
                type="text" 
                id="search"
                role="searchbox"
                placeholder="Search Items"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </form>
    )
}

export default SearchItems;