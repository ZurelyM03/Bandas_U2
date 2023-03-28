function colorTest(a,b,c,d,e){

    var mainColor=document.createElement("div");
    // Contiene las 4 bandas
    document.body.appendChild(mainColor);
    // Para incluir el contenedor en el body
    mainColor.style="margin:10px;display: flex;justify-content: center;flex-wrap: wrap; background:#ffff;border: 2px solid #ffffff;border-radius:22%;";
    // Para darle estilo al contenedor principal
    var nomc;
    var color1,color2;
    // Para que tenga color transparente y otro para color solido
    const arreglo=[a,b,c,d,e];
    // El resultado de las 5 bandas
    var newDiv = document.createElement("div");
  
    for(i=0;i<arreglo.length;i++){
      // Para recorrer el vector
      nomc=nombreColor(arreglo[i]);
      // Llama al puto color que tienes en la funcion color
      var newP = document.createElement("p");
      // Para crear un parrafo
      var newColor = document.createTextNode( nomc );
      // Para crear un nodo
      newP.appendChild(newColor);
      // Incluir el color al parrafo
      color2=defineColor(arreglo[i]);
      // Recive el color de acuerdo a la entrada del arreglo
      /*color1=defCol(arreglo[i]);*/
      // Recive el color de acuerdo a la entrada del arreglo "transparente"
      newP.style="margin:0 10px;border: 1px solid "+color1+"; background-color:"+color2+"; width: 80px ;height:80px; color:"+color1+"; text-align:center";
      // Para darle estilo a mi parrafo
      mainColor.appendChild(newDiv);
      mainColor.appendChild(newP);
      // Para incluir contenedor y parrafo al contenedor principal
    }
  }
  
  function Calcula(b1,b2,b3,b4,b5){
    var contenedor = document.createElement("div");
  contenedor.style="margin:10px; padding:10px; border: 1px solid #bbe5f3; border-radius:6px; text-align:center; color:#0d0d0d; background: rgba(255,255,255,0.8)";
    // Para darle estilo al contenedor de resultado
  colorTest(b1,b2,b3,b4,b5);
    var valResistencia=b1*b3+(b2*(b3/10))+(b0*b3);
    var tolerancia=b5;
    // Formula para calcular resistencia y tolerancia
  
  
    switch(b5){
      case 1:tolerancia=1;break;
      case 2:tolerancia=2;break;
      case 5: tolerancia=0.5;break;
      case 6: tolerancia=0.25;break;
      case 7: tolerancia=0.10; break;
      case 8: tolerancia=0.05;break;
      case 10: tolerancia=5;break;
      case 11: tolerancia=10;break;
    }
    // Tolerancia por cada color
      var con = document.createTextNode("Resistencia: "+valResistencia+"\nTolerancia:"+tolerancia+"%");
      contenedor.appendChild(con);
      document.body.appendChild(contenedor);
    // Mostrar el resultado e incluirlo en el contenedor
  }
  
  function defineColor(n){
    switch(parseInt(n)){
      case 0:return "rgb(34,34,34)";
      case 1:return "rgb(128,64,0)";
      case 2:return "rgb(255,0,0)";
      case 3:return "rgb(255,128,0)";
      case 4:return "rgb(255,255,0)"
      case 5:return "rgb(0,255,0)";
      case 6: return "rgb(0,0,255)";
      case 7: return "rgb(128,0,128)";
      case 8: return "rgb(128,128,128)";
      case 9: return "rgb(255,255,255)";
      case 10: return "rgb(212,175,55)";
      case 11: return "rgb(192,192,192)";
    }
  }
  
  function defCol(n){
    switch(parseInt(n)){
      case 0:return "rgb(34,34,34)";
      case 1:return "rgb(128,64,0)";
      case 2:return "rgb(255,0,0)";
      case 3:return "rgb(255,128,0)";
      case 4:return "rgb(255,255,0)"
      case 5:return "rgb(0,255,0)";
      case 6: return "rgb(0,0,255)";
      case 7: return "rgb(128,0,128)";
      case 8: return "rgb(128,128,128)";
      case 9: return "rgb(255,255,255)";
      case 10: return "rgb(212,175,55)";
      case 11: return "rgb(192,192,192)";
    }
  }
  
  function nombreColor(n){
    switch(parseInt(n)){
      case 0:return "NEGRO";
      case 1:return "CAFE";
      case 2:return "ROJO";
      case 3:return "NARANJA";
      case 4:return "AMARILLO"
      case 5:return "VERDE";
      case 6: return "AZUL";
      case 7: return "VIOLETA";
      case 8: return "GRIS";
      case 9: return "BLANCO";
      case 10: return "ORO";
      case 11: return "PLATA";
    }
  }