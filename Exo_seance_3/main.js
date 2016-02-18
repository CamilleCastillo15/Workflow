TweenMax.to('#ball', 1, {

	x: 400,
	ease: Expo.easeOut,
	repeat: -1,
	yoyo: true

});

// var sun = new Image();
// var moon = new Image();
// var earth = new Image();

	var canvas = document.getElementById('canvas');
  	var ctx = canvas.getContext('2d');

  	var radius = 25;
  	var ball = {x:0};

  	ctx.fillStyle = 'rgb(255,0,0)';


function draw() {

	  ctx.clearRect(0,0,canvas.width,canvas.height); // clear canvas
	  
	  ctx.beginPath();
	  ctx.arc(ball.x + radius, radius, radius, 0, Math.PI*2, true); // Earth orbit
	  ctx.closePath();
	  ctx.fill();

  window.requestAnimationFrame(draw);

}

TweenMax.to(ball, 1, {

	x: 400,
	ease: Expo.easeOut,
	repeat: -1,
	yoyo: true,
	onUpdate: function(){

		draw();

	}

});

var sun = new Image();
var moon = new Image();
var earth = new Image();

function init(){

  	sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
  	moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
	earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
	window.requestAnimationFrame(draw_v2);

}

function draw_v2() {
  
	  var ctx_2 = document.getElementById('canvas_v2').getContext('2d');

	  ctx_2.globalCompositeOperation = 'destination-over';
	  ctx_2.clearRect(0,0,300,300); // clear canvas

	  ctx_2.fillStyle = 'rgba(0,0,0,0.4)';
	  ctx_2.strokeStyle = 'rgba(0,153,255,0.4)';
	  ctx_2.save();
	  ctx_2.translate(150,150);

	  // Earth
	  var time = new Date();
	  ctx_2.rotate( ((2*Math.PI)/60)*time.getSeconds() + ((2*Math.PI)/60000)*time.getMilliseconds() );
	  ctx_2.translate(105,0);
	  ctx_2.fillRect(0,-12,50,24); // Shadow
	  ctx_2.drawImage(earth,-12,-12);

	  // Moon
	  ctx_2.save();
	  ctx_2.rotate( ((2*Math.PI)/6)*time.getSeconds() + ((2*Math.PI)/6000)*time.getMilliseconds() );
	  ctx_2.translate(0,28.5);
	  ctx_2.drawImage(moon,-3.5,-3.5);
	  ctx_2.restore();

	  ctx_2.restore();
	  
	  ctx_2.beginPath();
	  ctx_2.arc(150,150,105,0,Math.PI*2,false); // Earth orbit
	  ctx_2.stroke();
	 
	  ctx_2.drawImage(sun,0,0,300,300);

  // var canvas = document.getElementById('canvas');
  

  // // if (canvas.getContext){
  //   var ctx = canvas.getContext('2d');
  //   var time = new Date();

  //   ctx.beginPath();
  //   ctx.beginPath();
  //   ctx.arc(75,75,50,0,Math.PI*2,true); // Cercle exterieur
  //   ctx.moveTo(110,75);
  //   ctx.arc(75,75,35,0,Math.PI,false);   // Bouche (sens horaire)
  //   ctx.moveTo(65,65);
  //   ctx.arc(60,65,5,0,Math.PI*2,true);  // Oeil gauche
  //   ctx.moveTo(95,65);
  //   ctx.arc(90,65,5,0,Math.PI*2,true);  // Oeil droite
  //   ctx.stroke();

  //   var time = new Date();
	 //  ctx.rotate( ((2*Math.PI)/60)*time.getSeconds() + ((2*Math.PI)/60000)*time.getMilliseconds() );
	 //  ctx.translate(105,0);
	 //  ctx.fillRect(0,-12,50,24); // Shadow
	 //  ctx.drawImage(earth,-12,-12);

  // }

  window.requestAnimationFrame(draw_v2);

}

init();

function clock(){
  var now = new Date();
  var ctx_3 = document.getElementById('canvas_v3').getContext('2d');
  ctx_3.save();
  ctx_3.clearRect(0,0,150,150);
  ctx_3.translate(75,75);
  ctx_3.scale(0.4,0.4);
  ctx_3.rotate(-Math.PI/2);
  ctx_3.strokeStyle = "black";
  ctx_3.fillStyle = "white";
  ctx_3.lineWidth = 8;
  ctx_3.lineCap = "round";

  // Hour marks
  ctx_3.save();
  for (var i=0;i<12;i++){
    ctx_3.beginPath();
    ctx_3.rotate(Math.PI/6);
    ctx_3.moveTo(100,0);
    ctx_3.lineTo(120,0);
    ctx_3.stroke();
  }
  ctx_3.restore();

  // Minute marks
  ctx_3.save();
  ctx_3.lineWidth = 5;
  for (i=0;i<60;i++){
    if (i%5!=0) {
      ctx_3.beginPath();
      ctx_3.moveTo(117,0);
      ctx_3.lineTo(120,0);
      ctx_3.stroke();
    }
    ctx_3.rotate(Math.PI/30);
  }
  ctx_3.restore();
 
  var sec = now.getSeconds();
  var min = now.getMinutes();
  var hr  = now.getHours();
  hr = hr>=12 ? hr-12 : hr;

  ctx_3.fillStyle = "black";

  // write Hours
  ctx_3.save();
  ctx_3.rotate( hr*(Math.PI/6) + (Math.PI/360)*min + (Math.PI/21600)*sec )
  ctx_3.lineWidth = 14;
  ctx_3.beginPath();
  ctx_3.moveTo(-20,0);
  ctx_3.lineTo(80,0);
  ctx_3.stroke();
  ctx_3.restore();

  // write Minutes
  ctx_3.save();
  ctx_3.rotate( (Math.PI/30)*min + (Math.PI/1800)*sec )
  ctx_3.lineWidth = 10;
  ctx_3.beginPath();
  ctx_3.moveTo(-28,0);
  ctx_3.lineTo(112,0);
  ctx_3.stroke();
  ctx_3.restore();
 
  // Write seconds
  ctx_3.save();
  ctx_3.rotate(sec * Math.PI/30);
  ctx_3.strokeStyle = "#D40000";
  ctx_3.fillStyle = "#D40000";
  ctx_3.lineWidth = 6;
  ctx_3.beginPath();
  ctx_3.moveTo(-30,0);
  ctx_3.lineTo(83,0);
  ctx_3.stroke();
  ctx_3.beginPath();
  ctx_3.arc(0,0,10,0,Math.PI*2,true);
  ctx_3.fill();
  ctx_3.beginPath();
  ctx_3.arc(95,0,10,0,Math.PI*2,true);
  ctx_3.stroke();
  ctx_3.fillStyle = "rgba(0,0,0,0)";
  ctx_3.arc(0,0,3,0,Math.PI*2,true);
  ctx_3.fill();
  ctx_3.restore();

  ctx_3.beginPath();
  ctx_3.lineWidth = 14;
  ctx_3.strokeStyle = '#325FA2';
  ctx_3.arc(0,0,142,0,Math.PI*2,true);
  ctx_3.stroke();

  ctx_3.restore();

  window.requestAnimationFrame(clock);
}

window.requestAnimationFrame(clock);