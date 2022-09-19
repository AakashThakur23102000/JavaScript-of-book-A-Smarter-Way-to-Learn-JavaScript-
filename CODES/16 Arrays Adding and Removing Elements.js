/**Creating a new pets empty array then adding new elements in them. */
var pets = [];
pets[0] = "Dog";
pets[1] = "Cat";
pets[2] = "Rat";
pets[3] = "Bat";
alert(pets);
/*Here it prints all the arrays elements.*/

/*Replacing old array values to new */
/*Changing Rat to Cow*/
pets[2] = "Cow";
alert(pets);

/**Pop kewword/mehtod is used to remove last elemet of the arrays. */
pets.pop();
alert(pets);

/**push kewword/mehtod is used to add elements in the last of the array */
pets.push("Vishal","Raj");
alert(pets);