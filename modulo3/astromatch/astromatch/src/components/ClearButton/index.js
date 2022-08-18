import React from 'react'
import {connect} from 'react-redux'
import {clearSwipes} from '../../actions/profiles'
import styled from 'styled-components'

const ClearButton = styled.button`
	position: fixed;
	bottom: 5px;
	right: 5px;
`

function mapDispatchToProps(dispatch) {
	return {
		clearSwipes: () => dispatch(clearSwipes()),
	}
}

function ClearButtonWrapper(props) {
	return <ClearButton onClick={props.clearSwipes}>Limpar swipes e matches</ClearButton>
}

export default connect(
	null,
	mapDispatchToProps
)(ClearButtonWrapper)