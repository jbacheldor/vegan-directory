import { creatorResults, recipeResults } from '@/app/utils/localData';
import CreatorCard from '../Cards/CreatorCard';
import RecipeCard from '../Cards/RecipesCard';
import './Table.css'

type props = {
    type: string;
    data?: any[];
}

const Table: React.FC<props> = ({type, data}) => {

    console.log(data)

    return (
        <div>
            <div id="resultsContainer">
                Results
                {type == 'recipe' && recipeResults.map((i, index)=> {
                    return (
                        <div key={index}>
                            <RecipeCard props={i}/>
                        </div>
                    )
                })}
                {type == 'creator' && creatorResults.map((i, index)=> {
                    return (
                        <div key={index}>
                            <CreatorCard props={i}/>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Table;