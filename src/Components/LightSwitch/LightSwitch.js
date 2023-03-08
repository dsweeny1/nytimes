import React, {useContext} from 'react'
import { ThemeContext } from '../../Contexts/ThemeContext'
import './LightSwitch.css'
import lightswitchOn from '../../Images/lightswitchOn.png'
import lightswitchOff from '../../Images/lightswitchOff.png'

const LightSwtich = () => {
    const {darkMode, toggleDarkMode} = useContext(ThemeContext)

    const handleClick = () => {
        toggleDarkMode()
    }
    return(
        <div className='LightSwitch'>
            <img 
            className='lightswitch-image'
            src={darkMode ? lightswitchOff : lightswitchOn} 
            alt='Lightswitch'
            onClick={handleClick}
            />
        </div>
    )
}

export default LightSwtich