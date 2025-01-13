import classNames from '../../../../node_modules/classnames/index'
import './button.css'

export enum buttonTypes {
    Enabled = 'ENABLED',
    Disabled = 'DISABLED',
    Primary = 'PRIMARY',
    Secondary = 'SECONDARY'
}

type props = {
    type: buttonTypes,
    title: string,
}

const Button:React.FC<props> = ({type, title}) => {
    const btnClass = classNames('btn', type)
    return (
        <button className={btnClass}>
            {title}
        </button>
    );
}

export default Button;