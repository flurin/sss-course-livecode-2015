var car = {
  brand : "Volvo",
  speed : 0,
  direction: 1,
  accelerate : function(amount){
    if(this.speed + amount < 0){
      this.speed = 0;
    } else if(this.speed + amount > 110) {
      this.speed = 110;
    } else {
      this.speed = this.speed + amount;
    }
  }
}

module.exports = [car, car];