/*global data*/

import React, { Component } from 'react';
import Header from '../components/header/Header.jsx'
import Drawer from '../components/drawer/Drawer.jsx'
import injectTapEventPlugin from 'react-tap-event-plugin'
import './Mainscreen.css'

injectTapEventPlugin();


class MainScreen extends Component {
    constructor(props) {
        super(props)
        this.handleReportContent = this.handleReportContent.bind(this)
        this.handleDrawerState = this.handleDrawerState.bind(this)
        this.state = {
            isDrawerActive: false,
            item: []
        }

        this.parsedData = []
    }
   

    handleDrawerState() { this.setState({ isDrawerActive: !this.state.isDrawerActive }) }

    handleReportContent(item) {
        this.setState({ item })
    }


    render() {
        return (
            <div>
                <Header handleDrawerVisibility={this.handleDrawerState} />
                <Drawer open={this.state.isDrawerActive}
                    handleReportContent={(item) => this.handleReportContent(item)}
                    content={this.parsedData} />
                
            </div>
        )
    }
}

export default MainScreen