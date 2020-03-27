
let graphic
console.log(typeof graphic)

function setup(){
    background('#E84CA6')

    const canvas = createCanvas(windowWidth, windowHeight);

    canvas.parent('canvas-container');

    graphic = createGraphics(windowWidth, windowHeight);

    graphic.textSize(500);
    graphic.textAlign(CENTER,CENTER);
    graphic.text("spring", windowWidth*0.5,windowHeight *0.5 - 100)

}

function draw() {
    background("#E84CA6")
    
    const tiles = 10
    const tileSize = 1600 / tiles
    
    // loop over each tile
    for (let x = 0; x < tiles; x = x + 1) {
      for (let y = 0; y < tiles; y = y + 1) {

        const distortion = sin(frameCount * 0.05 + x * 0.5 + y * 0.3) * 50
     
        // think of this as applying the grid to the source in the graphics buffer
        const sx = x * tileSize + distortion
        const sy = y * tileSize
        const sw = tileSize
        const sh = tileSize
  
        // and this as applying the grid to the destination on the canvas
        const dx = x * tileSize
        const dy = y * tileSize
        const dw = tileSize
        const dh = tileSize
  
        //	grided image from buffer into main canvas
        image(graphic, dx, dy, dw, dh, sx, sy, sw, sh)
      }
    }
  }
  
  
  
// function windowResized() {
//     resizeCanvas(windowWidth, windowHeight);
//   }