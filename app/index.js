/*
 * 'pet' constructor:
 *               DATA PROPERTIES(nouns)
 *               name, age, gender, species
 *               health - a number between 0 and 100
 *               energy - how energetic/how tired 0 to 100
 *               full meter - how full/how hungry 0 to 100
 *               ACTIONS(verbs)
 *               walk, sleep, eat, resurrect
 *
 */
var Pet = require('./models/pet.js');

var p1 = new Pet('frederick', 7, 'male', 'camel');
var p2 = new Pet('lassy', 4, 'female', 'bee');

p1.walk();
p1.eat();
p1.sleep();

while(!p2.isZombie)
{
  console.log(p2);
  p1.attack(p2);
}

console.log('the winner is', p1);
