// Calcular pagos en cuotas sobre un monto determinado
let monto= prompt('Ingrese el monto:');

let cuotas= prompt('Ingrese las cuotas que desea:');

CalculoDePago(monto,cuotas);

function CalculoDePago(monto, cuotas){
    let calculo= monto/cuotas;
    alert('El pago es en '+ cuotas + ' cuotas sin interes de '+ calculo);
}

// Calcular valor final de un producto seleccionado en función de impuestos y descuentos.

alert('Producto "1"= 1000. Producto "2"=1200. Producto "3"= 1400 ');

let producto=prompt('Elija un prodcuto:');

CalculoValorFinal(producto);

function CalculoValorFinal(prodcuto){
    if(prodcuto==1){
        let impuestos= 100;
        let descuentos= 200;
        let valorFinal= 1000 + impuestos -descuentos;

        alert('El impuesto tiene un valor de '+ impuestos+' pesos, con descuento de ' + descuentos + ', por lo tanto el total es de '+valorFinal+ ' pesos finales');
    }else if(prodcuto==2){
        let impuestos= 400;
        let descuentos= 600;
        let valorFinal= 1200 + impuestos -descuentos;

        alert('El impuesto tiene un valor de '+ impuestos+' pesos, con descuento de ' + descuentos + ', por lo tanto el total es de '+valorFinal+ ' pesos finales');
    }else if(prodcuto==3){
        let impuestos= 200;
        let descuentos= 500;
        let valorFinal= 1400 + impuestos -descuentos;

        alert('El impuesto tiene un valor de '+ impuestos+' pesos, con descuento de ' + descuentos + ', por lo tanto el total es de '+valorFinal+ ' pesos finales');
    }else{
        alert('PRODUCTO NO EXISTENTE ELIJA OTRO.');
    }


}