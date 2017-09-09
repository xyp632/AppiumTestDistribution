import React from 'react'
import Paper from 'material-ui/Paper'
import styled from 'styled-components'
import FontIcon from 'material-ui/FontIcon'


const InfoHeader = styled.h1`
    color: #13a3a4;
    font-size: 18px;
    font-weight: bold;
    text-align: left;
    padding: 16px;

`
const InfoHeaderWrapper = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
`

const TestInfoValue = styled.p `
    font-size: 36px;
    padding: 24px;
    color: #f4457b;
`

const TestInfo = (props) => {
    return (
        <Paper style={style} zDepth={1}>
            <InfoHeaderWrapper>
                <FontIcon className="material-icons" 
                    color={props.iconColor}>{props.iconName}</FontIcon>
                <InfoHeader>{props.header}</InfoHeader>
            </InfoHeaderWrapper>
            <TestInfoValue>{props.value}</TestInfoValue>
        </Paper>
    )
}

const style = {
    width: 200,
    margin: 20,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContnet: 'center',
    alignItems: 'center'
  }

  export default TestInfo