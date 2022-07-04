import React from 'react'
import ReactDOM from 'react-dom'
import styled, {createGlobalStyle} from 'styled-components'
import App from './App.js'
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat|Roboto');
  body {
    margin: 0;
    background-color: #D0D0D0;
    font-family: Roboto, sans-serif;
    width: 400px;
  height: 600px;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
  border: 1px solid black;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 0 5px #0000000F;
  }
  
  * {
    box-sizing: border-box;
  }
`

const root = () => {
	return (<>
			<GlobalStyle/>
				<App/>
	</>)
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App/>, rootElement)
