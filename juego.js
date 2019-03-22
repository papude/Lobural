var uno = 0;
var dos = 0;
var click = 0;
var indiceXAnt = 0;
var indiceYAnt = 0;
var acertado = 0 ;
var puntuacion = 0;
var puntuacionDOS = 0;
tableroCartas = new Array(20);
indiceCartas = new Array(20);
var nivelDos = false;
var nivelUno = true;
var nivelTres = false;
var borrador = true;
var primera = 0;

//CREO EL ARRAY DONDE VAN A IR LAS POSICIONES
function tablero() {
	for(var i=0;i<20;i++) {
		tableroCartas[i] = new Array(20);
		for (var j=0; j<20; j++) {
			tableroCartas[i][j] = 0;
		}
	}
}

//PONGO VALORES DE CARTA LOBURAL
function lobural() {
	for(var i=0;i<20;i++) {
		indiceCartas[i] = new Array(20);
		for (var j=0;j<20;j++) {
			indiceCartas[i][j] = 0;
		}
	} 
}

//FALSEO LOS VALORES DE LAS CARTAS DESCUBIERTAS
function valoresAleatorios(){
	indiceCartas[0][0] = 1;
	indiceCartas[1][0] = 1;
	indiceCartas[2][0] = 4;
	indiceCartas[3][0] = 4;
	indiceCartas[4][0] = 7;
	indiceCartas[0][1] = 2;
	indiceCartas[1][1] = 2;
	indiceCartas[2][1] = 3;
	indiceCartas[3][1] = 3;
	indiceCartas[4][1] = 8;
	indiceCartas[0][2] = 5;
	indiceCartas[1][2] = 5;
	indiceCartas[2][2] = 6;
	indiceCartas[3][2] = 6;
	indiceCartas[4][2] = 7;
	indiceCartas[0][3] = 8;
	indiceCartas[1][3] = 9;
	indiceCartas[2][3] = 9;
	indiceCartas[3][3] = 10;
	indiceCartas[4][3] = 10;
}
  
//NIVEL 1
function muestraCartas(elEvento) {
	elemento = document.getElementById('myCanvas');
	contexto = elemento.getContext('2d');
	uno = 0; //Buscar la primera posición de la carta 1 1
	doble = 0;
 	var EntrX = 1;
 	var EntrY = 1;
 	var fila = [240, 350, 460];
	var columna = [430, 540, 650, 760];
	var evento = elEvento || window.event;
	var coordenadaX = evento.clientX;
	var coordenadaY = evento.clientY;
	console.log("Has pulsado el ratón en la posición: " + coordenadaX + ", " + coordenadaY);
	indiceX = 1;
	indiceY = 1;
	if(coordenadaY>250 && coordenadaX>430 && coordenadaY<600 && coordenadaX<900) {
		indiceX = 1;
		flag = true;
		while(coordenadaX>columna[indiceX] && indiceX<4) {
			indiceX++;
		}
  	indiceY = 1;
	while(coordenadaY>fila[indiceY] && indiceY<3) {
		indiceY++;
	}
	tableroCartas[indiceX-1][indiceY-1] = indiceCartas[indiceX-1][indiceY-1];
	}
	//alert("indiceX"+ indiceX+" Indice y"+ indiceY)
	for(i=0;i<4;i++){
		uno = uno + 110;
		//tableroCartas[indiceX-1][indiceY-1] = Math.floor(Math.random() * 7);
		for (j = 0; j<3; j++){
			//tableroCartas[indiceX-1][indiceY-1] = Math.floor(Math.random() * 7);
			if(tableroCartas[i][j]==0) {
				contexto.drawImage(carta,uno,dos);
			}
			if(tableroCartas[i][j]==1) {
				contexto.drawImage(paris,uno,dos);
			}
			if(tableroCartas[i][j]==2) {
				contexto.drawImage(libertad,uno,dos);
			}
			if(tableroCartas[i][j]==3) {
				contexto.drawImage(oporto,uno,dos);
			}
			if(tableroCartas[i][j]==4) {
				contexto.drawImage(casa,uno,dos);
			}
			if(tableroCartas[i][j]==5) {
				contexto.drawImage(taj,uno,dos);
			}
			if(tableroCartas[i][j]==6) {
				contexto.drawImage(stone,uno,dos);
			}
			dos = dos + 110;
		}
        dos = 0; 
    }
	click ++;
    console.log(click);
    if(click == 1) {
		indiceXAnt = indiceX-1;
		indiceYAnt = indiceY-1;
    }
    if(click == 2) {
		if(tableroCartas[indiceX-1][indiceY-1] == tableroCartas[indiceXAnt][indiceYAnt]) {
			acertado = acertado+1;
		}
		if(tableroCartas[indiceX-1][indiceY-1] != tableroCartas[indiceXAnt][indiceYAnt]) {
          tableroCartas[indiceX-1][indiceY-1] = 0;
          tableroCartas[indiceXAnt][indiceYAnt] = 0;
		}
		click = 0;
    }
   puntuacion = puntuacion + 1;
   if(acertado == 7){
	   nivelDos = true;
	   borrador = true;
	   click = 0;
	   nivelUno = false;
	   borrado();
	   lobural();
	   valoresAleatorios();
	}
}

