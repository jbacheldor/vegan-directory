
export type RecipeProps = {
    title: string;
    servings: number;
    url: string;
    author: string;
    description: string;
    cookTime?: number;
    allergies?: string[]
}

export type CreatorProps = {
    creatorid: number,
    creatorname?: string,
    website?: string, 
    handle: string,
    // could alternatively do socials here
    instagram?: string,
    tiktok?: string,
    //  only optional b/c i dont have data for all of this
    fullyVegan?: boolean, 
    speciality?: string
}


// perhaps a type folder could be of benefit
export enum specialities {
    Sustainability = "SUSTAINABILITY",
}
