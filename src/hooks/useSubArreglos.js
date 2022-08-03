
const subArreglos = (arregloInicial)=>{
	let arregloOrdenado = arregloInicial.sort();
	let rangos = [];
	/*buscamos los numeros en el array que sean consecuentes
		[1,2,3,4,5,6] respuesta [1234,89,66]*/
		

	let diff = 0;
	let cnt = 0;
	/* siempre entra el primero*/
	rangos[cnt] = arregloOrdenado[0].toString();

	for( let i=1; i<arregloOrdenado.length; i++ ){
		diff = arregloOrdenado[i] - arregloOrdenado[i-1];
		if(diff <= 1){
			rangos[cnt] += arregloOrdenado[i].toString();
		}else{
			cnt++;
			rangos[cnt] = arregloOrdenado[i].toString();
		}
	}
	let i=0;
	rangos.map(e=> rangos[i++]=parseInt(e));

	return rangos;
}

export { subArreglos };



