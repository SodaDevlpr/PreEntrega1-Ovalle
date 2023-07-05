alert("Bienvenido a Distribuidora Cuello Negro!!!");
alert("Prepando items para crear OC ...");
alert("Cargando 25% ...");
alert("Cargando 50% ...");
alert("Cargando 75% ...");
alert("Listo 100% !!!");

let SubTotal = 0

let producto = prompt('1-Cerveza cuello negro Pale Ale 5.8° x12un $25.000\n2-Cerveza cuello negro Stout 8° x12un $25.000\n3-Cerveza cuello negro Pale Ale 5.8° x24un $50.000\n4-Cerveza cuello negro Stout 8° x24un $50.000\n5-Shopero cuello negro 500cc $10.000\n6-Jockey cuello negro $5.000\n0-Finalizar');

while(producto != '0'){
    switch(producto){
        case "1":
            alert("Se añadio Cerveza cuello negro Pale Ale 5.8° x12un $25.000 a tu Box!");
            aumentarSubTotal(25.000);
            break;
        case "2":
            alert("Se añadio Cerveza cuello negro Stout 8° x12un $25.000 a tu Box!");
            aumentarSubTotal(25.000);
            break;
        case "3":
            alert("Se añadio Cerveza cuello negro Pale Ale 5.8° x24un $50.000 a tu Box!");
            aumentarSubTotal(50000);
            break;
        case "4":
            alert("Se añadio Cerveza cuello negro Stout 8° x24un $50.000 a tu Box!");
            aumentarSubTotal(50000);
            break;
        case "5":
            alert("Se añadio Shopero cuello negro 500cc $10.000 a tu Box!");
            aumentarSubTotal(10000);
            break;
        case "6":
            alert("Se añadio Jockey cuello negro $5.000 a tu Box!");
            aumentarSubTotal(5000);
            break;
        default:
            alert("Error de digito");
            break;
    }
    producto = prompt('1-Cerveza cuello negro Pale Ale 5.8° x12un $25.000\n2-Cerveza cuello negro Stout 8° x12un $25.000\n3-Cerveza cuello negro Pale Ale 5.8° x24un $50.000\n4-Cerveza cuello negro Stout 8° x24un $50.000\n5-Shopero cuello negro 500cc $10.000\n6-Jockey cuello negro $5.000\n0-Finalizar');
}

alert("SubTotal de tu compra es $ "+SubTotal)
MontoTotalConIva(SubTotal)

function aumentarSubTotal(PrecioItem){
    SubTotal = SubTotal + PrecioItem;
}

function MontoTotalConIva(SubTotal){
    MontoTotalConIva = SubTotal *1.19;
}

alert("El Monto Total C/Iva es $ "+MontoTotalConIva)

alert("Muchas gracias por su compra, vuelva pronto!!!")