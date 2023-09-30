const temperatura = require('./Exportador.js');

const tempC = 22;
const tempF = 71.6;
const tempK = 295;

console.log('Temperatura em °C :', tempC,'\nTemperatura em °F: ', temperatura.tempCF(tempC), '\nTemperatura em °K: ', 
temperatura.tempCK(tempC));
console.log('\n\nTemperatura em °F: ', tempF, '\nTemperatura em °C: ', temperatura.tempFC(tempF), '\nTemperatura em °K: ',
temperatura.tempFK(tempF));
console.log('\n\nTemperatura em °K: ', tempK, '\nTemperatura em °C: ', temperatura.tempKC(tempK), '\nTemperatura em °F: ',
temperatura.tempKF(tempK));