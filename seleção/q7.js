let altura = Number(prompt(`digite a altura(m):`));
let massa = Number(prompt(`digite a massa(kg):`));

let imc = massa/(altura**2);

if(imc>40){
    document.write(`obesidade grau III`)
}if(imc>35){
    document.write(`obesidade grau II`)
}if(imc>30){
    document.write(`obesidade grau I`)
}if(imc>25){
    document.write(`sobrepeso`)
}if(imc>18.5){
    document.write(`peso normal`)
}else{
    document.write(`abaixo do peso`)
}