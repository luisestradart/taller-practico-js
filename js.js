const ladoCuadrado = 4;
const perimetro = ladoCuadrado * 4;

const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log({
    ladoCuadrado,
    perimetro,
    areaCuadrado
})

function calculoTriangulo (lado) {
    return {
        parametros: lado * 4,
        area: lado * lado
    }
}

function calculoTriangulo (lado1, base) {
    if (lado1 == base) {
        console.warn("este no es un iscceles")
    } else {
        console.log("este es un isosceles")
    }
    
    return {
        parametros: lado * 4,
        area: lado * lado
    }
}





const ladoTriangulo = 5;
const ladoTriangulo2 = 8;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo + ladoTriangulo2 + alturaTriangulo;

const areaTriangulo = (ladoTriangulo * alturaTriangulo) / 2;

console.log({
    ladoTriangulo,
    ladoTriangulo2,
    alturaTriangulo,
    perimetroTriangulo,
    areaTriangulo
})


console.group("Circulo")

const radioCirculo = 4;
const diametroCirculo = radioCirculo * 2;
const PI = Math.PI;

const perimetroCirculo = diametroCirculo * PI;
const areaCirculo = (radioCirculo * radioCirculo) * PI;

console.log({
    radioCirculo,
    diametroCirculo,
    PI,
    perimetroCirculo,
    areaCirculo
})


function calcularCirculo (radio) {
    const diametro = radio * 2;
    const radioAlCuadrado = Math.pow(radio, 2);

    return {
        circunferencia: diametro * PI,
        area: radioAlCuadrado * PI
    }
}

console.groupEnd("Circulo")

console.group("isoceles")
console.groupEnd("isoceles")
