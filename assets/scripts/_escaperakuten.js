$('document').ready(function(){

  window.addEventListener('keydown', moveSelection);
  var w = parseInt($(".canvas").width())
  var h = parseInt($(".canvas").height())
  var r = parseInt($("#ryoko").width())
  $("#ryoko").css("left", w/2 - r/2)

  antenna()
  setInterval(function(){
    antenna()
  }, 1000);

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
  function antenna(){
    // $(".canvas").add('img')
    var $ant = $("<img class='antenna' src='http://placekitten.com/69/71'></img>")
    var _w = 30
    $ant.css({
      "left": parseInt(Math.random()*(w-_w)) ,
      "position": "absolute",
      "top": 0,
      "width": _w
    })
    $(".canvas").append($ant)
    $ant.animate({top: $(".canvas").height(),}, Math.random() + 5000, function(){
      $(this).remove();
    });
  }

});


 // id="antenna" src="http://placekitten.com/69/71">
 // function fallingSnow() {
 //
 //     var $snowflakes = $(), qt = 20;
 //
 //     for (var i = 0; i < qt; ++i) {
 //         var $snowflake = $('<div class="snowflakes"></div>');
 //         $snowflake.css({
 //             'left': (Math.random() * $('#site').width()) + 'px',
 //             'top': (- Math.random() * $('#site').height()) + 'px'
 //         });
 //         // add this snowflake to the set of snowflakes
 //         $snowflakes = $snowflakes.add($snowflake);
 //     }
 //     $('#snowZone').prepend($snowflakes);
 //
 //     $snowflakes.animate({
 //         top: "500px",
 //         opacity : "0",
 //     }, Math.random() + 5000, function(){
 //         $(this).remove();
 //         // run again when all 20 snowflakes hit the floor
 //         if (--qt < 1) {
 //             fallingSnow();
 //         }
 //     });
 // }
 // fallingSnow();
 //
