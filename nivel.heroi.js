//Variaveis que vao ser utilizadas


//Variavel uqe exibe o nome do heroi

let nomeHeroi =  'Jotavê'

//variavel que armazena o nivel de xp do heroi

let xpHeroi = 15000

//Variavel ue armazena o nivel do heroi

let nivelHeroi = ''


//Verificando o nivel

if (xpHeroi < 1000){nivelHeroi = 'Ferro'}
if (xpHeroi > 1001 && xpHeroi <2000){nivel_heroi = 'Bronze'}
if (xpHeroi > 2001 && xpHeroi <5000){nivelHeroi = 'Prata'}
if (xpHeroi > 6001 && xpHeroi <7000){nivelHeroi = 'Ouro'}
if (xpHeroi > 7001 && xpHeroi <8000){nivelHeroi = 'Platina'}
if (xpHeroi > 8001 && xpHeroi <9000){nivelHeroi = 'Ascentende'}
if (xpHeroi > 9001 && xpHeroi <10000){nivelHeroi = 'Imortal'}
if (xpHeroi > 10001){nivelHeroi = 'Radiante'}

//Mensagem de retorno ao Usuario

console.log ("O Herói ** " +nomeHeroi,"** está no nivel ** " +nivelHeroi,"**")