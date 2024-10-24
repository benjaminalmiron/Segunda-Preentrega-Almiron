const componentes = [
  {
    id: 1,
    nombre: "Teclado",
    precio: 50000,
    stock: 10,
  },
  {
    id: 2,
    nombre: "Auriculares",
    precio: 70000,
    stock: 15,
  },
  {
    id: 3,
    nombre: "Mouse",
    precio: 60000,
    stock: 8,
  },
  {
    id: 4,
    nombre: "Monitor",
    precio: 100000,
    stock: 10,
  },
  {
    id: 5,
    nombre: "CPU",
    precio: 200000,
    stock: 10,
  },
  

  
];

const mostrarComponentes = () => {
  let catalogo = "";
  for (let componente of componentes) {
    catalogo = `ID: ${componente.id}
    nombre: ${componente.nombre}
    precio: ${componente.precio}
    stock: ${componente.stock}
    `;
    console.log(catalogo)
  }
};

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

  

  const agregarComponentes = ({ id ,nombre, precio, stock }) => {
    componentes.push({ id , nombre, precio, stock });
  };

  const nombreComponente = () => {
    let idcomponente = prompt("Ingresa el identificador del componente")
    let nombreComponente1 = prompt("Ingresa nombre del componente a elegir");
    let precioComponente = parseInt(prompt("Ingresa el precio del producto"));
    let StockComponente = parseInt(prompt("Ingresa stock del componente"));
    

    
    if (
      nombreComponente1 && !isNaN(idcomponente) && !isNaN(precioComponente) && !isNaN(StockComponente)) {
      return({ id:idcomponente, nombre: nombreComponente1, precio: precioComponente, stock: StockComponente,});
      
    } else{
      alert("Ingresa un dato valido");
      
    }
    
  };

  const filtrarPrecio = (precioMaximo) => {
    productosMenorPrecio = componentes.filter((componente)=>componente.precio < precioMaximo);
    
  
  
    if(productosMenorPrecio.length > 0){
      console.log(`Componentes mas baratos que ${precioMaximo}`)
      productosMenorPrecio.map((componente) => {
        console.log(componente.nombre );
        console.log(componente.precio)
      })
    }else{
      console.log(`No se encontro productos menores de ${precioMaximo}`)
    }
    
    
  } 
 
  const eliminarComponente = (id) =>{
   const catalogo = componentes.findIndex((componente)=>componente.nombre.toLowerCase() ===id);
    
    if(catalogo !==-1){
      componentes.splice(catalogo, 1 )
      alert(`Componente ${id} eliminado con exito`);
      mostrarComponentes();

    }else{
      alert(`Componente ${id} no encontrado`)
    }
  }
  


  const funcionPrincipal = () => {

      let elegir = "";
      
      while(elegir !== "Salir" || elegir=== "6" ){
          elegir = prompt("Calcular Presupuesto \n1. Comprar Componentes \n2. Ver Componentes \n3. Agregar componentes nuevos  \n4. Filtrar productos por precio \n5. Eliminar componente \n6. Salir");
      
        
          
          if(elegir === "string" ){
            alert("Ingresa un numero del 1 al 5")
          }
          
          if(elegir==="1"){
            comprarComponentes()
             }
          if (elegir==="2"){
              mostrarComponentes();
              
          }

          if(elegir === "3"){
            const productoNuevo =  nombreComponente()
           if(productoNuevo){
          agregarComponentes(productoNuevo);}
         
        
        }

        
        if(elegir === "4"){
          const precioMaximo = parseFloat(prompt("Ingresa un precio para filtrar productos"));
          filtrarPrecio(precioMaximo);
          
        }
      

        if(elegir === "5"){
          const  hola = prompt("Ingresa el ID del producto a eliminar")
          eliminarComponente(hola)
        }

          if(elegir=== "6" || elegir === "salir" || elegir === null ){
              alert("Saliste de la aplicacion")
              break;
              
          }
      
      }
  }

  
funcionPrincipal()