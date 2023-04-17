const horas = document.getElementById('horas'); //Constante que representa Hora 
const minutos = document.getElementById('minutos');//Constante que representa Minutos
const segundos = document.getElementById('segundos');//Constante que representa Segundos

//Constante que representa o relógio
//Com funcão SetInterval que serve para executar uma função ou instrução várias vezes em um determinado intervalo de tempo
//Com uma função Time (tempo)

//Dentro da função setInterval é executada a função 'function time'
//Dentro da  função 'function time' temos 4 variaveis representando dia, hora, minutos e segundos
//Dentro da Funcão 'function time' temos 4 'if' 
// if reseprenta SE

//Se a variavel hora for menor que 10 no diplay que aparece as horas, irá acrescentar um 0 antes do horario
//
const relogio = setInterval(function time(){ 
    var dateToday = new Date();
    var hrs = dateToday.getHours();
    var min = dateToday.getMinutes();
    var seg = dateToday.getSeconds();


//Se a variavel hrs for menor que 10 no diplay que aparece as horas, irá acrescentar um 0 antes do horario.
    if(hrs < 10) hrs = '0' + hrs;

//Se a variavel min for menor que 10 no diplay que aparece as horas, irá acrescentar um 0 antes do horario    
    if(min < 10) min = '0' + min;

//Se a variavel seg for menor que 10 no diplay que aparece as horas, irá acrescentar um 0 antes do horario    
    if(seg < 10) seg = '0' + seg;

    horas.textContent = hrs;
    minutos.textContent = min;
    segundos.textContent = seg;


})