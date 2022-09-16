/*here ++VARIABLE means that assign after adding one and VARIABLE++ means assign to variable before adding one */

/** This is a short way of writing...
num = num + 1;
Output = 2 
*/
var num = 1;
var newNum = ++num;
alert(newNum);

/** This is a short way of writing...
num = num - 1;
Output = 0 
*/
var num = 1;
var newNum = --num;
alert(newNum);


/**Here we first assign the value of num to newnum and then increment it to orignal num 
 * output of newnum = 1
 * output of num = 2
*/
var num = 1;
var newNum = num++;
alert(newNum);
alert(num);
