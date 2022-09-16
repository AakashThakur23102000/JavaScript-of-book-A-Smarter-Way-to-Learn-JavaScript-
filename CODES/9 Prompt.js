/*
Prompts
A prompt box asks the user for some information and provides a response field for her
answer.
*/

/**Here left side ask question and right side fills it with text you mention */
var spec = prompt("Your species?", "human");

/**All the input that prompt takes adds to string */
var numberOfCats = prompt("How many cats?");
var tooManyCats = numberOfCats + 1;
alert(tooManyCats);

/**If the user enters nothing and clicks OK, the variable is assigned an empty string: ""
If the user clicks Cancel, the variable is assigned a special value, null. */

/*Some coders write window.prompt instead of, simply, prompt. */