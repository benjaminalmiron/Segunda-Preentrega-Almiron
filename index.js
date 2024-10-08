function mostrarComponentes() {
  let componentes = "Componentes de pc";

  componentes += "1. teclado 50000 $";
  componentes += "2. auriculares  70000 $";
  componentes += "3.   mouse 60000 $";
  componentes += "4.  monitor 100000 $";
  componentes += "5.   CPU 200000 $";
  return componentes;
}

const aplicarDescuento = (valor, descuento) =>{
  const precioConDescuento = valor - (valor*descuento) /50;
  return precioConDescuento;
}


function comprarComponentes() {
  let valor = 0;
  let comprar = true;

  while (comprar) {
    let componentes = mostrarComponentes();
    let elegir = prompt(
      " Presupuesto de pc \n 1. Teclado 50000 $ \n 2. Auriculares  70000 \n 3.  Mouse 60000 \n 4.  Monitor 100000 $ \n 5.  CPU 200000 $"
    );
    
 
    if(elegir === null || elegir === ""  ){
      alert("ingrese al menos un dato");
     continue; 
    }else{
        elegir === "salir" 
        
    }
    
    if (isNaN(elegir) || elegir < 1 ||  elegir  > 5){
      alert("Ingrese un numero entre 1 y 5");
      continue;
    }
    
    if(elegir ==="1"){
      valor += 50000;
      alert("Sumaste teclado")
      
    }
    if(elegir ==="2"){
      valor += 70000;
      alert("Sumaste auriculares")
      
    }else if(elegir === "3"){
      valor += 60000;
      alert("Sumaste Mouse")
    }else if(elegir === "4"){
      valor += 100000;
      alert("Sumaste Monitor")
    }else if(elegir === "5"){
      valor += 200000;
      alert("Sumaste CPU")
    }

    
      
        
    
    comprar = prompt(" Si queres agregar mas productos coloque \n `SI` de lo contrario no para finalizar") === "si";


    

  }while(comprar = "no" || ""){

    
    
    let descuento = parseInt(prompt("Por favor ingresa el monto de descuento con un maximo del 30%"));
    
    const precioFinal = aplicarDescuento (valor, descuento) ;
      
    
      
      
    if(descuento == "" || descuento == null || descuento >30 )
    
    {
      alert("ingresa un dato valido")
      continue;
    }
    
    if(!isNaN(descuento) ){

    alert(`El total de tu presupuesto con descuento seria ${precioFinal} $`);
    break;
    }
  
  }
    
  
    

  }
  

comprarComponentes();
