import { CreatorProps } from '@/app/types/searchResults'
import './Cards.css'

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