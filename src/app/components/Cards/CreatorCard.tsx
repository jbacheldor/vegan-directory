import './Cards.css'

// perhaps a type folder could be of benefit
export enum specialities {
    Sustainability = "SUSTAINABILITY",
}


export type CreatorProps = {
    name: string,
    website: string, 
    handle: string,
    // could alternatively do socials here
    instagram?: string,
    tiktok?: string,
    //  only optional b/c i dont have data for all of this
    fullyVegan?: boolean, 
    speciality: string
}

const CreatorCard:React.FC<{props: CreatorProps}> = ({props}) => {
    const {name, website, handle, instagram, tiktok, fullyVegan, speciality} = props

    return (
        <div className='card'>
            <div id="topSection">
                <span id='recipeTitle'>{name}</span>
                <span>
                {handle}
                </span>
            </div>
            <hr/>
            <div id="detailsSection">
z                <span>{speciality}</span>
            </div>
            <hr/>
            <div id="socialsSection">
                <span>{website}</span>
                <span>{instagram}</span>
                <span>{tiktok}</span>
            </div>
        </div>
    )
}

export default CreatorCard