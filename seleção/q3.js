let ano = Number(prompt('digite o ano:'));
if (ano%100==0) {document.write(`esse ano é do século ${ano/100}`)}
else{document.write(`este ano é do século ${(Math.floor(ano/100)+1)}`)}