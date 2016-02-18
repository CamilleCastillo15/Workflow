function init(){

	var img = new Image();

	var canvas = document.getElementById('anim');
	var ctx = canvas.getContext('2d');

	// var frameWidth = canvas.width;
	// var frameHeight = canvas.height;

	var frameWidth = 940;
	var frameHeight = 240;

	var frameX = 0;
	var frameY = 0;

	var numFrameX = 0;
	var numFramY = 0;

	console.log('js');

	img.onload = function(){

		numFrameX = img.width / frameWidth;
		numFrameY = img.height / frameHeight;		

		// ctx.drawImage(img, 0, 0, 250, 250);
		console.log('loaded');

		//Il faut mieux faire un requestanimationframe plutôt qu'un setInterval
		start();

	};

	img.src = 'anim.png';


	function start(){

		setInterval(renderFrame, 60);

	}

	function renderFrame(){

		if(frameX == numFrameX) {
				frameX = 0;
				frameY++;
			}

			if(frameY == numFrameY) {
				frameY = 0;
			}

			// console.log("frames");
			ctx.clearRect(0,0,canvas.width,canvas.height);

			ctx.drawImage(img,frameX*frameWidth,frameY*frameHeight,frameWidth, frameHeight, 0, 0,frameWidth,frameHeight)

			frameX++;

	}

}