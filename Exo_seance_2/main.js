TweenMax.to('#plane', 1, {
		
		x: 100,
		repeat:1,
		yoyo:true

})

TweenMax.to('#plane', 1 {
	
	scaleX: 1.4,
	delay: .5

});

TweenMax.to('#plane', 1, {

	x:100,
	repeat:1,
	yoyo:true,

	onComplete: function(){

		TweenMax.set('#plane', {

			clearProps: 'all'

		});

	}
	
});

var timeline = new TimeLineMax();

timeline.to('#plane', 1 {

	x:100


}).to('#plane', 1 {


	y:100

});
