"use client"
import Button, { buttonTypes } from "../components/Buttons/Button";
import Header from "../components/HeaderSection/Header";
import './designs.css'

const DesignPage:React.FC = () => {

    return (        
    <>
    <Header name={'Designs'}/>
    <div id='DesignSections'>
        <Header name={"Buttons"}/>
        <div id="buttonSection">
            <Button title='enabled' type={buttonTypes.Enabled}/>
            <Button title='disabled' type={buttonTypes.Disabled}/>
            <Button title='primary' type={buttonTypes.Primary}/>
            <Button title='secondary' type={buttonTypes.Secondary}/>
        </div>
    </div>
    </>)    
}
export default DesignPage;