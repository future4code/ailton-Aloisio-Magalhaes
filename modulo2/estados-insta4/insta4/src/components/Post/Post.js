import React from 'react';

import {IconeComContador} from '../IconeComContador/IconeComContador';

import iconeCoracaoBranco from '../../img/favorite-white.svg';
import iconeCoracaoPreto from '../../img/favorite.svg';
import iconeComentario from '../../img/comment_icon.svg';
import {SecaoComentario} from '../SecaoComentario/SecaoComentario';

const PostContainer = {
	border: '1px solid gray',
	width: '300px',
	margin_bottom: '10px'
}
const PostHeader = {
	height: '40px',
	display: 'flex',
	align_items: 'center',
	padding_left: '10px'
}
const PostFooter = {
	height: '40px',
	display: 'flex',
	align_items: 'center',
	paddig: '0 10px',
	justify_content: 'space-between'
}
const UserPhoto = {
	height: '30px',
	width: '30px',
	margin_right: '10px',
	border_radius: '50%'
}
const PostPhoto = {
	width: '100%'
}

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0
  }

  onClickCurtida = () => {
    var trocaImagem;
    trocaImagem = this.state.curtido === false ? this.state.numeroCurtidas + 1 : this.state.numeroCurtidas - 1
      this.setState({
        curtido: !this.state.curtido,
        numeroCurtidas: trocaImagem});

          console.log('Curtiu!')
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  render() {
    let iconeCurtida
	iconeCurtida = this.state.curtido ? iconeCurtida = iconeCoracaoPreto : iconeCurtida = iconeCoracaoBranco
    
    let componenteComentario
	componenteComentario = !this.state.comentando ? componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/> : console.log(this.aoEnviarComentario);

    return <PostContainer style={PostContainer}>
      <PostHeader style={PostHeader}>
        <UserPhoto style={UserPhoto} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto style={PostPhoto} src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter style={PostFooter}>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </PostFooter>
      {componenteComentario}
    </PostContainer>
  }
}

export default Post 
