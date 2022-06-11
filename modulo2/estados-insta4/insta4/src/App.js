import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const PostArray = [
  {nomeUsuario: "paulinha", fotoUsuario: "https://picsum.photos/50/50",
  fotoPost: "https://picsum.photos/200/150"},
  {nomeUsuario: "paulo", fotoUsuario: "https://picsum.photos/50/50",
  fotoPost: "https://picsum.photos/200/150"},
  {nomeUsuario: "aninha", fotoUsuario: "https://picsum.photos/50/50",
  fotoPost: "https://picsum.photos/200/150"}]; 	
  
  
class App extends React.Component {
  
  render() {
var ListaDePost = PostArray.map((postagem)=>{return <div>{postagem}</div>});
	  
    return (
      <MainContainer>
       <div>{ListaDePost}</div>
      </MainContainer>
    );
  }
}

export default App;
