let a = Number(prompt('digite o primeiro coeficiente:'));
let b = Number(prompt('digite o segundo coeficiente:'));
let c = Number(prompt('digite o terceiro coeficiente:'));
let delta = b**2-4*a*c;
if (delta>0){
    r1 = (-b+delta**0.5)/(2*a)
    r2 = (-b-delta**0.5)/(2*a)
    document.write(`as raizes são ${r1} e ${r2}`)
}else if(delta==0){
    r = (-b/2*a)
    document.write(`a raiz é ${r}`)
}else{document.write(`não existe raiz real`)}