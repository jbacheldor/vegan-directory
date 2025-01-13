import './Search.css'

const SearchBox: React.FC = () => {

    const filters = ['speciality', 'gender']

    return (
    <>
    <div id="searchBox">
        <input id='searchInput'></input>
        <button id='searchButton'>Search</button>
    </div>
    <div id='filters'>
        Filters
        {filters.map((i, index)=> {
            return (
                <div key={index} className='filterBoxes'>
                {i}
                </div>
            )
        })}

    </div>
    </>
    );
}

export default SearchBox;