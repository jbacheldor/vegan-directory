import './Header.css'

type props = {
    name: string
}

const Header:React.FC<props> = ({name}) => {

    return (
        <div id='dividertitles'>
            <hr className='divider'/> 
            <span className='title'>{name}</span>
            <hr className='divider'/>
        </div>
    );
}
export default Header;