

let gustoHelado= Number( prompt("Por favor seleccione el gusto de helado que desee: 1- Común 2- Oreo 3- KitKat 4- M&M"));
let precio= 50.00;
let precioAdicional= 0.00;
let total = 0.00;


if (gustoHelado==1 || gustoHelado==2 || gustoHelado==3 || gustoHelado==4){

    if (gustoHelado==4){

        precioAdicional= 20.00;

    }else if (gustoHelado==3){

        precioAdicional=22.00;

    }else if (gustoHelado==2) {

        precioAdicional=25.00;

    }else {
        
        precioAdicional=0.00;
    } 
    
    total = precio + precioAdicional;
    alert (`El costo de su helado es de $ ${total}, Muchas gracias`);

}else {
        alert ("Ingrese una opcion correcta!!");
    }

   




