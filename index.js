function BoardMember(name, homeState, training) {
  this.name = name;
  this.homeState = homeState;
  this.training = training;
  function veto () {
    return "No, I must disagree"
  }
  function approve () {
    return "You can do that!"
  }
  function doCharity () {
    return "I like to help people."
  }
  function releasePressStatement () {
    return "You will see great things from Scuber."
  }
  function sayHi () {
    return "No, I must disagree"
  }
}
