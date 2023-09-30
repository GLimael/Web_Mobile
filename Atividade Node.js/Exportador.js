function primos (a){
    for(i=2;i<=a/2;i++){
        if(a==2||a==1){
            return true;
        }else if(a%i==0){
            return false;
        }else{
            return true;
        }
    }
}

module.exports.primos = primos;

function media (a=[]){
    let media=0;
    for(i=0;i<a.length;i++){
        media += a[i];
    }
    return media/a.length;
}

module.exports.media = media;

function tempCF (temp){
    return temp/5*9+32;
}

function tempCK (temp){
    return temp+273;
}

function tempFC (temp){
    return (temp-32)/9*5;
}

function tempFK (temp){
    return (temp+459.67)*5/9;
}

function tempKC (temp){
    return temp-273;
}

function tempKF (temp){
    return temp*1.8-459.67;
}

module.exports.tempCF = tempCF;
module.exports.tempCK = tempCK;
module.exports.tempFC = tempFC;
module.exports.tempFK = tempFK;
module.exports.tempKC = tempKC;
module.exports.tempKF = tempKF;

function areaQuadrado (lado){
    return lado*lado;
}

function areaTriangulo (base, altura){
    return base*altura/2;
}

function areaTrapezio (basem, baseM, altura){
    return (basem+baseM)*altura/2;
}

module.exports.quadrado = areaQuadrado;
module.exports.triangulo = areaTriangulo;
module.exports.trapezio = areaTrapezio;

function soma (a,b){
    return a+b;
}

function subtracao (a,b){
    return a-b;
}

function multiplicacao (a,b){
    return a*b;
}

function divisao (a,b){
    return a/b;
}

function operacao (string){
    return eval(string);

}

module.exports.soma = soma;
module.exports.subtracao =subtracao;
module.exports.multiplicacao = multiplicacao;
module.exports.divisao = divisao;
module.exports.operacao = operacao;