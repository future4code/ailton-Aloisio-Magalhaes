//API
/*export async function getServerSideProps(context){
	const id = context.query.id;
	return {response:{id:id}};
}*/

async function Labefy (request, response){
	const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/";
	const apiSecret = process.env.LABEFY_API_SECRET;
	const apiAcesso = { headers: {Authorization: apiSecret} };
	const allPlaylists = 'playlists';
	const criarPlaylistPost = '{{baseUrl}}/playlists/createPlaylist';
	const tracks ='playlists/:playlistId/tracks'//playlists/${:playlistId}/tracks
	const search = 'search?name=';//search?name=${string}
	
	//const pegarUsuarios = await fetch(`${url}users${apiAcesso}`);
	//const listaUsers = await pegarUsuarios.json().users;


	response.setHeader('Cache-Control','s-maxage=3, stale-while-revalidate');
	response.json({
		//usuariosCadastrados: listaUsers
		//{id}
	});
}

export default Labefy;