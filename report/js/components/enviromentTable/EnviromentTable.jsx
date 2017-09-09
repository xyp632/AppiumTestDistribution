import React from 'react';
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import styled from 'styled-components'


const Header = styled.div`
    background-color: #d6d6d6;
    padding: 16px 24px;
    display: flex;

`
const HeaderContent = styled.p`
    color: #09a8bd;
    font-weight: bold;
    flex: 1;
`
const ContentRow = styled.div`
    background-color: #fff;
    padding: 8px 24px;
    display: flex;
`
const ContentRowData = styled.p`
    color: #313131;
    flex: 1;
`

const EnviromentTable = ({ details }) => {
    return (
        <Paper>
            <Header>
                <HeaderContent>Name</HeaderContent>
                <HeaderContent>Value</HeaderContent>
            </Header>
            {details.map((detail, i)=> {
                return (
                    <ContentRow key={i}>
                        <ContentRowData>{detail.name}</ContentRowData>
                        <ContentRowData>{detail.value}</ContentRowData>
                    </ContentRow>
                )
            })}
        </Paper>

    )
}

EnviromentTable.propTypes = {
    details: PropTypes.array
}

export default EnviromentTable;