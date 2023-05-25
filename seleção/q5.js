let a = Number(prompt(`digite o primeiro lado:`));
let b = Number(prompt(`digite o segundo lado:`));
let c = Number(prompt(`digite o terceiro lado:`));
if(a<b+c && b<a+c &&c<a+b){
    if(a==b && b==c){
        document.write(`O triângulo é equilátero`)
    }else if(a!=b && b!=c && a!=c){
        document.write(`O triângulo é escaleno`)
    }else{
        document.write(`O triângulo é isórceles`)
    }
}
    else{
        document.write(`esses lados não formam um triângulo`)
    }
