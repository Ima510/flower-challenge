var drawing = SVG('drawing-area');

var beeGroup = drawing.group();

 drawing
  .ellipse(40,55)
  .fill('gray')
  .center(110,3)
  .rotate(40)
  .addTo(beeGroup)

 drawing
  .ellipse(40,45)
  .fill('gray')
  .center(110,3)
  .rotate(-100)
  .addTo(beeGroup)

drawing
  .ellipse(200, 30)
  .fill('rgb(255, 255, 0)')
  .addTo(beeGroup)
  .front()
 drawing
  .rect(3,25)
  .stroke('black')
  .center(50,15)
  .addTo(beeGroup)
 drawing
  .rect(3,25)
  .stroke('black')
  .center(70,15)
  .addTo(beeGroup)
 drawing
  .rect(3,25)
  .stroke('black')
  .center(90,15)
  .addTo(beeGroup)
 drawing
  .rect(3,25)
  .stroke('black')
  .center(110,15)
  .addTo(beeGroup)
 drawing
  .rect(3,25)
  .stroke('black')
  .center(130,15)
  .addTo(beeGroup)
 drawing
  .ellipse(5,5)
  .fill('black')
  .center(30,20)
  .addTo(beeGroup)
 drawing
  .ellipse(5,5)
  .fill('black')
  .center(30,10)
  .addTo(beeGroup) 
//

var moveBee = function(mouseEvent) {
 
  console.log(mouseEvent.x, mouseEvent.y);
	beeGroup
	.center(mouseEvent.x,mouseEvent.y)
	
}

var drawFlower = function(x, y, pedalColor, stemColor) {
  var flowerGroup = drawing.group()
		.center(x, y)
  		.scale(0.9,0.9)
  		.on('mousemove', moveBee);


	drawing 
	.ellipse(75, 75)
	.fill(pedalColor)
	.center(170, 170)
	.rotate(45)
	.addTo(flowerGroup)
	



	drawing 
	.ellipse(75, 75)
	.fill(pedalColor)
	.center(170, 230)
	.rotate(45)
	.addTo(flowerGroup)
	

	drawing 
	.ellipse(75, 75)
	.fill(pedalColor)
	.center(230, 230)
	.rotate(45)
	.addTo(flowerGroup)
	

	drawing 
	.ellipse(75, 75)
	.fill(pedalColor)
	.center(230, 170)
	.rotate(45)
	.addTo(flowerGroup)
	


	drawing
	.rect(20,150)
	.fill(stemColor)
	.center(200,300)
	.addTo(flowerGroup)
	

	drawing
	.ellipse(75, 75)
	.stroke('yellow')
	.fill('yellow')
	.center(200, 200)
	.rotate(95)
	.addTo(flowerGroup)


} 


drawFlower(50,140,'blue','orange') //middle // 
drawFlower(50,390,'green','blue')	// bottom  //
drawFlower(50,-110,'gray','pink')  // top //


drawFlower(500, 140,'purple','black') // middle //
drawFlower(500, 390,'black','green') // bottom //
drawFlower(500,-110,'pink','red') // top // 


drawFlower(950,140,'skyblue','purple')	// middle //
drawFlower(950,390,'red','gray') // bottom //
drawFlower(950,-110, 'cyan','skyblue') // top //


var drawflowerwithbox = function(x,y) {
	
	drawFlower(150,200,'green','orange');

	drawing
	.rect(200,250) 
	.fill('green') 
	.center(200,250);

}

// drawflowerwithbox(200,400);




