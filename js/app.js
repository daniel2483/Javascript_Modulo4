var arrayNumber1=[],arrayNumber2=[],maxDigitos=8,stringDisplay = "";

// Objeto calculadora
var calculadora = {
  maxDigitos: 8,
  init: function (){
    document.getElementById("on").onmousedown = this.BotonOn;
    document.getElementById("on").onmouseup = this.BotonOnUp;
    document.getElementById("sign").onmousedown = this.BotonSigno;
    document.getElementById("sign").onmouseup = this.BotonSignoUp;
    document.getElementById("raiz").onmousedown = this.BotonRaiz;
    document.getElementById("raiz").onmouseup = this.BotonRaizUp;
    document.getElementById("dividido").onmousedown = this.BotonDividido;
    document.getElementById("dividido").onmouseup = this.BotonDivididoUp;
    document.getElementById("por").onmousedown = this.BotonPor;
    document.getElementById("por").onmouseup = this.BotonPorUp;
    document.getElementById("menos").onmousedown = this.BotonMenos;
    document.getElementById("menos").onmouseup = this.BotonMenosUp;
    document.getElementById("mas").onmousedown = this.BotonMas;
    document.getElementById("mas").onmouseup = this.BotonMasUp;
    document.getElementById("1").onmousedown = this.Boton1;
    document.getElementById("1").onmouseup = this.Boton1Up;
    document.getElementById("2").onmousedown = this.Boton2;
    document.getElementById("2").onmouseup = this.Boton2Up;
    document.getElementById("3").onmousedown = this.Boton3;
    document.getElementById("3").onmouseup = this.Boton3Up;
    document.getElementById("4").onmousedown = this.Boton4;
    document.getElementById("4").onmouseup = this.Boton4Up;
    document.getElementById("5").onmousedown = this.Boton5;
    document.getElementById("5").onmouseup = this.Boton5Up;
    document.getElementById("6").onmousedown = this.Boton6;
    document.getElementById("6").onmouseup = this.Boton6Up;
    document.getElementById("7").onmousedown = this.Boton7;
    document.getElementById("7").onmouseup = this.Boton7Up;
    document.getElementById("8").onmousedown = this.Boton8;
    document.getElementById("8").onmouseup = this.Boton8Up;
    document.getElementById("9").onmousedown = this.Boton9;
    document.getElementById("9").onmouseup = this.Boton9Up;
    document.getElementById("0").onmousedown = this.Boton0;
    document.getElementById("0").onmouseup = this.Boton0Up;
    document.getElementById("punto").onmousedown = this.BotonPunto;
    document.getElementById("punto").onmouseup = this.BotonPuntoUp;
    document.getElementById("igual").onmousedown = this.BotonIgual;
    document.getElementById("igual").onmouseup = this.BotonIgualUp;
  },
  BotonOn: function(){
    var botonOn = document.getElementById("on");
    botonOn.style="height:58px !important";

    // Borramos los arreglos
    arrayNumber1 = [];
    arrayNumber2 = [];
    stringDisplay = "";
    document.getElementById('display').innerHTML = "0";
  },
  BotonOnUp: function(){
    var botonOn = document.getElementById("on");
    botonOn.style=""
  },
  BotonSigno: function(){
    var botonSign = document.getElementById("sign");
    botonSign.style="height:58px !important";

    stringDisplay = "";
    if (document.getElementById('display').innerHTML.toString() === '0'){
      // No hacer nada
      console.log("No hay valores iniciales");
      arrayNumber1=[0];
    }
    else if(arrayNumber1[0] !== "-"){
      arrayNumber1.unshift("-");
      console.log("Cambia a numero negativo");
    }
    else{
      arrayNumber1.shift();
      console.log("Cambia a numero positivo");
    }


    if(arrayNumber1.length <= 8){
      for( i=0 ; i < arrayNumber1.length ; i++ ){
        stringDisplay = stringDisplay + arrayNumber1[i];
      }
      document.getElementById('display').innerHTML = stringDisplay;
      if(arrayNumber1[0] == 0)
      arrayNumber1=[];
    }

  },
  BotonSignoUp: function(){
    var botonSign = document.getElementById("sign");
    botonSign.style=""
  },
  BotonRaiz: function(){
    var botonRaiz = document.getElementById("raiz");
    botonRaiz.style="height:58px !important";
  },
  BotonRaizUp: function(){
    var botonRaiz = document.getElementById("raiz");
    botonRaiz.style=""
  },
  BotonDividido: function(){
    var botonDividido = document.getElementById("dividido");
    botonDividido.style="height:58px !important";
  },
  BotonDivididoUp: function(){
    var botonDividido = document.getElementById("dividido");
    botonDividido.style=""
  },
  BotonPor: function(){
    var botonPor = document.getElementById("por");
    botonPor.style="height:58px !important";
  },
  BotonPorUp: function(){
    var botonPor = document.getElementById("por");
    botonPor.style=""
  },
  BotonMenos: function(){
    var botonMenos = document.getElementById("menos");
    botonMenos.style="height:58px !important";
  },
  BotonMenosUp: function(){
    var botonMenos = document.getElementById("menos");
    botonMenos.style="";
  },
  BotonMas: function(){
    var botonMas = document.getElementById("mas");
    botonMas.style="height:95% !important";
  },
  BotonMasUp: function(){
    var botonMas = document.getElementById("mas");
    botonMas.style="";
  },
  Boton1: function(){
    var boton1 = document.getElementById("1");
    boton1.style="height:58px !important";
    arrayNumber1.push(1);
    stringDisplay = "";
    if(arrayNumber1.length <= 8){
      for( i=0 ; i < arrayNumber1.length ; i++ ){
        stringDisplay = stringDisplay + arrayNumber1[i];
      }
      document.getElementById('display').innerHTML = stringDisplay;
    }
  },
  Boton1Up: function(){
    var boton1 = document.getElementById("1");
    boton1.style="";
  },
  Boton2: function(){
    var boton2 = document.getElementById("2");
    boton2.style="height:58px !important";
    arrayNumber1.push(2);
    stringDisplay = "";
    if(arrayNumber1.length <= 8){
      for( i=0 ; i < arrayNumber1.length ; i++ ){
        stringDisplay = stringDisplay + arrayNumber1[i];
      }
      document.getElementById('display').innerHTML = stringDisplay;
    }
  },
  Boton2Up: function(){
    var boton2 = document.getElementById("2");
    boton2.style="";
  },
  Boton3: function(){
    var boton3 = document.getElementById("3");
    boton3.style="height:58px !important";
    arrayNumber1.push(3);
    stringDisplay = "";
    if(arrayNumber1.length <= 8){
      for( i=0 ; i < arrayNumber1.length ; i++ ){
        stringDisplay = stringDisplay + arrayNumber1[i];
      }
      document.getElementById('display').innerHTML = stringDisplay;
    }
  },
  Boton3Up: function(){
    var boton3 = document.getElementById("3");
    boton3.style="";
  },
  Boton4: function(){
    var boton4 = document.getElementById("4");
    boton4.style="height:58px !important";
    arrayNumber1.push(4);
    stringDisplay = "";
    if(arrayNumber1.length <= 8){
      for( i=0 ; i < arrayNumber1.length ; i++ ){
        stringDisplay = stringDisplay + arrayNumber1[i];
      }
      document.getElementById('display').innerHTML = stringDisplay;
    }
  },
  Boton4Up: function(){
    var boton4 = document.getElementById("4");
    boton4.style="";
  },
  Boton5: function(){
    var boton4 = document.getElementById("5");
    boton4.style="height:58px !important";
    arrayNumber1.push(5);
    stringDisplay = "";
    if(arrayNumber1.length <= 8){
      for( i=0 ; i < arrayNumber1.length ; i++ ){
        stringDisplay = stringDisplay + arrayNumber1[i];
      }
      document.getElementById('display').innerHTML = stringDisplay;
    }
  },
  Boton5Up: function(){
    var boton5 = document.getElementById("5");
    boton5.style="";
  },
  Boton6: function(){
    var boton6 = document.getElementById("6");
    boton6.style="height:58px !important";
    arrayNumber1.push(6);
    stringDisplay = "";
    if(arrayNumber1.length <= 8){
      for( i=0 ; i < arrayNumber1.length ; i++ ){
        stringDisplay = stringDisplay + arrayNumber1[i];
      }
      document.getElementById('display').innerHTML = stringDisplay;
    }
  },
  Boton6Up: function(){
    var boton6 = document.getElementById("6");
    boton6.style="";
  },
  Boton7: function(){
    var boton7 = document.getElementById("7");
    boton7.style="height:58px !important";
    arrayNumber1.push(7);
    stringDisplay = "";
    if(arrayNumber1.length <= 8){
      for( i=0 ; i < arrayNumber1.length ; i++ ){
        stringDisplay = stringDisplay + arrayNumber1[i];
      }
      document.getElementById('display').innerHTML = stringDisplay;
    }
  },
  Boton7Up: function(){
    var boton7 = document.getElementById("7");
    boton7.style="";
  },
  Boton8: function(){
    var boton8 = document.getElementById("8");
    boton8.style="height:58px !important";
    arrayNumber1.push(8);
    stringDisplay = "";
    if(arrayNumber1.length <= 8){
      for( i=0 ; i < arrayNumber1.length ; i++ ){
        stringDisplay = stringDisplay + arrayNumber1[i];
      }
      document.getElementById('display').innerHTML = stringDisplay;
    }
  },
  Boton8Up: function(){
    var boton8 = document.getElementById("8");
    boton8.style="";
  },
  Boton9: function(){
    var boton9 = document.getElementById("9");
    boton9.style="height:58px !important";
    arrayNumber1.push(9);
    this.ValorRegistrado;
  },
  Boton9: function(){
    var boton9 = document.getElementById("9");
    boton9.style="height:58px !important";
    arrayNumber1.push(9);
    this.ValorRegistrado;
  },
  Boton9Up: function(){
    var boton9 = document.getElementById("9");
    boton9.style="";
  },
  Boton0: function(){
    var boton0 = document.getElementById("0");
    boton0.style="height:58px !important";
    arrayNumber1.push(0);
    stringDisplay = "";
    if(arrayNumber1.length <= 8){
      for( i=0 ; i < arrayNumber1.length ; i++ ){
        stringDisplay = stringDisplay + arrayNumber1[i];
      }
      document.getElementById('display').innerHTML = stringDisplay;
    }
  },
  Boton0Up: function(){
    var boton0 = document.getElementById("0");
    boton0.style="";
  },
  BotonPunto: function(){
    var botonPunto = document.getElementById("punto");
    botonPunto.style="height:58px !important";

    stringDisplay = "";
    for( i=0 ; i < arrayNumber1.length ; i++ ){
      stringDisplay = stringDisplay + arrayNumber1[i];
    }
    var existePunto = stringDisplay.indexOf(".");

    if(existePunto == -1){
    arrayNumber1.push(".");
    }

    stringDisplay = "";
    if(arrayNumber1.length <= 8){
      for( i=0 ; i < arrayNumber1.length ; i++ ){
        stringDisplay = stringDisplay + arrayNumber1[i];
      }
      document.getElementById('display').innerHTML = stringDisplay;
    }
    //console.log(stringDisplay.indexOf("."))
  },
  BotonPuntoUp: function(){
    var botonPunto = document.getElementById("punto");
    botonPunto.style="";
  },
  BotonIgual: function(){
    var botonIgual = document.getElementById("igual");
    botonIgual.style="height:58px !important";
  },
  BotonIgualUp: function(){
    var botonIgual = document.getElementById("igual");
    botonIgual.style="";
  },
  ValorRegistrado: function(){
    stringDisplay = "";
    if(arrayNumber1.length <= 8){
      console.log(arrayNumber1.length);
      //alert("Ingresa");

      for( i=0 ; i < arrayNumber1.length ; i++ ){
        stringDisplay = stringDisplay + arrayNumber1[i];
      }
      document.getElementById('display').innerHTML = stringDisplay;
    }
  },
  ReduceSize: function(){

  },
  Suma: function(){

  },
  Resta: function(){

  },
  Division: function(){

  },
  Multiplicacion: function(){

  },

}

calculadora.init();
calculadora.ValorRegistrado();
