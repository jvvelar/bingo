  var validos = 0, n, casillas = [], numeros =[];
  var element, name, arr, rev;

  function aleatorio(a,b) {
    return Math.round(Math.random()*(b-a)) + a;
  }
  function generaNumero(){
    if (validos<90){
      do{
        n = aleatorio(1,90);
        console.log(n);
      }while (casillas[n] == true); 

      if (casillas[n] != true) {
        //"n" sale por primera vez
        numeros[validos]=n;
        validos++;
        rev= validos;
        casillas[n] = true;
        document.getElementById('num').innerHTML=n;
        console.log("bueno "+n);
        console.log(numeros);
        console.log(validos);
        element=document.getElementById(n);
        name = "blue";
        arr = element.className.split(" ");
        if (arr.indexOf(name) == -1) {
            element.className += " " + name;
        }
        
      }
    } else{
    document.getElementById('num').innerHTML="fin";
    }     

  }
  function getNumeroAnterior(){
    if (rev>1){
    ant= numeros[rev-2];
    console.log(ant);
    document.getElementById('num').innerHTML=ant;
    rev--;
    console.log("val "+rev);}
  }
  function getNumeroPosterior(){
    if (rev>=0 && rev<numeros.length){
    rev++;
    ant= numeros[rev-1];
    console.log(ant);
    document.getElementById('num').innerHTML=ant;
    
    console.log("val "+rev);}
  }
  function empezar(){
    document.location.reload(true);
  }
  
 

  var zona = document.getElementById('num');
  var hammertime = new Hammer(zona);
  var Press = new Hammer.Press({
    time: 1200
  });
  hammertime.add(Press);
  hammertime.on('tap', this.generaNumero);
  hammertime.on('swipeleft', this.getNumeroAnterior);
  hammertime.on('swiperight', this.getNumeroPosterior);
  hammertime.on('press', this.empezar);
