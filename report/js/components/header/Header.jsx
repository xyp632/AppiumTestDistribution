import React from 'react';
import AppBar from 'material-ui/AppBar';
import './Header.css'

const Header = ({handleDrawerVisibility}) => {
    return (
        <AppBar
            style={{position: 'fixed'}}
            title="Appium Test Distribution Reporter"
            onLeftIconButtonTouchTap={()=>{handleDrawerVisibility()}}>
        </AppBar>
    )
}

export default Header