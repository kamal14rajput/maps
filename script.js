const question = new Map();
question.set('question','What is the official name of the latest Javascript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct Answer!!!');
question.set(false, 'Wrong Answer!Try again');

console.log(question.get('question'));
//console.log(question.size);

/*
question.delete(4);
if(question.has(3)){
    question.delete(2);
}
question.clear();
*/
//question.forEach((key, value) => console.log(`This is ${key},and it's set to ${value} `));

/*
for(let [key, value] of question.entries()){
    console.log(`This is ${key},and it's set to ${value} `);
}
*/
for(let [key, value] of question.entries()){
    if(typeof(key) === 'number'){
        console.log(`Answer ${key}: ${value}`);
    }
}