
let graphic
console.log(typeof graphic)

function setup(){
    background('#E84CA6')

    const canvas = createCanvas(windowWidth, windowHeight);

    canvas.parent('canvas-container');

    graphic = createGraphics(windowWidth, windowHeight);

    graphic.fill('#DBF685')
    graphic.textSize(500);
    graphic.textAlign(CENTER,CENTER);
    graphic.text("spring", windowWidth*0.5,windowHeight *0.5 - 100)
    

}

function draw() {

  //
    background("#E84CA6")

   
    
    const tiles = 10;
    const tileSize = windowWidth / tiles
    
    // loop over each tile
    for (let x = 0; x < tiles; x++) {
      //the first for loop runs 10 times
    
      for (let y = 0; y < tiles; y++)
       {
       
        // our second for loop runs 10 times for every loop x runs 
        // y * 10

        // the speed of the wave frameCount * 0.05
        // the total equation is the distance of the wave 
        //x * 0.5 this controls the speed of the x axis - note the smaller the we times the less difference
        //there is between frames
        const distortion = sin(frameCount * 0.05 + x * 0.5 + y * 0.5) * 70
     
        // think of this as applying the grid to the source in the graphics buffer
        //sx where we start X
        const sx = x * tileSize 
        //sy wwhere we start Y 
        const sy = y * tileSize
        //how wide is this
        const sw = tileSize 
        //the height of the tile
        const sh = tileSize + distortion
  
        // and this as applying the grid to the destination on the canvas
        //where it lands on the x
        const dx = x * tileSize
        //where we it lands on the Y
        const dy = y * tileSize
        //the width when it animates
        const dw = tileSize
        //height when it animates 
        const dh = tileSize 
  
        //	grided image from buffer into main canvas
        image(graphic, dx, dy, dw, dh, sx, sy, sw, sh)
     }
    }
  }
  
  
  
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }