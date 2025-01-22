import CreatorCard, { CreatorProps } from '../Cards/CreatorCard';
import RecipeCard, { RecipeProps } from '../Cards/RecipesCard';
import './Table.css'

type props = {
    type: string;
}

const Table: React.FC<props> = ({type}) => {

    const recipeResults: RecipeProps[] = [{
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

    const creatorResults: CreatorProps[] = [{
        name: 'jess',
        website: 'jess.com',
        handle: 'veganjess',
        instagram: 'woofwoof.com',
        tiktok: 'anotherlinkisuppose.com',
        fullyVegan: true,
        speciality: "swag"
    }, 
{
    name: 'jess',
    website: 'jess.com',
    handle: 'veganjess',
    instagram: 'woofwoof.com',
    tiktok: 'anotherlinkisuppose.com',
    fullyVegan: true,
    speciality: "swag"
}, {
    name: 'jess',
    website: 'jess.com',
    handle: 'veganjess',
    instagram: 'woofwoof.com',
    tiktok: 'anotherlinkisuppose.com',
    fullyVegan: true,
    speciality: "swag"
}]

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