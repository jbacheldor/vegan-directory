import { CreatorProps, RecipeProps } from '@/app/types/searchResults';
import { creatorResults, recipeResults } from '@/app/utils/localData';
import CreatorCard from '../Cards/CreatorCard';
import RecipeCard from '../Cards/RecipesCard';
import './Table.css'

// type props = {
//     type: string;
//     data?: CreatorProps[] | RecipeProps[] ;
// }

type TableProps<T extends 'creator' | 'recipe'> = { type: T, data?: T extends 'creator' ? CreatorProps[] : RecipeProps[] }

// const Table: React.FC<props> = ({type, data}) => {
// const Table: React.FC<T extends 'creator'> = ({type, data}) => {
function Table<T extends 'creator' | 'recipe'>({ type, data }: TableProps<T>) {

    const localData = type == 'recipe' ? recipeResults : creatorResults
    const results = data ? data : localData


    console.log(results)

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
                {type == 'creator' && (results as CreatorProps[]).map((i, index)=> {
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