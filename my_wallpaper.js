//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  let cloudColor = color('#f5fcff');
noStroke()//sky five
fill(196, 238, 255)
ellipse(5,20,35,35)
ellipse(25,30,25,25)
ellipse(65,45,70,70)
ellipse(105,25,30,30)
ellipse(135,25,45,20)
ellipse(165,30,55,55)
ellipse(190,35,30,30)
ellipse(205,20,35,35)
ellipse(25,10,7,7)

noStroke()//sky four
fill(177, 231, 252)
ellipse(80,75,50,50)
ellipse(15,60,55,55)
ellipse(50,80,30,30)
ellipse(45,60,15,15)
ellipse(190,60,40,40)
ellipse(160,75,50,50)
ellipse(125,55,65,65)
ellipse(215,60,55,55)
ellipse(158,35,9,9)

  noStroke()//sky three
  fill(157, 218, 242)
  ellipse(20,100,65,70)
  ellipse(65,110,45,45)
  ellipse(90,95,20,20)
  ellipse(175,95,65,65)
  ellipse(220,100,65,70)
  //ellipse(-35,95,65,65)
  ellipse(77,83,8,8)
  ellipse(145,75,5,5)
  ellipse(68,84,5,5)

noStroke() //sky two
fill(138, 203, 235)
ellipse(30,135,70,70)
ellipse(5,110,20,20)
ellipse(70,140,35,35)
ellipse(105,130,50,45)
ellipse(170,145,110,90)
ellipse(205,110,20,20)
ellipse(195,100,7,7)

  noStroke()//sky one
  fill(104, 176, 212)
//ellipse(7,175,80,90)
ellipse(80,185,90,60)
ellipse(140,170,85,70)
ellipse(180,185,65,50)
ellipse(100,150,30,30)
ellipse(180,140,15,15)
ellipse(187,130,5,5)
ellipse(43,137,10,10)
ellipse(207,175,80,90)

noStroke()//sky six repeat
fill(217, 244, 255)
ellipse(20,200,60,60)
ellipse(220,200,60,60)
ellipse(50,210,45,45)
ellipse(90,210,50,50)
ellipse(135,215,70,70)
ellipse(175,190,45,45)
ellipse(150,185,20,20)
ellipse(67,197,10,10)
ellipse(110,190,30,35)
ellipse(125,173,7,7)
ellipse(132,176,4,4)
ellipse(50,183,5,5)


fill(cloudColor)
noStroke()
  ellipse(100,110,30,20)//cloud one
ellipse(120,97,40,50)
ellipse(155,106,60,35)
ellipse(184,113,17,12)
ellipse(135,117,15,10)
ellipse(142,87,10,10)

ellipse(40,165,40,20)//cloudtwo
ellipse(60,155,35,40)
ellipse(40,153,12,12)
ellipse(80,160,55,30)

ellipse(60,35,30,25)//cloudthree
ellipse(45,40,15,13)
ellipse(75,40,27,13)
ellipse(77,33,7,7)

ellipse(180,180,20,15)//cloudfour
ellipse(190,170,25,30)
ellipse(200,175,30,20)

ellipse(0,175,30,20)//cloudfour repeat
ellipse(-10,170,25,30)

ellipse(160,52,15,20)//cloudfive
ellipse(167,54,12,12)
ellipse(157,56,25,10)
ellipse(155,52,10,10)

ellipse(30,72,15,20)//cloudfive copy one
ellipse(37,74,12,12)
ellipse(27,76,25,10)
ellipse(25,72,10,10)

ellipse(140,152,15,20)//cloud five copy two
ellipse(147,154,12,12)
ellipse(137,156,25,10)
ellipse(135,152,10,10)

}
