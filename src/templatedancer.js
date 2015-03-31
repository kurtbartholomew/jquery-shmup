//dancer template
function SpecialDancer (top, left, timeBetweenSteps){
  // debugger
  Dancer.apply(this, arguments);

}

SpecialDancer.prototype = Object.create(Dancer.prototype);
SpecialDancer.prototype.constructor = BlinkyDancer;
SpecialDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);

  // Add special dance moves below
  this.$node.toggleClass();
};
