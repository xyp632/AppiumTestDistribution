import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin'
import AppBar from 'material-ui/AppBar';
import styled from 'styled-components'

const MainWrapper = styled.main `
    position: relative;
    top: 64px;
`

injectTapEventPlugin()



class Main extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar
                        style={{ position: 'fixed' }}
                        title="Appium Test Distribution Reporter">
                    </AppBar>
                    <MainWrapper>
                        {this.props.children}
                    </MainWrapper>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default Main