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
    color: ${props => props.value ? '#89999d' : '#313131'};
    font-weight: ${props => props.value ? 'bold' : 'normal'};
    flex: 1;
`

const CategoryTable = ({ details }) => {
    return (
        <Paper>
            <Header>
                <HeaderContent>Device Name</HeaderContent>
                <HeaderContent>Passed</HeaderContent>
                <HeaderContent>Failed</HeaderContent>
                <HeaderContent>Skipped</HeaderContent>
            </Header>
            {details.map((detail, i)=> {
                return (
                    <ContentRow key={i}>
                        <ContentRowData>{detail.device}</ContentRowData>
                        <ContentRowData value>{detail.passCount}</ContentRowData>
                        <ContentRowData value>{detail.failCount}</ContentRowData>
                        <ContentRowData value>{detail.skipCount}</ContentRowData>
                    </ContentRow>
                )
            })}
        </Paper>

    )
}

CategoryTable.propTypes = {
    details: PropTypes.array
}

export default CategoryTable;