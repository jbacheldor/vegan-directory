import { CreatorProps } from '@/app/types/searchResults'
import './Cards.css'

const CreatorCard:React.FC<{props: CreatorProps}> = ({props}) => {
    const {creatorname, website, handle, instagram, tiktok, speciality} = props

    return (
        <div className='card'>
            <div id="topSection">
                <span id='recipeTitle'>{creatorname}</span>
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