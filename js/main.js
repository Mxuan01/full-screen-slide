var wrapper = $('.wrapper');

wrapper.on('click', '.next-btn', function(e){
  var curParent = $(e.target).parent();

  setTimeout(function(){
    curParent.addClass("hide");
  }, 1000)

  curParent.next().removeClass('hide').addClass("slideUp");

  // $("#box").removeClass('hide').addClass('slideUp');

  // var rotate = 'rotateZ(' + (360*4+45) + 'deg)';

	// $("#box").css({
	// 	'-webkit-transform': rotate,
	// 	'transform': rotate
	// })
})

// $(".next-btn").on('click', function(e) {
//   var curParent = $(e.target).parent();

//   setTimeout(function(){
//     curParent.addClass("hide");
//   }, 1000)
  
//   curParent.next().removeClass('hide').addClass('slideUp');

//   // $("#box").removeClass('hide').addClass('slideUp');
// })