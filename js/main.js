
let team1 = [];
let team2 = [];


const cambiaFase = (destino) => {
    
    let arrFase = ["fase1","fase2","fase3"];

    arrFase = arrFase.filter(val => !destino.includes(val));

    document.getElementById(destino).style.display = "block";

    for(let _fase of arrFase){
        document.getElementById(_fase).style.display = "none";
    }

};

const chooseFighter = (fighter) => {


    if(team2.length < 2){

        if(team1.length < 2){
            team1.push(allPlayers[fighter]);
            
        } else {
            
            team2.push(allPlayers[fighter]);

            if(team2.length == 2){
                console.log("ESTE ES EL TEAM1 ", team1);
                console.log("ESTE ES EL TEAM2 ", team2);
                cambiaFase("fase3");
            }
            
        }
        
        document.getElementById(fighter).onclick = "";
        document.getElementById(fighter).className = "seleccionado";

        
    }
        
}