import React, {Component} from 'react';
import './CommentContainer.css';
import './InputComentario.css';

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
