var readlinesync = require('readline-sync');
var score = 0;
var UserAnswer = readlinesync.question("What is your name ? ");
console.log("Welcome " + UserAnswer );
var UserAnswer = readlinesync.question("Which is your fav Sport ? ");

function play(question,answer){
  var UserAnswer = readlinesync.question(question);
  if (UserAnswer === answer){
    console.log("Right !");
    score++ ; 
  } else{
    console.log("Wrong !");
  }
  
}

var questions = [{
  question : "Which is your fav cricket team ? ",
  answer : "india",
},{
  question : "When did India won there first WorldCup ? ",
  answer : "1983"
},{
  question : "Who is youe fav Indian Cricketer ? ", 
  answer : "ms dhoni"
},{
question : "What is your fav cricketer jersy number ?   ",
answer  : "7"
}]

for(i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}
console.log("YAY ! You have scored : " + score );