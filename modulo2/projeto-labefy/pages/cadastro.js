import Link from 'next/link';
import styled from "styled-components"

const pagina = styled.div`
	*{margin:0;}
	.login{
		display: grid;
		place-items: center;
		height: 100vh;
		background-color: black;
	}
	.login > img{
		width: 100%;
	}
	.login > a {
		padding: 20px;
		border-radius:99px;
		background-color: #1db954;
		font-weight: 800;
		color: white;
		text-decoration: none;
	}

`;

function Login(){

	return (
		<div>
			<img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" alt="Spotify_Logo"/>
		    <Link href="/">
				<a>inicio</a>
			</Link>
		</div>
	);
}


export default function Cadastro(){

	return (
		<div>
            <Login/>
		</div>
	);
}
