/**Here we are going to learn 'and' and 'or' conditions in statements */
/*OR condion program* */
/*basic program to find weathers in diffrent months  */
var usr_input = prompt("Enter one month number to find weather form 1 to 12");
if (usr_input=="3" || usr_input=="4" || usr_input == "5" || usr_input == "6"){
    alert("Summer");
}
else if(usr_input=="1" || usr_input=="2" || usr_input=="7" || usr_input=="8"){
    alert("Monsoon");
} 
else if(usr_input=="9" || usr_input=="10" || usr_input=="11" || usr_input=="12"){
    alert("Winters")    
}
else{
    alert("Enter a vaid number")
}; 

/*And condition praogram */
/*if age is 18 or grater and weight is greter than 60 than ony you are able to ride the game */
var usr_age = 55
var usr_weight = 81
if (usr_age>=18 && usr_weight>= 60){
    alert("You can ride the GAME.")
}
else{
    alert("You can't ride the GAME.")
};
