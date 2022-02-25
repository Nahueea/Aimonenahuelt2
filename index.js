//let usuario = administrador 
//let password = 1234

//nombre = administrador
//password = 1234

//console.log(nombre);
//console.log(password);







let usuario = prompt("Ingrese su usuario por favor...");

console.log(usuario);

let password = prompt("Ingrese su password por favor...");

console.log(password);



if(usuario === "administrador" && password == "1234" == true){
    alert("Bienvenido al Sitio!");
}else{
    alert("Usuario o contraseña incorrectos!!");
}





    let num1, num2, num3, mayor, menor

    num1 = parseInt (prompt("Ingrese el primer numero"));
    num2 = parseInt (prompt("Ingrese el segundo numero"));
    num3 = parseInt (prompt("Ingrese el tercer numero"));
    if(num1 >= num2 && num1 >= num3){
        mayor = num1
    }else if(num2 >= num1 && num2 >= num3){
        mayor = num2;
    }else{
        mayor = num3
    }

console.log(mayor);


if(num1 <= num2 && num1 <= num3){
    menor = num1
}else if(num2 <= num1 && num2 <= num3){
    menor = num2;
}else{
    menor = num3    
}

console.log(menor);

let holaMundo;


function Mostrar(){
console.log("holaMundo");
}