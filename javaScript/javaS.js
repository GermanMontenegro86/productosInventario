const producto =
[
    {nombre:"yerba", precio:280, stock:5, vto:"20/10/2025"},
    {nombre:"azucar", precio:180, stock:20, vto:"20/10/2022"},
    {nombre:"te", precio:380, stock:15, vto:"20/10/2024"},
    {nombre:"galletitas de agua", precio:160, stock:60, vto:"20/10/2023"},
    {nombre:"galletitas dulces", precio:190, stock:30, vto:"20/10/2024"},
    {nombre:"coca cola", precio:400, stock:100, vto:"20/10/2026"},
]

producto.push({nombre:"alfajor", precio:120, stock:18, vto:"15/09/2025"},)
producto.push({nombre:"shampoo", precio:290, stock:33, vto:"11/05/2028"},)
producto.push({nombre:"cereal", precio:300, stock:33, vto:"11/05/2028"},)
producto.push({nombre:"chocolate en barra", precio:150, stock:33, vto:"11/05/2028"},)
producto.push({nombre:"fideos moños", precio:130, stock:35, vto:"11/05/2028"},)
producto.push({nombre:"caramelos", precio:1, stock:30, vto:"11/05/2030"},)


// const buscarPorNombre = producto.find((el) => el.nombre === "shampoo");
// const BuscarMenorPrecio = producto.filter((el) => el.precio < 131);
// const siHay= producto.some((el)=> el.nombre == "chocolate en barra");
// const noHay=producto.some((el)=> el.nombre == "arroz");
// const verProductosCargados =producto.map((el) =>el.nombre);


function boton(){
    
    console.log(producto);
}

function buscar(){

let buscarPorNombre=prompt("buscar nombre");
buscarPorNombre =producto.find((el) => el.nombre === buscarPorNombre);
console.log(buscarPorNombre);

}

function menorPrecio(){
    let BuscarMenorPrecio=+prompt("Cuanto queres gastar y te dire que podras comprar");
    BuscarMenorPrecio=producto.filter((el) => el.precio <= BuscarMenorPrecio);
    console.log(BuscarMenorPrecio);
}


/*
hola gonzalo si me podrias explicar como aplicar lo que hice arriba con lo que esta comentado abajo de estas
 linea me ayudaria bastanta
*/




// class ProductoEstructura {
//     constructor(nombre, codigoBarra, stock, precio, vencimiento) {
//         this.nombre = nombre;
//         this.codigoBarra = parseInt(codigoBarra);
//         this.stock = parseInt(stock);
//         this.precio = parseInt(precio);
//         this.vencimiento = vencimiento;
//     }

//     conIva() {
//         let iva = this.precio * 1.21;
//         let mensaje = "El precio con el iva es $ " + iva;
//         console.log(mensaje);
//     }

//     sinIva() {
//         let iva = this.precio / 1.21;
//         let mensaje = "El precio sin el iva es $ " + iva;
//         console.log(mensaje);

//     }

//     ver() {
//         console.log("nombre: " + this.nombre + " codigo de barra: " + this.codigoBarra + " stock: " + this.stock + " precio: $ " + this.precio + " vencimiento: " + this.vencimiento);

//     }

//     menorPrecio(){
//         let precioBajo=.find((elemento=>elemento.precio<100));
//         alert(precioBajo);
//     }

// }
// function boton() {
//     const cargarProductos = [];
//     cargarProductos.push(new ProductoEstructura("yerba", "21263465", "12", "300", "20/12/2025"));
//     // cargarProductos.push(new ProductoEstructura("azucar", "51263465", "12", "280", "20/12/2025"));
//     // cargarProductos.push(new ProductoEstructura("harina", "21255487", "12", "300", "20/12/2025"));
//     // cargarProductos.push(new ProductoEstructura("fideos", "325100185", "12", "280", "20/12/2025"));

//     for (const ProductoEstructura of cargarProductos) {
//         ProductoEstructura.ver();
//         ProductoEstructura.conIva();
//         ProductoEstructura.sinIva();
//         ProductoEstructura.menorPrecio();
//     }
// }