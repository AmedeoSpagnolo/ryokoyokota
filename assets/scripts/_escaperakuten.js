$('document').ready(function(){

  window.addEventListener('keydown', moveSelection);
  $("#ryoko").css("left", $(".canvas").width()/2 - $("#ryoko").width()/2)

  function leftArrowPressed() {
      $("#ryoko").css("left", parseInt($("#ryoko").css("left")) - 20)
      $("#ryoko_left").show()
      $("#ryoko_right").hide()
  }
  function rightArrowPressed() {
      $("#ryoko").css("left", parseInt($("#ryoko").css("left")) + 20)
      $("#ryoko_left").hide()
      $("#ryoko_right").show()
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
