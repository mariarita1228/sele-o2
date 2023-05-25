let x = Number(prompt(`digite a abiscissa do centro:`));
let y = Number(prompt(`digite a ordenada do centro:`));
let r = Number(prompt(`digite o raio do círculo:`));
let px = Number(prompt(`digite a abiscissa do ponto:`));
let py = Number(prompt(`digite a ordenada do ponto:`));

dis = Math.sqrt((x-px)**2 + (y-py)**2)
 if(dis>r){
    document.write(`O ponto (${px},${py}) não faz parte do círculo`)
 }else{
    document.write(`O ponto (${px},${py}) faz parte do círculo`)
 }
