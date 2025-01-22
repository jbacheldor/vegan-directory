import ResultsCard, { props } from '../Cards/ResultsCard';
import './Table.css'

const Table: React.FC = () => {

    const results: props[] = [{
        title: "soup",
        servings: 145,
        url: "soup.com",
        author: "victor",
        description: "tasty soup will make u live forever"
    }, {
        title: "roasted potatoes",
        servings: 34,
        url: "yum.org",
        author: "jess",
        description: "lorum ipsum eggs"
    }, {
        title: "cornbread",
        servings: 2,
        url: "jiffy.com", 
        author: "us",
        description: "corn bread from nc"
    }]
    

    return (
        <div>
            <div id="resultsContainer">
                Results
                {results.map((i, index)=> {
                    return (
                        <div key={index}>
                            <ResultsCard description={i.description} title={i.title} servings={i.servings} url={i.url} author={i.author}/>
                        </div>
                    )
                })}

            </div>
        </div>
    );
}

export default Table;