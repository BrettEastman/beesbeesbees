var RetiredForagerBee = function(age, color, food) {
  ForagerBee.call(this, age, color, food);
  this.age = 40;
  this.job = 'gamble';
  this.color = 'grey';
  this.food = 'jelly';
  this.canFly = false;
  this.treasureChest = [];
};
RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);
RetiredForagerBee.prototype.constructor = RetiredForagerBee;
RetiredForagerBee.prototype.eat = function(newFood) {
  this.food = newFood;
};
RetiredForagerBee.prototype.forage = function() {
  return 'I am too old, let me play cards instead';
};
RetiredForagerBee.prototype.gamble = function(treasure) {
  this.treasureChest.push(treasure);
};
