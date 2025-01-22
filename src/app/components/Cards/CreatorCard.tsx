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
        <div>
            <div id="topSection">
                <span>{name}</span>
                <span>
                {handle}
                </span>
            </div>
            <div id="detailsSection">
                <span>{fullyVegan}</span>
                <span>{speciality}</span>
            </div>
            <div id="socialsSection">
                <span>{website}</span>
                <span>{instagram}</span>
                <span>{tiktok}</span>
            </div>
        </div>
    )
}

export default CreatorCard