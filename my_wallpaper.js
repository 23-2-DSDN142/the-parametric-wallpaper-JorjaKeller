//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(240, 255, 240); 
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  let skyColor = color('#3b2633');//I ran into an issue with my code failing unless my parameters came under the draw function.
  let stegoGreen = color(210, 232, 155)
  let stegoOrange = color(247, 180, 92)
  let stegoGreenShadow = color(129, 153, 67)
  let stegoOrangeShadow = color(207, 135, 41)
  
  let stegoPurple = color(211, 134, 235)
  let stegoPurpleShadow = color(177, 75, 209)
  let stegoYellow = color(255, 237, 171)
  let stegoYellowShadow = color(222, 187, 106)
  
  let stegoBlue = color(132, 147, 245)
  let stegoBlueShadow = color(77, 95, 214)
  let stegoRed = color(255, 196, 196)
  let stegoRedShadow = color(217, 121, 121)
 
  noStroke()
  fill(skyColor)
  rect(100,100,200,200)
  
  noStroke()
  fill(99, 73, 89)
  ellipse(100,100,170,150)
  
 
if(random(1) > 0.3){
    
  noStroke()
  fill(stegoGreenShadow)
  triangle(30,150,35,110,80,110)//Shadowed legs
  triangle(29.7,150,42,153,80,110)
  triangle(115,150,105,120,130,120)
  triangle(114.7,150,140,120,130,146)
  triangle(115,150,115,130,126,140)
  ellipse(125,138,10,10)
  
  fill(stegoOrangeShadow)//Shadowed plates
  triangle(90,88,75,30,65,63)//Middle plate
  triangle(89.7,88,74.7,30,100,57)
  triangle(120,88,140,46,115,63)//Back plate one
  triangle(119.7,88,139.7,46,140,76)
  triangle(147,100,160,73,145,83)//Back plate two
  triangle(146.7,100,159.7,73,160,90)
  triangle(55,95,40,55,55,65)//Front plate
  triangle(55.3,95,40.3,55,35,80)
  ellipse(150,110,12,15)
  ellipse(130,115,10,7)
  ellipse(137,105,7,7)
  
  
  fill(stegoGreen)
  
  ellipse(100,100,95,80)//Stego body
  ellipse(25,120,35,30)//Stego head
  triangle(15,110,75,66,75,135)//Stego neck
  triangle(25,135,100,140,45,100)
  triangle(185,95,165,125,175,100)//Stego tail
  triangle(180,100,100,140,120,65)
  triangle(165,125,100,140,180,98)
  triangle(110,139,165,125,130,130)
  rect(55,130,20,25)//Front leg
  triangle(75,155,65,115,90,115)
  triangle(148,148,115,120,145,120)//Back leg
  triangle(148,148,160,140,155,120)
  triangle(148,148,135,120,160,120)
  
  fill(stegoOrange)
  triangle(100,88,85,30,75,63)//Middle plate
  triangle(99.7,88,84.7,30,110,57)
  triangle(130,88,150,46,125,63)//Back plate one
  triangle(129.7,88,149.7,46,150,76)
  triangle(157,100,170,73,155,83)//Back plate two
  triangle(156.7,100,169.7,73,170,90)
  triangle(65,95,50,55,65,65)//Front plate
  triangle(65.3,95,50.3,55,45,80)
  ellipse(150,110,12,15)
  ellipse(130,115,10,7)
  ellipse(137,105,7,7)

  // triangle(40,10,40,30,30,20) //Diamond decals
  // triangle(40,10,40,30,50,20)
  // triangle(55,27,55,35,50,31)
  // triangle(55,27,55,35,60,31)

  // triangle(155,27,155,35,150,31) //Spot decals
  // triangle(155,27,155,35,160,31)

  ellipse(20,30,15,17)
  ellipse(35,40,7,7)
  ellipse(170,50,7,7)

  if(random(1) > 0.6){
    noStroke()
  fill(stegoBlueShadow)//Shadowed legs
  triangle(30,150,35,110,80,110)
  triangle(29.7,150,42,153,80,110)
  triangle(115,150,105,120,130,120)
  triangle(114.7,150,140,120,130,146)
  triangle(115,150,115,130,126,140)
  ellipse(125,138,10,10)
  
  fill(stegoRedShadow)//Shadowed Plates
  triangle(90,88,75,30,65,63)//Middle plate
  triangle(89.7,88,74.7,30,100,57)
  triangle(120,88,140,46,115,63)//Back plate one
  triangle(119.7,88,139.7,46,140,76)
  triangle(147,100,160,73,145,83)//Back plate two
  triangle(146.7,100,159.7,73,160,90)
  triangle(55,95,40,55,55,65)//Front plate
  triangle(55.3,95,40.3,55,35,80)
  ellipse(150,110,12,15)
  ellipse(130,115,10,7)
  ellipse(137,105,7,7)
  
  
  fill(stegoBlue)
  
  ellipse(100,100,95,80)//Stego body
  ellipse(25,120,35,30)//Stego head
  triangle(15,110,75,66,75,135)//Stego neck
  triangle(25,135,100,140,45,100)
  triangle(185,95,165,125,175,100)//Stego tail
  triangle(180,100,100,140,120,65)
  triangle(165,125,100,140,180,98)
  triangle(110,139,165,125,130,130)
  rect(55,130,20,25)//Front leg
  triangle(75,155,65,115,90,115)
  triangle(148,148,115,120,145,120)//Back leg
  triangle(148,148,160,140,155,120)
  triangle(148,148,135,120,160,120)
  
  fill(stegoRed)
  triangle(100,88,85,30,75,63)//Middle plate
  triangle(99.7,88,84.7,30,110,57)
  triangle(130,88,150,46,125,63)//Back plate one
  triangle(129.7,88,149.7,46,150,76)
  triangle(157,100,170,73,155,83)//Back plate two
  triangle(156.7,100,169.7,73,170,90)
  triangle(65,95,50,55,65,65)//Front plate
  triangle(65.3,95,50.3,55,45,80)
  ellipse(150,110,12,15)
  ellipse(130,115,10,7)
  ellipse(137,105,7,7)

  // triangle(40,10,40,30,30,20) //Diamond decals
  // triangle(40,10,40,30,50,20)
  // triangle(55,27,55,35,50,31)
  // triangle(55,27,55,35,60,31)

  // triangle(155,27,155,35,150,31) 
  // triangle(155,27,155,35,160,31)

  ellipse(20,30,15,17) //Spot decals
  ellipse(35,40,7,7)
  ellipse(170,50,7,7)
}}
  
  else{
    
    noStroke()
    fill(stegoPurpleShadow)
    triangle(30,150,35,110,80,110)
    triangle(29.7,150,42,153,80,110)
    triangle(115,150,105,120,130,120)
    triangle(114.7,150,140,120,130,146)
    triangle(115,150,115,130,126,140)
    ellipse(125,138,10,10)
    
    fill(stegoYellowShadow)
    triangle(90,88,75,30,65,63)//Middle plate
    triangle(89.7,88,74.7,30,100,57)
    triangle(120,88,140,46,115,63)//Back plate one
    triangle(119.7,88,139.7,46,140,76)
    triangle(147,100,160,73,145,83)//Back plate two
    triangle(146.7,100,159.7,73,160,90)
    triangle(55,95,40,55,55,65)//Front plate
    triangle(55.3,95,40.3,55,35,80)
    ellipse(150,110,12,15)
    ellipse(130,115,10,7)
    ellipse(137,105,7,7)
    
    
    fill(stegoPurple)
    ellipse(100,100,95,80)//Stego body
    ellipse(25,120,35,30)//Stego head
    triangle(15,110,75,66,75,135)//Stego neck
    triangle(25,135,100,140,45,100)
    triangle(185,95,165,125,175,100)//Stego tail
    triangle(180,100,100,140,120,65)
    triangle(165,125,100,140,180,98)
    triangle(110,139,165,125,130,130)
    rect(55,130,20,25)//Front leg
    triangle(75,155,65,115,90,115)
    triangle(148,148,115,120,145,120)//Back leg
    triangle(148,148,160,140,155,120)
    triangle(148,148,135,120,160,120)
    
    fill(stegoYellow)
    triangle(100,88,85,30,75,63)//Middle plate
    triangle(99.7,88,84.7,30,110,57)
    triangle(130,88,150,46,125,63)//Back plate one
    triangle(129.7,88,149.7,46,150,76)
    triangle(157,100,170,73,155,83)//Back plate two
    triangle(156.7,100,169.7,73,170,90)
    triangle(65,95,50,55,65,65)//Front plate
    triangle(65.3,95,50.3,55,45,80)
    ellipse(150,110,12,15)
    ellipse(130,115,10,7)
    ellipse(137,105,7,7)

  //   triangle(40,10,40,30,30,20) //Diamond Decals
  // triangle(40,10,40,30,50,20)
  // triangle(55,27,55,35,50,31)
  // triangle(55,27,55,35,60,31)

  // triangle(155,27,155,35,150,31)
  // triangle(155,27,155,35,160,31)

  ellipse(20,30,15,17) //Spot Decals
  ellipse(35,40,7,7)
  ellipse(170,50,7,7)
  }
  
  fill(0)//Eye
  ellipse(22,125,5,5)}