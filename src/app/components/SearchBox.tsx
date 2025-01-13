import './Search.css'

const SearchBox: React.FC = () => {

    const filters = ['speciality', 'gender']

    return (
    <>
    <div id='searchContainer'>
        <span className='searchTitles'>Search</span>
        <hr className='divider'/>
        <div id="searchBox">
            <input id='searchInput'></input>
            <button id='searchButton'>Search</button>
        </div>
        <span className='searchTitles'>Filters</span>
        <hr className='divider'/>
        <div id='filters'>
            {filters.map((i, index)=> {
                return (
                    <div key={index} className='filterBoxes'>
                    {i}
                    </div>
                )
            })}
        </div>
    </div>
    </>
    );
}

export default SearchBox;