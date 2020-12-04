class Puntaje {

    constructor (puntaje) {
        this.puntaje = puntaje;
    }

   render = () => {

    //Contenedor del promedio
    let prom = document.createElement('div');
    prom.className ='myProm'
    prom.innerHTML = (
        this.objectQuestion.puntaje
    );

    component.appendChild(prom);

    return prom;
   }




}