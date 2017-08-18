import React from 'react';
import AppBar from 'material-ui/AppBar';
import './Header.css'

const Header = ({handleDrawerVisibility}) => {
    return (
        <AppBar
            style={{position: 'fixed'}}
            title="Appium Test Distribution Reporter"
            onLeftIconButtonTouchTap={()=>{handleDrawerVisibility()}}
        >
            <div className="App-header">
                <h2>Appium Test Distribution Reporter</h2>
            </div>
        </AppBar>
    )
}

export default Header