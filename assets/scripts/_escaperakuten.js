$('document').ready(function(){

  window.addEventListener('keydown', moveSelection);
  var w = parseInt($(".canvas").width())
  var r = parseInt($("#ryoko").width())
  $("#ryoko").css("left", w/2 - r/2)

  function leftArrowPressed() {
      var l = parseInt($("#ryoko").css("left"))
      console.log(l);
      if(l > 0){
        $("#ryoko").css("left", parseInt($("#ryoko").css("left")) - 20)
        $("#ryoko_left").show()
        $("#ryoko_right").hide()
      }
  }
  function rightArrowPressed() {
      var l = parseInt($("#ryoko").css("left"))
      console.log(l);
      console.log(r);
      console.log(w);
      if(l + r < w){
        $("#ryoko").css("left", parseInt($("#ryoko").css("left")) + 20)
        $("#ryoko_left").hide()
        $("#ryoko_right").show()
      }
  }
  function moveSelection(evt) {
    switch (evt.keyCode) {
      case 37:
      leftArrowPressed();
      break;
      case 39:
      rightArrowPressed();
      break;
    }
  };

});
