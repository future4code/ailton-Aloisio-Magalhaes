import React, {Component} from 'react';
const CommentContainer = {
	display: 'flex',
	justify_content: 'center',
	padding: '5px'
}
const InputComentario = {
	width: '100%',
	margin_right: '5px'
}

export class SecaoComentario extends Component {
	state = {
		valorInputComentario:''
	}

	onChangeComentario(event) {
		console.log(event.target.value)
	    this.setState({	valorInputComentario: event.target.value  })
	}

	render() {
		return (
            <CommentContainer>
                <InputComentario
                    placeholder={'Comentário'}
                    value={this.state.valorInputComentario}
                    onChange={this.onChangeComentario}>

				</InputComentario>
                <button onClick={this.props.aoEnviar}>Enviar</button>
            </CommentContainer>
        );
	}
}
