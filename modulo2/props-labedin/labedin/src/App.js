import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://avatars.githubusercontent.com/u/72455409?s=400&u=cd0355574ca7ce7e06923cd6b478219d643aac00&v=4" 
          nome="Aloisio Magalhaes" 
          descricao="Oi, eu sou o Aloisio. Sou aluno da Labenu. Adoro pedir pizza na sexta-feira e ouvir musicas."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons.flaticon.com/png/512/2926/premium/2926233.png?token=exp=1654630751~hmac=b622d7d9e34e8990f0c79c2c40f43e0d" 
          texto="Ver mais"
        />
        <CardPequeno
          imagem="https://cdn-icons.flaticon.com/png/512/2504/premium/2504727.png?token=exp=1654630084~hmac=6def92c461251cd35bd9c07d0cfd3ec2"
          nome="E-mail"
          descricao="educacao1ouro@gmail.com"
        />
        <CardPequeno
          imagem="https://cdn-icons-png.flaticon.com/512/2991/2991231.png"
          nome="Endereco"
          descricao="Rua Espanha"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://img.icons8.com/color/452/nasa.png" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
