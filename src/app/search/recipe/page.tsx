import SearchBox from "../../components/SearchBox";
import Table from "../../components/Table/Table";


const Search: React.FC = () => {

    return (
    <>
    <SearchBox type='recipe'/>
    <Table type='recipe'/>
    </>
    );
}

export default Search;