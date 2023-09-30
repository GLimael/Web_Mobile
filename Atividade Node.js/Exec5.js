const operacoes = require('./Exportador.js');

console.log('Soma: ', operacoes.soma(5,10));
console.log('Subtração: ', operacoes.subtracao(5,10));
console.log('Multiplicação: ', operacoes.multiplicacao(5,10));
console.log('Divisão: ', operacoes.divisao(10,5));
console.log('Cálculo: ', operacoes.operacao('10*7+70-90'));