import Link from 'next/link';


function Listausers(props){
	return(
		<div>
			<div>{props.staticA}</div>
			<Link href="/">
				<a>inicio</a>
			</Link>
		</div>
	);
}

//API
export async function getStaticProps(){
	const staticA = 1;
	return({
		props: {
			staticA
		},
		revalidate: 3
	 });
}

export default Listausers;