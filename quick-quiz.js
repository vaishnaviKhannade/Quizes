var readlineSync= require("readline-sync");
score=0;
i=1;
var userName= readlineSync.question("hy! buddy before starting will you please tell me your name ?\n")
console.log("hello "+ userName +"! here i am VAISHNAVI KHANNADE, want to play a quiz whose title is");
console.log("                 TAARAK MEHTA KA ULTA CHASHMA     ");
console.log("      -------------------------------------------------\n\n\n")

console.log("INSTRUCTION :-- 1).Questions will follow with their respective options,please give correct option's number :\n                     2).If more than 7 questions are right then you'll win this quiz.\n\n\n")
function askuser(question,answer)
{
var ask = readlineSync.question( i+")" +question+"\n")

if(ask==answer)
{
    console.log("yes,you are right!!")
    score=score+1;
    console.log("your score is "+score+"\n")

} else
{
    console.log("no, you are wrong!! ")
    console.log("your score is "+score+"\n")

} i++
}
   askuser("what is the name of tapu k papa? \n 1) Jethalal Gada \n 2)Taarak Mehta",1);
   console.log("-------------------------------------------------\n")
   askuser("what's the name of jethalal's brother in law ?\n 1) sundarlal \n 2) Popat Lal",1)
   console.log("-------------------------------------------------")
   askuser("what's the name of Abdul's shop? \n 1) General Store \n 2) All is Well Store \n 3) All in One General Store",3)
   console.log("-------------------------------------------------\n")
   askuser("who  is parsi ? \n 1) Anjali \n 2) Babita ji \n 3) Roshan",3)
   console.log("-------------------------------------------------\n")
   askuser("By which name Jethalal saved his brother in law's contact no.? \n 1) saala\n 2) panoti \n 3) sardard",2)
   console.log("-------------------------------------------------\n")
   askuser("whats the name of bhide's scooter? \n 1) bhalaram\n 2) chintaram \n 3) sakharam",3)
   console.log("-------------------------------------------------\n")
   askuser("what is the name of society in the series? \n 1) Gokuldham\n 2) Krishna \n 3) Gogram",1)
   console.log("-------------------------------------------------\n")
   askuser("whats the the name of Taarak Mehta's wife? \n 1) Anjali\n 2) Komal \n 3) Daya",1)
   console.log("-------------------------------------------------\n")
   askuser("whats the name of grand father of Jethalal ? \n 1) Champaklal\n 2) Jayantilal \n 3) Both",2)
   console.log("-------------------------------------------------\n")
   askuser("whats the name of Jethalal's Shop ? \n 1) Tapu Electronics \n 2) Gada Electronics \n ",2)
   console.log("--------------------------------------------------")
    
   if (score>= 8)
   {
       console.log("                                     "+ userName+"! you won this quiz hurry!!\n\n                                      your total scores are :"+score+"\n")
   }else
   {
    console.log("                                     "+ userName+"! you lose this quiz\n\n                                          your total scores are :"+score+"\n" )

   }
   console.log ("                            THANKYOU!! FOR GIVING YOUR TIME :)\n          --------------------------------------------------------------------")