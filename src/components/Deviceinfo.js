import React from "react";
import { useTheme } from './ThemeContext';

function Deviceinfo() {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    console.log('Is Mobile Device:', isMobile);
    const { theme, toggleTheme } = useTheme();

    return <div className={`App ${theme}`}>
        <h4> User Agent: {navigator.userAgent}</h4>
        <h4> Screen Width: {window.screen.width}</h4>
        <h4> Screen Height: {window.screen.height}</h4>
        <h4> Is Mobile Device: {isMobile}</h4>
        <h4> Platform: {navigator.platform}</h4>
        <h4> Language: {navigator.language}</h4>
        <h4> Browser Version:: {navigator.appVersion}</h4>
        <button onClick={toggleTheme}>change theme</button>
    </div>

}

export default Deviceinfo;