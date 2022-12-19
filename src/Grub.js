var Grub = function(age, color, food) {
  this.age = 0;
  this.color = 'pink';
  this.food = 'jelly';

};

Grub.prototype.eat = function(newFood) {
  this.food = newFood;
};

// var newGrub = new Grub(0, 'pink', 'jelly');
