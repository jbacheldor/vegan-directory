import Header from './HeaderSection/Header';
import './Search.css'

type props = {
    type: string;
}

const SearchBox: React.FC<props> = ({type}) => {

    const filters = type == 'creator' ? ['speciality', 'gender'] : ['cuisine', 'region']

    return (
    <>
    <Header name={'Search'}/>
    <div id='searchContainer'>
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