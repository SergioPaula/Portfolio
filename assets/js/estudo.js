/*window.alert('Minha primeira mensagem!');
var nome = window.prompt('Qual é o seu nome?');
window.alert('Obrigado '  + nome + ' por responder nossa pesquisa')*/
var n1 = Number(window.prompt('Digite um numero: ')).replace('.',',') //parseInt serve para converter string para number, valor inteiro 
var n2 = Number.(window.prompt ('Digite outro numero aqui:')).replace('.',',') //parseFlot converte com numero após o ponto
var s = n1 + n2
window.alert (`A soma de ambos os números é: ' ${s.toFixed(1).replace('.',',')}`)