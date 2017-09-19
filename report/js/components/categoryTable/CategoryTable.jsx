import React from 'react';
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import FontIcon from 'material-ui/FontIcon'
import styled from 'styled-components'


const Header = styled.div`
    background-color: #d6d6d6;
    padding: 16px 24px;
    display: grid;
    grid-template-columns:2fr 1fr 1fr 1fr;

`
const HeaderContent = styled.p`
    color: #09a8bd;
    font-weight: bold;
`
const ContentRow = styled.div`
    background-color: #fff;
    padding: 8px 24px;
    display: grid;
    grid-template-columns:2fr 1fr 1fr 1fr;
`
const ContentRowData = styled.p`
    color: #89999d;
    font-weight: 500;
    display: flex;
    align-items: center;

    & span {
        margin-right: 8px;
    }
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
                const iconName = detail.platform === 'ANDROID' ? 'android' : 'phonelink setup'
                const iconColor = detail.platform === 'ANDROID' ? '#A4CA39' : '#444444'
                return (
                    <ContentRow key={i}>
                        <ContentRowData>
                            <FontIcon className="material-icons"
                                color={iconColor}>
                                {iconName}
                            </FontIcon>
                            <p>{detail.device}</p>
                        </ContentRowData>
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