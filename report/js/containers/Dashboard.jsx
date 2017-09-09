/*global data*/

import React, { Component } from 'react';
import TestInfo from '../components/testInfo/TestInfo.jsx'
import Divider from 'material-ui/Divider'
import styled from 'styled-components'
import EnviromentTable from '../components/enviromentTable/EnviromentTable.jsx'

const TestInfoWrapper =  styled.div`
    display: flex;
    justify-content: space-around;
`
const TableGrid = styled.section`
    margin: 24px;
    display: grid;
    grid-template-columns: 1fr 1fr ;
    grid-gap: 12px;
`

const enviromentdata = [
    {
        name: 'Selenium Java Version',
        value: '3.3.1'
    },
    {
        name: 'Environment',
        value: 'Prod'
    },
    {
        name: 'AppiumClient',
        value: '5.0.0-BETA6'
    },
    {
        name: 'AppiumServer',
        value: '1.6.5-beta'
    },
    {
        name: 'Runner',
        value: 'Parallel'
    }
]
class Dashboard extends Component {
   
    render() {
        return (
            <div>
                <TestInfoWrapper>
                    <TestInfo iconName="beenhere"
                        iconColor="#13a3a4"
                        header="Tests pass"
                        value="8" />
                    <TestInfo iconName="error_outline"
                        iconColor="#13a3a4"
                        header="Tests fail"
                        value="0" />
                    <TestInfo iconName="hourglass_empty"
                        iconColor="#13a3a4"
                        header="Start time"
                        value="8:20" />
                    <TestInfo iconName="hourglass_full"
                        iconColor="#13a3a4"
                        header="End time"
                        value="8:25" />
                </TestInfoWrapper>
                <TableGrid>
                    <EnviromentTable details={enviromentdata}/>
                    <EnviromentTable details={enviromentdata}/>
                </TableGrid>
            </div>
        )
    }
}



export default Dashboard