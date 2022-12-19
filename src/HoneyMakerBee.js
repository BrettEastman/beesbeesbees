var HoneyMakerBee = function(age, color, food) {
  Bee.call(this, age, color, food);
  this.age = 10;
  this.job = 'make honey';
  // this.color = 'yellow'; **inherits color from Bee, so unnecessary to add
  // this.food = 'jelly';
  this.honeyPot = 0;
};

HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;
// HoneyMakerBee.prototype.eat = function(newFood) {
//   this.food = newFood;
// };
HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot++;
};
HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot--;
};