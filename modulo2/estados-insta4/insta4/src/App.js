import logo from './logo.svg';
//import './App.css';
import MainContainer from '.components/MainContainer/MainContainer';
import Post from './components/Post/Post';

function App() {
  return (
    <div className="App">
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'joao'}
          fotoUsuario={'https://picsum.photos/50/51'}
          fotoPost={'https://picsum.photos/200/151'}
        />
        <Post
          nomeUsuario={'amanda'}
          fotoUsuario={'https://picsum.photos/50/52'}
          fotoPost={'https://picsum.photos/200/152'}
        />
      </MainContainer>
    </div>
  );
}

export default App;
