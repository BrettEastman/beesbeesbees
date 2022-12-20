var Grub = function() {
  this.age = 0;
  this.color = 'pink';
  this.food = 'jelly';
};

Grub.prototype.eat = function(newFood) {
  this.food = newFood;
};

