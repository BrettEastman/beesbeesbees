var ForagerBee = function(age, color, food) {
  Bee.call(this, age, color, food);
  this.age = 10;
  this.job = 'find pollen';
  // this.color = 'yellow';b
  // this.food = 'jelly';
  this.canFly = true;
  this.treasureChest = [];
};

ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype.constructor = ForagerBee;
// ForagerBee.prototype.eat = function(newFood) {
//   this.food = newFood;
// };
ForagerBee.prototype.forage = function(treasure) {
  this.treasureChest.push(treasure);
};