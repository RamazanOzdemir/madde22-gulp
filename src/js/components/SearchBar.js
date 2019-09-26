import React,{useState} from 'react'
const SearchBar = () => {
    const [search,setSearch] = useState('')
    const handleSearch = (e)=>{
        setSearch(e.target.value);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        setSearch('');
    }
    return (
        <div className='search search--bg'>
            <i className='material-icons search__icon'>search</i>
            <form onSubmit={handleSubmit}>
                <input type='text' value={search} onChange={handleSearch} placeholder='Search' className='search__input search--bg'></input>
            </form>
        </div>
    )
}

export default SearchBar
