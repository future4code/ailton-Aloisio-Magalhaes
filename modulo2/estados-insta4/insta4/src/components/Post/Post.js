import React from 'react';

import {IconeComContador} from '../IconeComContador/IconeComContador';

import iconeCoracaoBranco from '../../img/favorite-white.svg';
import iconeCoracaoPreto from '../../img/favorite.svg';
import iconeComentario from '../../img/comment_icon.svg';
import {SecaoComentario} from '../SecaoComentario/SecaoComentario';

import './PostContainer.css';
import './PostHeader.css';
import './PostFooter.css';
import './UserPhoto.css';
import './PostPhoto.css';

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

    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
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
