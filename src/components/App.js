import React from 'react';
import Encabezado from './Encabezado';
import ComponenteHijo from './ComponenteHijo';
import '../assets/styles/estilos.css';
import { subArreglos } from '../hooks/useSubArreglos.js';

const App = () => {

	let arreglo = [9,8,4,5,6,7,1,9];
	let rangos = subArreglos(arreglo);

	return (
		<div className="grid">
			<Encabezado/>
			{rangos.map(cmp => <ComponenteHijo texto={cmp} />)}			
		</div>
	);
}
 
export default App;