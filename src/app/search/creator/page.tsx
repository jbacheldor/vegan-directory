import SearchBox from "@/app/components/SearchBox";
import Table from "@/app/components/Table/Table";

const searchCreator: React.FC = () => {

    return (
        <>
            <SearchBox type='creator'/>
            <Table type='creator'/>
        </>
    );
}

export default searchCreator;