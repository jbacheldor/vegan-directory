import './Cards.css'

export type props = {
    title: string;
    servings: number;
    url: string;
    author: string;
    description: string;
    cookTime?: number;
    allergies?: string[]
}

const ResultsCard: React.FC<props> = (props) => {
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

export default ResultsCard;