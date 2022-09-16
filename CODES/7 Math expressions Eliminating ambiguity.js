/**n JavaScript as in algebra, the ambiguity is cleared up by precedence rules. */
/**Output = 13 */
var totalCost = 1 + 3 * 4;
alert(totalCost);

/*Using parentheses () can be uses to eliminate ambiguity.  */
/*Output - 16*/
var totalCost = (1 + 3) * 4;
alert(totalCost);

/*Output - 13*/
var totalCost = 1 + (3 * 4);
alert(totalCost);