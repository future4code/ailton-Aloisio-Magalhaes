import React from 'react';

const IconContainer = {
	display: 'flex'
}
const IconImage = {
	margin_right: '5px'
}

export function IconeComContador(props) {
	return <IconContainer style={IconContainer}>
		<IconImage style={IconImage} alt={'Icone'} src={props.icone} onClick={props.onClickIcone}/>
		<p>{props.valorContador}</p>
	</IconContainer>
}
