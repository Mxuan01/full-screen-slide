var wrapper = $('.wrapper');

var toNextPage = function(e) {
  var curParent = $(e.target).parents('.page');

  setTimeout(function(){
    curParent.addClass("hide");
  }, 1000)

  curParent.next().removeClass('hide').addClass("slideUp");
}

wrapper.on('click', '.next-btn', function(e){
  toNextPage(e)
}).on('click', '.lottery_btn', function(e){
  var rotate = 'rotateZ(' + (360*4+45) + 'deg)';

  $(".pointer").css({
		'-webkit-transform': rotate,
		'transform': rotate
	}).on('transitionend', function(){
    toNextPage(e)
  });

})