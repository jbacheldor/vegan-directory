import { RecipeProps } from '@/app/types/searchResults';
import './Cards.css'

const RecipeCard: React.FC<{props: RecipeProps}> = ({props}) => {
    const {title, servings, url, author, description, cookTime, allergies} = props
    
    return(
        <>
        <div className='card'>
            <div id="recipeTopSection">            
                <div id="recipeTitle">
                {title}
            </div>
            <div>
                {author}
            </div>
            </div>
            <hr/>

            <div id="cardDescription">
                {description}
            </div>

            <hr/>
            <div id="recipeInfo">
                <span>serving size: {servings}</span>
                <a href={url}>link</a>
            </div>
            </div>
        </>
    )
}

export default RecipeCard;