//NIVEL DOS (20 CARTAS 10 IGUALES)
function muestraCartasNivelDos(elEvento) {
	elemento = document.getElementById('myCanvas');
	contexto = elemento.getContext('2d');
	uno = 0; //Buscar la primera posición de la carta 1 1
	doble = 0;
	var EntrX = 1;
	var EntrY = 1;
	var fila = [240, 350, 460, 570];
	var columna = [430, 540, 650, 760, 870];
	var evento = elEvento || window.event;
	var coordenadaX = evento.clientX;
	var coordenadaY = evento.clientY;
	console.log("Has pulsado el ratón en la posición: " + coordenadaX + ", " + coordenadaY );
	indiceX=1;
	indiceY=1;
	if(coordenadaY>250 && coordenadaX>430 && coordenadaY<800 && coordenadaX<1010) {//LÍMITES DEL TABLERO
		indiceX = 1;
		flag = true;
		while(coordenadaX>columna[indiceX] && indiceX<5) {
			indiceX++;
		}
		indiceY = 1;
		while(coordenadaY>fila[indiceY] && indiceY<4) {
			indiceY++;
		}
		tableroCartas[indiceX-1][indiceY-1] = indiceCartas[indiceX-1][indiceY-1];
	}
	for(i=0;i<5;i++) {
		uno = uno + 110;
		for (j = 0; j<4; j++){
			if(tableroCartas[i][j]==0) {
				contexto.drawImage(carta,uno,dos);
			}
			if(tableroCartas[i][j]==1) {
				contexto.drawImage(gorrion,uno,dos);
			}
			if(tableroCartas[i][j]==2){
				contexto.drawImage(delfin,uno,dos);
			}
			if(tableroCartas[i][j]==3) {
				contexto.drawImage(tigre,uno,dos);
			}
			if(tableroCartas[i][j]==4) {
				contexto.drawImage(leon,uno,dos);
			}
			if(tableroCartas[i][j]==5) {
				contexto.drawImage(camaleon,uno,dos);
			}
			if(tableroCartas[i][j]==6) {
				contexto.drawImage(tortuga,uno,dos);
			}
			if(tableroCartas[i][j]==7) {
				contexto.drawImage(buitre,uno,dos);
			}
			if(tableroCartas[i][j]==8) {
				contexto.drawImage(perro,uno,dos);
			}
			if(tableroCartas[i][j]==9) {
				contexto.drawImage(tiburon,uno,dos);
			}
			if(tableroCartas[i][j]==10) {
				contexto.drawImage(jirafa,uno,dos);
			}
			dos = dos + 110;
		}
		dos = 0;
	}
    click ++;
    console.log(click);
    if(click == 1) {
		indiceXAnt = indiceX-1;
		indiceYAnt  = indiceY-1;
    }
    if(click == 2) {
		if( tableroCartas[indiceX-1][indiceY-1] != tableroCartas[indiceXAnt][indiceYAnt]){
			tableroCartas[indiceX-1][indiceY-1] = 0;
			tableroCartas[indiceXAnt][indiceYAnt] = 0;
		}
		click = 0;
	}
	puntuacionDOS = puntuacionDOS +1;
   //console.log("Tu numero de intentos es:"+puntuacion);
   //console.log("Has acertado: "+acertado);
}


function borrado() {
	if(borrador==true) {
		tablero();
		lobural();
		valoresAleatorios();
	}
  borrador=false;
}

function muestraCartasNivelTres() {
	
}

function juegoPorNiveles(){
	if(nivelUno == true){
		//borrado();
		muestraCartas();
		//primera =1;
    }
    if(nivelDos == true){
		//borrado();
		muestraCartasNivelDos();
    }
	if(nivelTres == true){
		muestraCartasNivelTres();
	}
}


//window.onclick = muestraInformacion();
window.onclick = juegoPorNiveles;
window.onload = function() {
	borrado();
	muestraCartas()
}