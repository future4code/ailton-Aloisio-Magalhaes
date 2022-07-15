import { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

/*
function Contador(){
	const [contador, setContador] = useState(1);
	function addContador(){
		setContador(contador + 1);
	}
	return(
		<div>
			<div>{contador}</div>
			<button onClick={addContador}>add</button>
		</div>
	);
}
*/

export default function Home(){
	return (
		<div>			
			
			
		<Link href="/listausers">
				<a>listausers</a>
		</Link>
		
		</div>
	);
}
