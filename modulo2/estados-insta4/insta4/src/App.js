import React from 'react';
import Post from './components/Post/Post';
/*
const MainContainer = {
	display: 'flex',
	justify_content: 'center',
	flex_direction: 'column',
	align_items: 'center'
}
*/
class App extends React.Component {
 render(){
  return (
	<div style={{display: 'flex', justify_content: 'center', flex_direction: 'column', align_items: 'center'}}>
	 <Post
	 	nomeUsuario={'paulinha'}
	 	fotoUsuario={'https://picsum.photos/50/50'}
	 	fotoPost={'https://picsum.photos/200/150'}
	 // eslint-disable-next-line	
	 />
	 <Post
	 	nomeUsuario={'joao'}
	 	fotoUsuario={'https://picsum.photos/50/50'}
	 	fotoPost={'https://picsum.photos/200/150'}
	 // eslint-disable-next-line
	 />
	 
	</div>
  );
 }
}

export default App;
