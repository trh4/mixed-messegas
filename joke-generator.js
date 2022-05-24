const part1 =[
    'what walking on 3 legs and rolling',
    'what is green from the inside and soft brown from inside',
    'who barks on parking cars',
    'who eated all his life lemons',
    'who is the craziest',
    'who the most motivated',
    'what made you became the best',
    'who piss like a hose',
    'what fucks like a noodle',
    'who put tampon inside hot water to make tea'
];
const part2 =[    
    'the author of this lame code',
    'a 3 legged dog when hes pee',
    'you :}',
    'dracula',
    'superman',
    'avocado',
    'Breaking Benjamion',
    'a drunk whore',
    'your dad',
    'you when you on weed'
];
const part3 =[
    'he likes it',
    'hes brown',
    'your a hoe',
    'of alcohol',
    'its the time', 
    "of your tiny peni's",
    'life is an illusion',
    'we live in the matrix',
    'of sex',
    'you are the best',
];
function randNum(x) {
    return Math.floor(Math.random()*x)
}
function createJoke (x) {
    return `${part1[randNum(x)]}? ${part2[randNum(x)]}, because ${part3[randNum(x)]}.`
}
console.log(createJoke(10))
