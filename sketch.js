var gamestate = 1

var badguy
var wall8
var case1

var stage
var hitbox

var fans
var motherboard
var screw

var count,count2,count3,count4,count5,count6,count7,count8,count9,count10,count11,count12,count13,count14,count15 

function preload(){
caseIMG = loadImage("case11.png");
caseFan = loadImage("stage2.png");
caseboard = loadImage("motherboardw.png")
box = loadImage("hitbox.png");
  death = loadImage("YouSuck.png")
greenthing= loadImage("motherboard.png");
reset= loadImage("reset1.png");

screwm1 = loadImage("screw1.png");
screwm2 = loadImage("screw2.png");
screwm3 = loadImage("screw3.png");
screwm4 = loadImage("screw4.png");
screwm5 = loadImage("screw5.png");
screwm6 = loadImage("screw6.png");
screwm7 = loadImage("screw7.png");
screwm8 = loadImage("screw8.png");

cpu = loadImage("cpu.png");

lithium = loadImage("lithium_cell.png");

heatsink = loadImage("heatsinks.png");

screwm9 = loadImage("screw9.png");

ram = loadImage("ram.png");

hdd = loadImage("hdd.png");

panel = loadImage("panel.png");

metal = loadImage("metal.png");

cd = loadImage("optical.png");

psu = loadImage("psu.png");

wires = loadImage("wires.png");

lid = loadImage("lid.png");

//after case
screws = loadImage("screw.png");
cpul = loadImage("intel.png");
battery = loadImage("battery.png")
heatsink1 = loadImage("heatsink1.png");
heatsink2 = loadImage("heatsink2.png");
ramstick1 = loadImage("ramstick.png");
disc = loadImage("disc.png");
powersupply = loadImage("power_supply.png");
hd = loadImage("hdd1.png");





}

function setup() {
  createCanvas(windowWidth,windowHeight)

  count = 5
  count2 = 5
  count3 = 5
  count4 = 5
  count5 = 5
  count6 = 5
  count7 = 5
  count8 = 5
  count9 = 5
  count10 = 5
  count11 = 5
  count12 = 5
  count13 = 5
  count14 = 5
  count15 = 5
  count16 = 5
  count17 = 5
  count18 = 5
  count19 = 5
  count20 = 5
  count21 = 5
  count22 = 5
  

  stage = 0
  fans = 1
  motherboard = 0
  screw = 0

  cpu1 = 0
  cell = 0
  heatsinks = 0

  ramstick = 0
  harddrive = 0
  

  opticaldiscdrive = 0
  psus = 0

player = createSprite(200,200,50,50)
player.shapeColor=("darkblue"); 
  
  wall = createSprite(400,100,200,50)
wall.shapeColor=("grey"); 
  
  wall2 = createSprite(400,300,200,50)
wall2.shapeColor=("grey"); 
  
    wall3 = createSprite(500,375,50,200)
wall3.shapeColor=("grey"); 
  
    wall4 = createSprite(500,-375,50,1000)
wall4.shapeColor=("grey"); 

      wall5 = createSprite(700,650,50,1450)
wall5.shapeColor=("grey");
  
        wall6 = createSprite(600,450,200,50)
wall6.shapeColor=("grey");
  
       wall7 = createSprite(800,-250,250,50)
wall7.shapeColor=("grey");
  
  wall8 = createSprite(700,-575,50,600)
wall8.shapeColor=("grey");
  
      wall9 = createSprite(600,-850,200,50)
wall9.shapeColor=("grey");
  
  
       wall10 = createSprite(1600,-50,1350,50)
wall10.shapeColor=("grey");
  
       wall11 = createSprite(900,200,50,550)
wall11.shapeColor=("grey");
  
         wall12 = createSprite(1100,-700,50,950)
wall12.shapeColor=("grey");
  
      wall13 = createSprite(900,-400,50,350)
wall13.shapeColor=("grey");
  
       wall14 = createSprite(900,-750,400,50)
wall14.shapeColor=("grey");
  
  
      wall15 = createSprite(700,675,50,550)
wall15.shapeColor=("grey");
  
  
      wall16 = createSprite(1000,950,550,50)
wall16.shapeColor=("grey");
  
   wall17 = createSprite(1500,850,50,1800)
wall17.shapeColor=("grey");
  
  
  wall18 = createSprite(1300,-800,50,1150)
wall18.shapeColor=("grey");
  
   wall19 = createSprite(1200,-1150,200,50)
wall19.shapeColor=("grey");
  
  wall20 = createSprite(1000,1150,550,50)
wall20.shapeColor=("grey");
  
  wall21 = createSprite(1000,1350,550,50)
wall21.shapeColor=("grey");
  
   wall22 = createSprite(1250,1550,50,400)
wall22.shapeColor=("grey");
  
  wall23 = createSprite(1375,1750,200,50)
wall23.shapeColor=("grey");
//
wall24 = createSprite(1500,-1100,50,1750)
wall24.shapeColor=("grey");

wall25 = createSprite(1700,-1100,50,1750)
wall25.shapeColor=("grey");

wall26 = createSprite(1100,-1600,800,50)
wall26.shapeColor=("grey");

wall27 = createSprite(800,-1400,550,50)
wall27.shapeColor=("grey");

wall28 = createSprite(550,-2100,50,1350)
wall28.shapeColor=("grey");

wall29 = createSprite(1312.5,-2000,1225,50)
wall29.shapeColor=("grey");

wall30 = createSprite(1400,-2200,1400,50)
wall30.shapeColor=("grey");

wall31 = createSprite(1200,-2400,1000,50)
wall31.shapeColor=("grey");

wall32 = createSprite(1200,-2600,1000,50)
wall32.shapeColor=("grey");

wall33 = createSprite(1900,-1100,50,1750)
wall33.shapeColor=("grey");

wall34 = createSprite(2100,-1300,50,1750)
wall34.shapeColor=("grey");

wall35 = createSprite(2000,-450,150,50)
wall35.shapeColor=("purple");

wall36 = createSprite(1675,-2400,50,400)
wall36.shapeColor=("grey");

wall37 = createSprite(725,-2700,50,200)
wall37.shapeColor=("grey");

wall38 = createSprite(637.5,-2800,225,50)
wall38.shapeColor=("grey");

wall39 = createSprite(1100,-1150,400,50)
wall39.shapeColor=("grey");

wall39 = createSprite(925,-1275,50,200)
wall39.shapeColor=("grey");

wall40 = createSprite(2200,-250,600,50)
wall40.shapeColor=("grey");

wall41 = createSprite(2475,-50,50,400)
wall41.shapeColor=("grey");

wall42 = createSprite(2375,125,200,50)
wall42.shapeColor=("grey");

wall43 = createSprite(2250,500,50,800)
wall43.shapeColor=("grey");

wall44 = createSprite(1900,875,750,50)
wall44.shapeColor=("grey");

//after portal

wall45 = createSprite(3900,200,50,200)
wall45.shapeColor=("purple");

wall46 = createSprite(3875,200,50,2000)
wall46.shapeColor=("grey");

wall47 = createSprite(5875,200,50,2000)
wall47.shapeColor=("grey");

wall48 = createSprite(4875,-800,2000,50)
wall48.shapeColor=("grey");

wall49 = createSprite(4875,1200,2000,50)
wall49.shapeColor=("grey");



  
  
   motherboard1 = createSprite(1200,-1050,100,50)
motherboard1.shapeColor=("grey");
  motherboard1.addImage("play",greenthing)
  motherboard1.scale = 0.25

  screwl1 = createSprite(1200,600,100,50)
  screwl1.shapeColor=("grey");
  screwl1.addImage("play",screws)
  screwl1.scale = 0.25

  screwl2 = createSprite(1100,400,100,50)
  screwl2.shapeColor=("grey");
  screwl2.addImage("play",screws)
  screwl2.scale = 0.25

  screwl3 = createSprite(1300,800,100,50)
  screwl3.shapeColor=("grey");
  screwl3.addImage("play",screws)
  screwl3.scale = 0.25

  screwl4 = createSprite(1000,300,100,50)
  screwl4.shapeColor=("grey");
  screwl4.addImage("play",screws)
  screwl4.scale = 0.25

  screwl5 = createSprite(1300,100,100,50)
  screwl5.shapeColor=("grey");
  screwl5.addImage("play",screws)
  screwl5.scale = 0.25

  screwl6 = createSprite(1200,50,100,50)
  screwl6.shapeColor=("grey");
  screwl6.addImage("play",screws)
  screwl6.scale = 0.25

  screwl7 = createSprite(1200,800,100,50)
  screwl7.shapeColor=("grey");
  screwl7.addImage("play",screws)
  screwl7.scale = 0.25

  screwl8 = createSprite(1250,350,100,50)
  screwl8.shapeColor=("grey");
  screwl8.addImage("play",screws)
  screwl8.scale = 0.25

  screwl9 = createSprite(1050,750,100,50)
  screwl9.shapeColor=("grey");
  screwl9.addImage("play",screws)
  screwl9.scale = 0.25

  screwl10 = createSprite(1300,200,100,50)
  screwl10.shapeColor=("grey");
  screwl10.addImage("play",screws)
  screwl10.scale = 0.25

  screwl11 = createSprite(950,100,100,50)
  screwl11.shapeColor=("grey");
  screwl11.addImage("play",screws)
  screwl11.scale = 0.25

  screwl12 = createSprite(1000,250,100,50)
  screwl12.shapeColor=("grey");
  screwl12.addImage("play",screws)
  screwl12.scale = 0.25
  
  prossessor = createSprite(800,1050,100,50)
  prossessor.shapeColor=("grey");
  prossessor.addImage("play",cpul)
  prossessor.scale = 0.25

  battery1 = createSprite(1575,-2500,100,50)
  battery1.shapeColor=("grey");
  battery1.addImage("play",battery)
  battery1.scale = 0.25

  heatsinks1 = createSprite(1375,-1700,100,50)
  heatsinks1.shapeColor=("grey");
  heatsinks1.addImage("play",heatsink1)
  heatsinks1.scale = 0.25

  heatsinks2 = createSprite(1300,-1900,100,50)
  heatsinks2.shapeColor=("grey");
  heatsinks2.addImage("play",heatsink2)
  heatsinks2.scale = 0.25

  ramsticks1 = createSprite(1700,750,100,50)
  ramsticks1.shapeColor=("grey");
  ramsticks1.addImage("play",ramstick1)
  ramsticks1.scale = 0.25

  ramsticks2 = createSprite(2150,600,100,50)
  ramsticks2.shapeColor=("grey");
  ramsticks2.addImage("play",ramstick1)
  ramsticks2.scale = 0.25

  ramsticks3 = createSprite(1900,450,100,50)
  ramsticks3.shapeColor=("grey");
  ramsticks3.addImage("play",ramstick1)
  ramsticks3.scale = 0.25

  ramsticks4 = createSprite(1600,100,100,50)
  ramsticks4.shapeColor=("grey");
  ramsticks4.addImage("play",ramstick1)
  ramsticks4.scale = 0.25

  storage = createSprite(5500,850,100,50)
  storage.shapeColor=("grey");
  storage.addImage("play",hd)
  storage.scale = 0.25

  disc1 = createSprite(4500,-600,100,50)
  disc1.shapeColor=("grey");
  disc1.addImage("play",disc)
  disc1.scale = 0.25

  power = createSprite(4200,1000,100,50)
  power.shapeColor=("grey");
  power.addImage("play",powersupply)
  power.scale = 0.25
  
        badguy = createSprite(600,-350,10,10)
badguy.shapeColor=("red");
  
        badguy1 = createSprite(600,-500,10,10)
badguy1.shapeColor=("red");
  
         badguy2 = createSprite(900,-350,10,10)
badguy2.shapeColor=("red");
  
        badguy3 = createSprite(900,-500,10,10)
badguy3.shapeColor=("red");
  
          badguy4 = createSprite(700,-350,10,10)
badguy4.shapeColor=("red");
  
        badguy5 = createSprite(700,-500,10,10)
badguy5.shapeColor=("red");
  
badguy6 = createSprite(1200,-350,10,10)
badguy6.shapeColor=("red");
  
        badguy7 = createSprite(1200,-500,10,10)
badguy7.shapeColor=("red");
  
  badguy8 = createSprite(1200,-650,10,10)
badguy8.shapeColor=("red");
  
        badguy9 = createSprite(1200,-800,10,10)
badguy9.shapeColor=("red");

//
badguy10 = createSprite(1400,-350,10,10)
badguy10.shapeColor=("red");
  
        badguy11 = createSprite(1400,-500,10,10)
badguy11.shapeColor=("red");
  
  badguy12 = createSprite(1400,-650,10,10)
badguy12.shapeColor=("red");
  
        badguy13 = createSprite(1400,-800,10,10)
badguy13.shapeColor=("red");

badguy14 = createSprite(1400,-950,10,10)
badguy14.shapeColor=("red");
  
        badguy15 = createSprite(1400,-1100,10,10)
badguy15.shapeColor=("red");
//
badguy16 = createSprite(1600,-350,10,10)
badguy16.shapeColor=("red");
  
        badguy17 = createSprite(1600,-500,10,10)
badguy17.shapeColor=("red");
  
  badguy18 = createSprite(1600,-650,10,10)
badguy18.shapeColor=("red");
  
        badguy19 = createSprite(1600,-800,10,10)
badguy19.shapeColor=("red");

badguy20 = createSprite(1600,-950,10,10)
badguy20.shapeColor=("red");
  
        badguy21 = createSprite(1600,-1100,10,10)
badguy21.shapeColor=("red");

badguy22 = createSprite(1600,-1250,10,10)
badguy22.shapeColor=("red");
  
        badguy23 = createSprite(1600,-1400,10,10)
badguy23.shapeColor=("red");

badguy24 = createSprite(1600,-1550,10,10)
badguy24.shapeColor=("red");
  
        badguy25 = createSprite(1600,-1700,10,10)
badguy25.shapeColor=("red");
//
badguy26 = createSprite(1800,-350,10,10)
badguy26.shapeColor=("red");
  
        badguy27 = createSprite(1800,-500,10,10)
badguy27.shapeColor=("red");
  
  badguy28 = createSprite(1800,-650,10,10)
badguy28.shapeColor=("red");
  
        badguy29 = createSprite(1800,-800,10,10)
badguy29.shapeColor=("red");

badguy30 = createSprite(1800,-950,10,10)
badguy30.shapeColor=("red");
  
        badguy31 = createSprite(1800,-1100,10,10)
badguy31.shapeColor=("red");

badguy32 = createSprite(1800,-1250,10,10)
badguy32.shapeColor=("red");
  
        badguy33 = createSprite(1800,-1400,10,10)
badguy33.shapeColor=("red");

badguy34 = createSprite(1800,-1550,10,10)
badguy34.shapeColor=("red");
  
        badguy35 = createSprite(1800,-1700,10,10)
badguy35.shapeColor=("red");

//

badguy36 = createSprite(2000,-950,10,10)
badguy36.shapeColor=("red");
  
        badguy37 = createSprite(2000,-1100,10,10)
badguy37.shapeColor=("red");

badguy38 = createSprite(2000,-1250,10,10)
badguy38.shapeColor=("red");
  
        badguy39 = createSprite(2000,-1400,10,10)
badguy39.shapeColor=("red");

badguy40 = createSprite(2000,-1550,10,10)
badguy40.shapeColor=("red");
  
        badguy41 = createSprite(2000,-1700,10,10)
badguy41.shapeColor=("red");
  
  
  
        bigbadguy = createSprite(1000,50,50,50)
bigbadguy.shapeColor=("red");

bigbadguy2 = createSprite(1375,-1650,50,50)
bigbadguy2.shapeColor=("red");

bigbadguy3 = createSprite(2150,800,50,50)
bigbadguy3.shapeColor=("red");

bigbadguy4 = createSprite(4150,-550,50,50)
bigbadguy4.shapeColor=("red");

bigbadguy5 = createSprite(4500,400,50,50)
bigbadguy5.shapeColor=("red");
  
  deathmessage = createSprite(1000,50,50,50)
deathmessage.shapeColor=("red");
deathmessage.addImage("die",death)
deathmessage.scale = 0.03
  


   camera.x=200
  camera.y=200
  camera.zoom = 3.5
  
 badguy.velocityX=10
  badguy1.velocityX=10
  
  badguy2.velocityX=10
  badguy3.velocityX=10
  
    badguy4.velocityX=10
  badguy5.velocityX=10
  
  badguy6.velocityX=10
  badguy7.velocityX=10
  
  badguy8.velocityX=10
  badguy9.velocityX=10

  badguy10.velocityX=10
  badguy11.velocityX=10
  
  badguy12.velocityX=10
  badguy13.velocityX=10
  
  badguy14.velocityX=10
  badguy15.velocityX=10

  badguy16.velocityX=10
  badguy17.velocityX=10
  
  badguy18.velocityX=10
  badguy19.velocityX=10

  badguy20.velocityX=10
  badguy21.velocityX=10
  
  badguy22.velocityX=10
  badguy23.velocityX=10
  
  badguy24.velocityX=10
  badguy25.velocityX=10

  badguy26.velocityX=10
  badguy27.velocityX=10
  
  badguy28.velocityX=10
  badguy29.velocityX=10

  badguy30.velocityX=10
  badguy31.velocityX=10
  
  badguy32.velocityX=10
  badguy33.velocityX=10
  
  badguy34.velocityX=10
  badguy35.velocityX=10

  badguy36.velocityX=10
  badguy37.velocityX=10
  
  badguy38.velocityX=10
  badguy39.velocityX=10
  
  badguy40.velocityX=10
  badguy41.velocityX=10
  
  case1 = createSprite(-1000,200,100,100)
case1.shapeColor=("lightgrey");
 // caseIMG = loadImage("case1.png");
  case1.addImage("play",caseIMG)
  case1.scale=0.25

  case2 = createSprite(-1000,800,100,100)
  case2.shapeColor=("lightgrey");
   // caseIMG = loadImage("case1.png");
    case2.addImage("2",caseFan)
    case2.scale=0.25

    case3 = createSprite(-1000,800,100,100)
  case3.shapeColor=("lightgrey");
   // caseIMG = loadImage("case1.png");
    case3.addImage("2",caseboard)
    case3.scale=0.25

    case4 = createSprite(-1000,800,100,100)
    case4.shapeColor=("lightgrey");
     // caseIMG = loadImage("case1.png");
      case4.addImage("2",screwm1)
      case4.scale=0.25

      case5 = createSprite(-1000,800,100,100)
    case5.shapeColor=("lightgrey");
     // caseIMG = loadImage("case1.png");
      case5.addImage("2",screwm2)
      case5.scale=0.25

      case6 = createSprite(-1000,800,100,100)
      case6.shapeColor=("lightgrey");
       // caseIMG = loadImage("case1.png");
        case6.addImage("2",screwm3)
        case6.scale=0.25

        case7 = createSprite(-1000,800,100,100)
        case7.shapeColor=("lightgrey");
         // caseIMG = loadImage("case1.png");
          case7.addImage("2",screwm4)
          case7.scale=0.25

          case8 = createSprite(-1000,800,100,100)
          case8.shapeColor=("lightgrey");
           // caseIMG = loadImage("case1.png");
            case8.addImage("2",screwm5)
            case8.scale=0.25

            case9 = createSprite(-1000,800,100,100)
            case9.shapeColor=("lightgrey");
             // caseIMG = loadImage("case1.png");
              case9.addImage("2",screwm6)
              case9.scale=0.25
  
  
          case10 = createSprite(-1000,800,100,100)
          case10.shapeColor=("lightgrey");
           // caseIMG = loadImage("case1.png");
            case10.addImage("2",screwm7)
            case10.scale=0.25

            case11 = createSprite(-1000,800,100,100)
            case11.shapeColor=("lightgrey");
             // caseIMG = loadImage("case1.png");
              case11.addImage("2",screwm8)
              case11.scale=0.25

              //after screw 8

              case12 = createSprite(-1000,800,100,100)
              case12.shapeColor=("lightgrey");
               // caseIMG = loadImage("case1.png");
                case12.addImage("2",cpu)
                case12.scale=0.25

                case13 = createSprite(-1000,800,100,100)
              case13.shapeColor=("lightgrey");
               // caseIMG = loadImage("case1.png");
                case13.addImage("2",lithium)
                case13.scale=0.25

                case14 = createSprite(-1000,800,100,100)
              case14.shapeColor=("lightgrey");
               // caseIMG = loadImage("case1.png");
                case14.addImage("2",heatsink)
                case14.scale=0.25

                case15 = createSprite(-1000,800,100,100)
              case15.shapeColor=("lightgrey");
               // caseIMG = loadImage("case1.png");
                case15.addImage("2",screwm9)
                case15.scale=0.25

                case16 = createSprite(-1000,800,100,100)
              case16.shapeColor=("lightgrey");
               // caseIMG = loadImage("case1.png");
                case16.addImage("2",ram)
                case16.scale=0.25

                case17 = createSprite(-1000,800,100,100)
              case17.shapeColor=("lightgrey");
               // caseIMG = loadImage("case1.png");
                case17.addImage("2",hdd)
                case17.scale=0.25

                case18 = createSprite(-1000,800,100,100)
                case18.shapeColor=("lightgrey");
                 // caseIMG = loadImage("case1.png");
                  case18.addImage("2",panel)
                  case18.scale=0.25

                  case19 = createSprite(-1000,800,100,100)
                  case19.shapeColor=("lightgrey");
                   // caseIMG = loadImage("case1.png");
                    case19.addImage("2",metal)
                    case19.scale=0.25

                    case20 = createSprite(-1000,800,100,100)
                    case20.shapeColor=("lightgrey");
                     // caseIMG = loadImage("case1.png");
                      case20.addImage("2",cd)
                      case20.scale=0.25

                      case21 = createSprite(-1000,800,100,100)
                      case21.shapeColor=("lightgrey");
                       // caseIMG = loadImage("case1.png");
                        case21.addImage("2",psu)
                        case21.scale=0.25

                        case22 = createSprite(-1000,800,100,100)
                        case22.shapeColor=("lightgrey");
                         // caseIMG = loadImage("case1.png");
                          case22.addImage("2",wires)
                          case22.scale=0.25

                          case23 = createSprite(-1000,800,100,100)
                        case23.shapeColor=("lightgrey");
                         // caseIMG = loadImage("case1.png");
                          case23.addImage("2",lid)
                          case23.scale=0.25

//hitbox = createSprite(-940,165,20,50)
//hitbox.shapeColor=("lightgrey");
// caseIMG = loadImage("case1.png");
 //hitbox.addImage("2",box)
 //hitbox.scale=0.15
 retry=createSprite(0,0,50,50)
 retry.addImage("die", reset)
 retry.scale=0.1
}
//cyan = "rgb(125,350,750)"
function draw() {
 background(0,255, 255 );
//case2.visible = false
 // case1.scale=0.075
  
  
  
  
  
  //text(player.x,player.x,player.y-50)
 //  text(player.y,player.x+50,player.y-50)
 
  
 
  
  if(keyDown("enter") && gamestate === 1){
    gamestate=2
    player.x=-1000
    player.y=200
    player.visible =false
  }
  player.collide(wall)
  
  player.collide(wall2)
  
  player.collide(wall3)
  
  player.collide(wall4)
  
  player.collide(wall5)
  
  player.collide(wall6)
  
  player.collide(wall7)
  
  player.collide(wall8)
  
  player.collide(wall9)
  
   player.collide(wall10)
  
  player.collide(wall12)
  
  player.collide(wall13)
  
  player.collide(wall14)
  
  player.collide(wall15)
  
  player.collide(wall16)
  
  player.collide(wall17)
  
  player.collide(wall11)

  player.collide(wall18)
  
  player.collide(wall19)
  
  player.collide(wall20)
  
  player.collide(wall21)
  
  player.collide(wall22)

  player.collide(wall23)
  
  player.collide(wall24)
  
  player.collide(wall25)

  player.collide(wall26)
  
  player.collide(wall27)

  player.collide(wall28)
  
  player.collide(wall29)
  
  player.collide(wall30)

  player.collide(wall31)
  
  player.collide(wall32)

  player.collide(wall33)
  
  player.collide(wall34)

  //player.collide(wall35)
  
  player.collide(wall36)
  
  player.collide(wall37)

  player.collide(wall38)
  
  player.collide(wall39)

  player.collide(wall40)
  
  player.collide(wall41)
  
  player.collide(wall42)

  player.collide(wall43)
  
  player.collide(wall44)
  
  // player.collide(wall45)
  
  player.collide(wall46)
  
  player.collide(wall47)

  player.collide(wall48)
  
  player.collide(wall49)
  
  //ai1

   bigbadguy.collide(wall)
  
  bigbadguy.collide(wall2)
  
  bigbadguy.collide(wall3)
  
  bigbadguy.collide(wall4)
  
  bigbadguy.collide(wall5)
  
  bigbadguy.collide(wall6)
  
  bigbadguy.collide(wall7)
  
  bigbadguy.collide(wall8)
  
  bigbadguy.collide(wall9)
  
   bigbadguy.collide(wall10)
  
  bigbadguy.collide(wall12)
  
  bigbadguy.collide(wall13)
  
  bigbadguy.collide(wall14)
  
  bigbadguy.collide(wall15)
  
  bigbadguy.collide(wall16)
  
  bigbadguy.collide(wall17)
  
  bigbadguy.collide(wall11)

  bigbadguy.collide(wall18)
  
  bigbadguy.collide(wall19)
  
  bigbadguy.collide(wall20)
  
  bigbadguy.collide(wall21)
  
  bigbadguy.collide(wall22)
  
  bigbadguy.collide(wall23)
  
  bigbadguy.collide(wall24)
  
  bigbadguy.collide(wall25)
  
  bigbadguy.collide(wall26)
  
  bigbadguy.collide(wall27)
  
  bigbadguy.collide(wall28)
  
  bigbadguy.collide(wall29)
  
  bigbadguy.collide(wall30)
  
  bigbadguy.collide(wall31)

  bigbadguy.collide(wall32)
  
  bigbadguy.collide(wall33)
  
  bigbadguy.collide(wall34)
  
  bigbadguy.collide(wall35)
  
  bigbadguy.collide(wall36)
  
  bigbadguy.collide(wall37)
  
  bigbadguy.collide(wall38)

  bigbadguy.collide(wall39)

  //ai2

   
  bigbadguy2.collide(wall)
  
  bigbadguy2.collide(wall2)
  
  bigbadguy2.collide(wall3)
  
  bigbadguy2.collide(wall4)
  
  bigbadguy2.collide(wall5)
  
  bigbadguy2.collide(wall6)
  
  bigbadguy2.collide(wall7)
  
  bigbadguy2.collide(wall8)
  
  bigbadguy2.collide(wall9)
  
   bigbadguy2.collide(wall10)
  
  bigbadguy2.collide(wall12)
  
  bigbadguy2.collide(wall13)
  
  bigbadguy2.collide(wall14)
  
  bigbadguy2.collide(wall15)
  
  bigbadguy2.collide(wall16)
  
  bigbadguy2.collide(wall17)
  
  bigbadguy2.collide(wall11)

  bigbadguy2.collide(wall18)
  
  bigbadguy2.collide(wall19)
  
  bigbadguy2.collide(wall20)
  
  bigbadguy2.collide(wall21)
  
  bigbadguy2.collide(wall22)
  
  bigbadguy2.collide(wall23)
  
  bigbadguy2.collide(wall24)
  
  bigbadguy2.collide(wall25)
  
  bigbadguy2.collide(wall26)
  
  bigbadguy2.collide(wall27)
  
  bigbadguy2.collide(wall28)
  
  bigbadguy2.collide(wall29)
  
  bigbadguy2.collide(wall30)
  
  bigbadguy2.collide(wall31)

  bigbadguy2.collide(wall32)
  
  bigbadguy2.collide(wall33)
  
  bigbadguy2.collide(wall34)
  
  bigbadguy2.collide(wall35)
  
  bigbadguy2.collide(wall36)
  
  bigbadguy2.collide(wall37)
  
  bigbadguy2.collide(wall38)

  bigbadguy2.collide(wall39)

  //

  bigbadguy3.collide(wall)

  bigbadguy3.collide(wall2)
  
  bigbadguy3.collide(wall3)
  
  bigbadguy3.collide(wall4)
  
  bigbadguy3.collide(wall5)
  
  bigbadguy3.collide(wall6)
  
  bigbadguy3.collide(wall7)
  
  bigbadguy3.collide(wall8)
  
  bigbadguy3.collide(wall9)
  
   bigbadguy3.collide(wall10)
  
  bigbadguy3.collide(wall12)
  
  bigbadguy3.collide(wall13)
  
  bigbadguy3.collide(wall14)
  
  bigbadguy3.collide(wall15)
  
  bigbadguy3.collide(wall16)
  
  bigbadguy3.collide(wall17)
  
  bigbadguy3.collide(wall11)

  bigbadguy3.collide(wall18)
  
  bigbadguy3.collide(wall19)
  
  bigbadguy3.collide(wall20)
  
  bigbadguy3.collide(wall21)
  
  bigbadguy3.collide(wall22)
  
  bigbadguy3.collide(wall23)
  
  bigbadguy3.collide(wall24)
  
  bigbadguy3.collide(wall25)
  
  bigbadguy3.collide(wall26)
  
  bigbadguy3.collide(wall27)
  
  bigbadguy3.collide(wall28)
  
  bigbadguy3.collide(wall29)
  
  bigbadguy3.collide(wall30)
  
  bigbadguy3.collide(wall31)

  bigbadguy3.collide(wall32)
  
  bigbadguy3.collide(wall33)
  
  bigbadguy3.collide(wall34)
  
  bigbadguy3.collide(wall35)
  
  bigbadguy3.collide(wall36)
  
  bigbadguy3.collide(wall37)
  
  bigbadguy3.collide(wall38)

  bigbadguy3.collide(wall39)

  bigbadguy3.collide(wall40)
  
  bigbadguy3.collide(wall41)
  
  bigbadguy3.collide(wall42)
  
  bigbadguy3.collide(wall43)

  bigbadguy3.collide(wall44)


  bigbadguy4.collide(wall46)
  
  bigbadguy4.collide(wall47)
  
   bigbadguy4.collide(wall48)
  
  bigbadguy4.collide(wall49)

  bigbadguy5.collide(wall46)
  
  bigbadguy5.collide(wall47)
  
   bigbadguy5.collide(wall48)
  
  bigbadguy5.collide(wall49)

  bigbadguy5.collide(bigbadguy4)
  
  badguy.bounceOff(wall8)
    badguy.bounceOff(wall4)
    
    badguy1.bounceOff(wall8)
    badguy1.bounceOff(wall4)
  
   badguy2.bounceOff(wall12)
    badguy2.bounceOff(wall13)
  
   badguy3.bounceOff(wall12)
    badguy3.bounceOff(wall13)
  
    badguy4.bounceOff(wall8)
    badguy4.bounceOff(wall13)
  
   badguy5.bounceOff(wall8)
    badguy5.bounceOff(wall13)
  
  badguy6.bounceOff(wall18)
    badguy6.bounceOff(wall12)
  
   badguy7.bounceOff(wall18)
    badguy7.bounceOff(wall12)
  
  badguy8.bounceOff(wall18)
    badguy8.bounceOff(wall12)
  
   badguy9.bounceOff(wall18)
    badguy9.bounceOff(wall12)

    badguy10.bounceOff(wall18)
    badguy10.bounceOff(wall24)
  
  badguy11.bounceOff(wall18)
    badguy11.bounceOff(wall24)
  
   badguy12.bounceOff(wall18)
    badguy12.bounceOff(wall24)

    badguy13.bounceOff(wall18)
    badguy13.bounceOff(wall24)
  
  badguy14.bounceOff(wall18)
    badguy14.bounceOff(wall24)
  
   badguy15.bounceOff(wall18)
    badguy15.bounceOff(wall24)

    //
    badguy16.bounceOff(wall25)
    badguy16.bounceOff(wall24)
  
   badguy17.bounceOff(wall25)
    badguy17.bounceOff(wall24)
  
  badguy18.bounceOff(wall25)
    badguy18.bounceOff(wall24)
  
   badguy19.bounceOff(wall25)
    badguy19.bounceOff(wall24)

    badguy20.bounceOff(wall25)
    badguy20.bounceOff(wall24)
  
  badguy21.bounceOff(wall25)
    badguy21.bounceOff(wall24)
  
   badguy22.bounceOff(wall25)
    badguy22.bounceOff(wall24)

    badguy23.bounceOff(wall25)
    badguy23.bounceOff(wall24)
  
  badguy24.bounceOff(wall25)
    badguy24.bounceOff(wall24)
  
   badguy25.bounceOff(wall25)
    badguy25.bounceOff(wall24)
    //
    badguy26.bounceOff(wall25)
    badguy26.bounceOff(wall33)
  
   badguy27.bounceOff(wall25)
    badguy27.bounceOff(wall33)
  
  badguy28.bounceOff(wall25)
    badguy28.bounceOff(wall33)
  
   badguy29.bounceOff(wall25)
    badguy29.bounceOff(wall33)

    badguy30.bounceOff(wall25)
    badguy30.bounceOff(wall33)
  
  badguy31.bounceOff(wall25)
    badguy31.bounceOff(wall33)
  
   badguy32.bounceOff(wall25)
    badguy32.bounceOff(wall33)

    badguy33.bounceOff(wall25)
    badguy33.bounceOff(wall33)
  
  badguy34.bounceOff(wall25)
    badguy34.bounceOff(wall33)
  
   badguy35.bounceOff(wall25)
    badguy35.bounceOff(wall33)

    badguy36.bounceOff(wall34)
    badguy36.bounceOff(wall33)
  
  badguy37.bounceOff(wall34)
    badguy37.bounceOff(wall33)
  
   badguy38.bounceOff(wall34)
    badguy38.bounceOff(wall33)

    badguy39.bounceOff(wall34)
    badguy39.bounceOff(wall33)
  
  badguy40.bounceOff(wall34)
    badguy40.bounceOff(wall33)
  
   badguy41.bounceOff(wall34)
    badguy41.bounceOff(wall33)
    
  
    if(player.isTouching(wall35)){
      player.x = 4000
      player.y = 200
    }

    if(player.isTouching(wall45)){
      player.x = 2000
      player.y = -550
    }
  
  if(player.isTouching(badguy) || player.isTouching(badguy2) || player.isTouching(badguy3) || player.isTouching(badguy4) || player.isTouching(badguy5) || player.isTouching(bigbadguy) || player.isTouching(bigbadguy2) || player.isTouching(badguy6) || player.isTouching(badguy7) || player.isTouching(badguy8) || player.isTouching(badguy9) || player.isTouching(bigbadguy3)){
    gamestate=0
  }
  
  if(player.isTouching(badguy1) || player.isTouching(badguy10)  || player.isTouching(badguy11)  || player.isTouching(badguy12)  || player.isTouching(badguy13)  || player.isTouching(badguy14)  || player.isTouching(badguy15)  || player.isTouching(badguy16)  || player.isTouching(badguy17)  || player.isTouching(badguy18)  || player.isTouching(badguy19)  || player.isTouching(badguy20)  || player.isTouching(badguy21)  || player.isTouching(badguy22)  || player.isTouching(badguy23)  || player.isTouching(badguy24)  || player.isTouching(badguy25)  || player.isTouching(badguy26)  || player.isTouching(badguy27)  || player.isTouching(badguy28)  || player.isTouching(badguy29)  || player.isTouching(badguy30)   || player.isTouching(badguy31)   || player.isTouching(badguy32)   || player.isTouching(badguy33)   || player.isTouching(badguy34)   || player.isTouching(badguy35)   || player.isTouching(badguy36)   || player.isTouching(badguy37)   || player.isTouching(badguy38)   || player.isTouching(badguy39)   || player.isTouching(badguy41) || player.isTouching(badguy40) ){
    gamestate=0
  }
  
    if(player.isTouching(bigbadguy) || player.isTouching(bigbadguy2) || player.isTouching(bigbadguy3) || player.isTouching(bigbadguy4) || player.isTouching(bigbadguy5)){

if(player.isTouching(bigbadguy)){
   deathmessage.visible = true
   deathmessage.x = bigbadguy.x +40
  deathmessage.y=bigbadguy.y-20
}
if(player.isTouching(bigbadguy2)){
  deathmessage.visible = true
  deathmessage.x = bigbadguy2.x +40
 deathmessage.y=bigbadguy2.y-20
}

if(player.isTouching(bigbadguy3)){
  deathmessage.visible = true
  deathmessage.x = bigbadguy3.x +40
 deathmessage.y=bigbadguy3.y-20
}

if(player.isTouching(bigbadguy4)){
  deathmessage.visible = true
  deathmessage.x = bigbadguy4.x +40
 deathmessage.y=bigbadguy4.y-20
}

if(player.isTouching(bigbadguy5)){
  deathmessage.visible = true
  deathmessage.x = bigbadguy5.x +40
 deathmessage.y=bigbadguy5.y-20
}

  }
  else{
     deathmessage.visible = false 
  }
  
   if(player.isTouching(motherboard1)){
   motherboard = 1
     motherboard1.destroy()
  }

  if(player.isTouching(screwl1)){
    screw += 1
      screwl1.destroy()
   }

   if(player.isTouching(screwl2)){
    screw += 1
      screwl2.destroy()
   }

   if(player.isTouching(screwl3)){
    screw += 1
      screwl3.destroy()
   }

   if(player.isTouching(screwl4)){
    screw += 1
      screwl4.destroy()
   }

   if(player.isTouching(screwl5)){
    screw += 1
      screwl5.destroy()
   }

   if(player.isTouching(screwl6)){
    screw += 1
      screwl6.destroy()
   }

   if(player.isTouching(screwl7)){
    screw += 1
      screwl7.destroy()
   }

   if(player.isTouching(screwl8)){
    screw += 1
      screwl8.destroy()
   }

   if(player.isTouching(screwl9)){
    screw += 1
      screwl9.destroy()
   }

   if(player.isTouching(screwl10)){
    screw += 1
      screwl10.destroy()
   }

   if(player.isTouching(screwl11)){
    screw += 1
      screwl11.destroy()
   }

   if(player.isTouching(screwl12)){
    screw += 1
      screwl12.destroy()
   }

   if(player.isTouching(prossessor)){
    cpu1 = 1
      prossessor.destroy()
   }

   if(player.isTouching(battery1)){
    cell = 1
      battery1.destroy()
   }

   if(player.isTouching(heatsinks1)){
    heatsinks += 1
    heatsinks1.destroy()
   }

   if(player.isTouching(heatsinks2)){
    heatsinks += 1
    heatsinks2.destroy()
   }

   if(player.isTouching(ramsticks1)){
    ramstick += 1
    ramsticks1.destroy()
   }

   if(player.isTouching(ramsticks2)){
    ramstick += 1
    ramsticks2.destroy()
   }

   if(player.isTouching(ramsticks3)){
    ramstick += 1
    ramsticks3.destroy()
   }

   if(player.isTouching(ramsticks4)){
    ramstick += 1
    ramsticks4.destroy()
   }

   if(player.isTouching(storage)){
    harddrive = 1
    storage.destroy()
   }

   if(player.isTouching(disc1)){
    opticaldiscdrive = 1
    disc1.destroy()
   }

   if(player.isTouching(power)){
    psus = 1
    power.destroy()
   }

  
  
  
  camera.x = player.x
  camera.y = player.y
  
  
  if(gamestate===1){
  
     if(bigbadguy.x>player.x && bigbadguy.y > player.y - 25 && bigbadguy.y < player.y + 25){
    bigbadguy.velocityX=-10
      bigbadguy.velocityY=0
  }
  
   if(bigbadguy.y>player.y && bigbadguy.x > player.x - 25 && bigbadguy.x < player.x + 25){
    bigbadguy.velocityY=-10
     bigbadguy.velocityX=0
  }
  
   if(bigbadguy.x<player.x && bigbadguy.y > player.y - 25 && bigbadguy.y < player.y + 25){
    bigbadguy.velocityX=10
      bigbadguy.velocityY=0
  }
  
   if(bigbadguy.y<player.y && bigbadguy.x > player.x - 25 && bigbadguy.x < player.x + 25){
    bigbadguy.velocityY=10
     bigbadguy.velocityX=0
  }

//2

if(bigbadguy2.x>player.x && bigbadguy2.y > player.y - 25 && bigbadguy2.y < player.y + 25){
  bigbadguy2.velocityX=-10
    bigbadguy2.velocityY=0
}

 if(bigbadguy2.y>player.y && bigbadguy2.x > player.x - 25 && bigbadguy2.x < player.x + 25){
  bigbadguy2.velocityY=-10
   bigbadguy2.velocityX=0
}

 if(bigbadguy2.x<player.x && bigbadguy2.y > player.y - 25 && bigbadguy2.y < player.y + 25){
  bigbadguy2.velocityX=10
    bigbadguy2.velocityY=0
}

 if(bigbadguy2.y<player.y && bigbadguy2.x > player.x - 25 && bigbadguy2.x < player.x + 25){
  bigbadguy2.velocityY=10
   bigbadguy2.velocityX=0
}

//3

if(bigbadguy3.x>player.x && bigbadguy3.y > player.y - 25 && bigbadguy3.y < player.y + 25){
  bigbadguy3.velocityX=-10
    bigbadguy3.velocityY=0
}

 if(bigbadguy3.y>player.y && bigbadguy3.x > player.x - 25 && bigbadguy3.x < player.x + 25){
  bigbadguy3.velocityY=-10
   bigbadguy3.velocityX=0
}

 if(bigbadguy3.x<player.x && bigbadguy3.y > player.y - 25 && bigbadguy3.y < player.y + 25){
  bigbadguy3.velocityX=10
    bigbadguy3.velocityY=0
}

 if(bigbadguy3.y<player.y && bigbadguy3.x > player.x - 25 && bigbadguy3.x < player.x + 25){
  bigbadguy3.velocityY=10
   bigbadguy3.velocityX=0
}
//4
if(bigbadguy4.x>player.x && bigbadguy4.y > player.y - 25 && bigbadguy4.y < player.y + 25){
  bigbadguy4.velocityX=-10
    bigbadguy4.velocityY=0
}

 if(bigbadguy4.y>player.y && bigbadguy4.x > player.x - 25 && bigbadguy4.x < player.x + 25){
  bigbadguy4.velocityY=-10
   bigbadguy4.velocityX=0
}

 if(bigbadguy4.x<player.x && bigbadguy4.y > player.y - 25 && bigbadguy4.y < player.y + 25){
  bigbadguy4.velocityX=10
    bigbadguy4.velocityY=0
}

 if(bigbadguy4.y<player.y && bigbadguy4.x > player.x - 25 && bigbadguy4.x < player.x + 25){
  bigbadguy4.velocityY=10
   bigbadguy4.velocityX=0
}
//5
if(bigbadguy5.x>player.x && bigbadguy5.y > player.y - 25 && bigbadguy5.y < player.y + 25){
  bigbadguy5.velocityX=-10
    bigbadguy5.velocityY=0
}

 if(bigbadguy5.y>player.y && bigbadguy5.x > player.x - 25 && bigbadguy5.x < player.x + 25){
  bigbadguy5.velocityY=-10
   bigbadguy5.velocityX=0
}

 if(bigbadguy5.x<player.x && bigbadguy5.y > player.y - 25 && bigbadguy5.y < player.y + 25){
  bigbadguy5.velocityX=10
    bigbadguy5.velocityY=0
}

 if(bigbadguy5.y<player.y && bigbadguy5.x > player.x - 25 && bigbadguy5.x < player.x + 25){
  bigbadguy5.velocityY=10
   bigbadguy5.velocityX=0
}


  
  if(keyDown("right")){
    
    player.x = player.x+10
  }
  if(keyDown("left")){
    
    
    player.x = player.x-10
  }
  if(keyDown("up")){
    
    player.y = player.y-10
  }
  
  if(keyDown("down")){
    
    player.y = player.y+10
  }
    
     if(keyDown("a")){
    
   // camera = player.y+10
  }
    
      if(keyDown("s")){
    
  //  player.y = player.y+10
  }
    
    
  }
  
  textSize(7)
  if(gamestate===0){
    background(245,70, 75 );
   //text("press space to retry",player.x,player.y) 
   retry.visible=true
   retry.x=player.x
   retry.y=player.y
    if(keyDown("space")){
    
    gamestate = 1
    player.x = 200
      player.y = 200
      bigbadguy.x=1000
      bigbadguy.y=50
      bigbadguy2.x=1375
      bigbadguy2.y=-1650

      bigbadguy3.x=2150
      bigbadguy3.y=800
   //     camera.x = 200
   //   camera.y = 200
  }
     bigbadguy.velocityY=0
     bigbadguy.velocityX=0

     bigbadguy2.velocityY=0
     bigbadguy2.velocityX=0


     bigbadguy3.velocityY=0
     bigbadguy3.velocityX=0
  }
  else{
    retry.visible = false
  }
//________________

  if(mousePressedOver(case1) && stage=== 0){
   // case1.addImage("2",caseFan)
   // case1.visible=false
   // case2.visible=true
stage=1
fans = 0

    }

    if(stage === 0){
      
      textSize(7)
    text("The cooling fan is given to you for free. " ,-925 ,150)
      text("Attach it." ,-925 ,160)
      
      case2.visible=false
      case3.visible=false
      //hitbox.depth=1
      //hitbox.visible=false 
      
    
      }


  if(stage === 1){
count = count - 1
text("Find the motherboard and attach it." ,-925 ,150)
if(count<0){
    case1.visible=false
   case2.visible=true
   case2.y = 200
   //case3.visible=false
    //hitbox.depth=1
    //hitbox.visible=false
}    
  
    }


//stage1

if(mousePressedOver(case2) && stage=== 1 && motherboard >=1){
  // case1.addImage("2",caseFan)
  // case1.visible=false
  // case2.visible=true
stage=2
motherboard = 0
//fans = 0
   }



  


 if(stage === 2){
   //case1.visible=false
   count2 = count2 - 1
   text("Find 8 screws and attach them." ,-925 ,150)

if(count2<0){
  case2.visible=false
  case3.visible=true
  case3.y = 200
}
   //hitbox.depth=1
   //hitbox.visible=false
   
 
   }
//
   if(mousePressedOver(case3) && stage=== 2 && screw >=1){
    // case1.addImage("2",caseFan)
    // case1.visible=false
    // case2.visible=true
  stage=3
  screw -= 1
  //fans = 0
     }
  
     
  
    
  
  
   if(stage === 3){
     //case1.visible=false
     count3 = count3 - 1
text("Find 7 screws and attach them." ,-925 ,150)
if(count3<0){
    case3.visible=false
    case4.visible=true
    case4.y = 200
     //hitbox.depth=1
     //hitbox.visible=false
}
   
     }
//

//
if(mousePressedOver(case4) && stage=== 3 && screw >=1){
  // case1.addImage("2",caseFan)
  // case1.visible=false
  // case2.visible=true
stage=4
screw -= 1
//fans = 0
   }

   

  


 if(stage === 4){
   //case1.visible=false
   count4 = count4 - 1
text("Find 6 screws and attach them." ,-925 ,150)
if(count4<0){
  case4.visible=false
  case5.visible=true
  case5.y = 200
}
   //hitbox.depth=1
   //hitbox.visible=false
   
 
   }
//

//
if(mousePressedOver(case5) && stage=== 4 && screw >=1){
  // case1.addImage("2",caseFan)
  // case1.visible=false
  // case2.visible=true
stage=5
screw -= 1
//fans = 0
   }

   

  


 if(stage === 5){
   //case1.visible=false
   count5 = count5 - 1
text("Find 5 screws and attach them." ,-925 ,150)
if(count5<0){
  case5.visible=false
  case6.visible=true
  case6.y = 200
}
   //hitbox.depth=1
   //hitbox.visible=false
   
 
   }
//
  
  //
if(mousePressedOver(case6) && stage=== 5 && screw >=1){
  // case1.addImage("2",caseFan)
  // case1.visible=false
  // case2.visible=true
stage=6
screw -= 1
//fans = 0
   }

   

  


 if(stage === 6){
   //case1.visible=false
   count6 = count6 - 1
text("Find 4 screws and attach them." ,-925 ,150)
if(count6<0){
  case6.visible=false
  case7.visible=true
  case7.y = 200
}
   //hitbox.depth=1
   //hitbox.visible=false
   
 
   }
//

  
  //
if(mousePressedOver(case7) && stage=== 6 && screw >=1){
  // case1.addImage("2",caseFan)
  // case1.visible=false
  // case2.visible=true
stage=7
screw -= 1
//fans = 0
   }

   

  


 if(stage === 7){
   //case1.visible=false
   count7 = count7 - 1
text("Find 3 screws and attach them." ,-925 ,150)
if(count7<0){
  case7.visible=false
  case8.visible=true
  case8.y = 200
}
   //hitbox.depth=1
   //hitbox.visible=false
   
 
   }
//
  
    //
if(mousePressedOver(case8) && stage=== 7 && screw >=1){
  // case1.addImage("2",caseFan)
  // case1.visible=false
  // case2.visible=true
stage=8
screw -= 1
  
//fans = 0
   }

   

  


 if(stage === 8){
   //case1.visible=false
   count8 = count8 - 1
text("Find 2 screws and attach them." ,-925 ,150)
if(count8<0){
  case8.visible=false
  case9.visible=true
  case9.y = 200
}
   //hitbox.depth=1
   //hitbox.visible=false
   
 
   }
//
  
  //
      //
if(mousePressedOver(case9) && stage=== 8 && screw >=1){
  // case1.addImage("2",caseFan)
  // case1.visible=false
  // case2.visible=true
stage=9
screw -= 1
  
//fans = 0
   }

   

  


 if(stage === 9){
   //case1.visible=false
   count9 = count9 - 1
text("Find 1 screws and attach it." ,-925 ,150)
if(count9<0){
  case9.visible=false
  case10.visible=true
  case10.y = 200
}
   //hitbox.depth=1
   //hitbox.visible=false
   
 
   }
  //
  
        //
if(mousePressedOver(case10) && stage=== 9 && screw >=1){
  // case1.addImage("2",caseFan)
  // case1.visible=false
  // case2.visible=true
stage=10
screw -= 1
  
//fans = 0
   }

   

  


 if(stage === 10){
   //case1.visible=false
   count10 = count10 - 1
text("Find the cpu and attach it." ,-925 ,150)
if(count10<0){
  case10.visible=false
  case11.visible=true
  case11.y = 200
}
 
   }
  //
         //
if(mousePressedOver(case11) && stage=== 10 && cpu1 >=1){
  // case1.addImage("2",caseFan)
  // case1.visible=false
  // case2.visible=true
stage=11
cpu1 = 0
  
//fans = 0
   }

   

  


 if(stage === 11){
   //case1.visible=false
   count11 = count11 - 1
text("Find the lithium cell and attach it." ,-925 ,150)
if(count11<0){
  case11.visible=false
  case12.visible=true
  case12.y = 200
}
 
   }
  //

   //
if(mousePressedOver(case12) && stage=== 11 && cell >=1){
  // case1.addImage("2",caseFan)
  // case1.visible=false
  // case2.visible=true
stage=12
cell = 0
  
//fans = 0
   }

   

  


 if(stage === 12){
   //case1.visible=false
   count12 = count12 - 1
text("Find the 2 heatsinks and attach them." ,-925 ,150)
if(count12<0){
  case12.visible=false
  case13.visible=true
  case13.y = 200
}


 
   }
  //

     //
if(mousePressedOver(case13) && stage=== 12 && heatsinks >=2){
  // case1.addImage("2",caseFan)
  // case1.visible=false
  // case2.visible=true
stage=13
heatsinks = 0
  
//fans = 0
   }
   //
 if(stage === 13){
   //case1.visible=false
   count13 = count13 - 1
text("Find 4 screws and attach them." ,-925 ,150)
if(count13<0){
  case13.visible=false
  case14.visible=true
  case14.y = 200
}


 
   }
  //

   //
if(mousePressedOver(case14) && stage=== 13 && screw >=4){
  // case1.addImage("2",caseFan)
  // case1.visible=false
  // case2.visible=true
stage=14
screw = 0
  
//fans = 0
   }
   //
 if(stage === 14){
   //case1.visible=false
   count14 = count14 - 1
text("Find 4 ram sticks and attach them." ,-925 ,150)
if(count14<0){
  case14.visible=false
  case15.visible=true
  case15.y = 200
}


 
   }
  //

     //
if(mousePressedOver(case15) && stage=== 14 && ramstick >=4){
  // case1.addImage("2",caseFan)
  // case1.visible=false
  // case2.visible=true
stage=15
ramstick = 0
  
//fans = 0
   }
   //
 if(stage === 15){
   //case1.visible=false
   count15 = count15 - 1
text("Find the hard drive and attach it." ,-925 ,150)
if(count15<0){
  case15.visible=false
  case16.visible=true
  case16.y = 200
}


 
   }
  //

      //
if(mousePressedOver(case16) && stage=== 15 && harddrive >=1){
  // case1.addImage("2",caseFan)
  // case1.visible=false
  // case2.visible=true
stage=16
harddrive = 0
  
//fans = 0
   }
   //
 if(stage === 16){
   //case1.visible=false
   count16 = count16 - 1
text("Connect the wires from the front I/O panel" ,-925 ,150)
   text("to the motherboard." ,-925 ,160)
if(count16<0){
  case16.visible=false
  case17.visible=true
  case17.y = 200
}


 
   }
  //

        //
if(mousePressedOver(case17) && stage=== 16 ){
  // case1.addImage("2",caseFan)
  // case1.visible=false
  // case2.visible=true
stage=17

  
//fans = 0
   }
   //
 if(stage === 17){
   //case1.visible=false
   count17 = count17 - 1
text("Lower the metal where the optical disc" ,-925 ,150)
   text("drive goes." ,-925 ,160)
if(count17<0){
  case17.visible=false
  case18.visible=true
  case18.y = 200
}


 
   }
  //

          //
if(mousePressedOver(case18) && stage=== 17 ){
  // case1.addImage("2",caseFan)
  // case1.visible=false
  // case2.visible=true
stage=18

  
//fans = 0
   }
   //
 if(stage === 18){
   //case1.visible=false
   count18 = count18 - 1
   
   text("Find and attach the optical disc drive" ,-925 ,150)

if(count18<0){
  case18.visible=false
  case19.visible=true
  case19.y = 200
}


 
   }
  //

           //
if(mousePressedOver(case19) && stage=== 18 && opticaldiscdrive >=1){
  // case1.addImage("2",caseFan)
  // case1.visible=false
  // case2.visible=true
stage=19
opticaldiscdrive = 0
  
//fans = 0
   }
   //
 if(stage === 19){
   //case1.visible=false
   count19 = count19 - 1
text("Find and attach the PSU" ,-925 ,150)
if(count19<0){
  case19.visible=false
  case20.visible=true
  case20.y = 200
}


 
   }
  //

  if(mousePressedOver(case20) && stage=== 19 && psus >=1){
    // case1.addImage("2",caseFan)
    // case1.visible=false
    // case2.visible=true
  stage=20
  psus = 0
    
  //fans = 0
     }
     //
   if(stage === 20){
     //case1.visible=false
     count20 = count20 - 1
  text("Connect the HDD, optical disc drive, and" ,-925 ,150)
     text("the PSU. One sata wire (grey with L" ,-925 ,160)
     
     text("shaped port) for the HDD and other for" ,-925 ,170)
      text("the optical drive. One wire connects" ,-925 ,180)
        text("to the disc drive then HDD then" ,-925 ,190)
     text("motherboard" ,-925 ,200)
  if(count20<0){
    case20.visible=false
    case21.visible=true
    case21.y = 200
  }
  
  
   
     }
    //

     //

  if(mousePressedOver(case21) && stage=== 20){
    // case1.addImage("2",caseFan)
    // case1.visible=false
    // case2.visible=true
  stage=21

    
  //fans = 0
     }
     //
   if(stage === 21){
     //case1.visible=false
     count21 = count21 - 1
     text("Close the case lid." ,-925 ,150)
  if(count21<0){
    case21.visible=false
    case22.visible=true
    case22.y = 200
  }
  
  
   
     }
    //

     //

  if(mousePressedOver(case22) && stage=== 21){
    // case1.addImage("2",caseFan)
    // case1.visible=false
    // case2.visible=true
  stage=22

    
  //fans = 0
     }
     //
   if(stage === 22){
     //case1.visible=false
     count22 = count22 - 1
     text("You completed the PC." ,-925 ,150)
  if(count22<0){
    case22.visible=false
    case23.visible=true
    case23.y = 200
  }
  
  
   
     }
    //

  

  



  if(gamestate===2){
  //  background(230,230, 230 );
    textSize(9)
    text("Cooling Fans: " + fans ,-1175 ,150)
    text("Motherboards: " + motherboard ,-1175,160)
    text("Screws: " + screw ,-1175,170)
    text("CPUs: " + cpu1 ,-1175,180)
    text("Lithium Cells: " + cell ,-1175,190)
    text("Heatsinks: " + heatsinks ,-1175,200)
    text("Ram Sticks: " + ramstick ,-1175,210)
    text("HDDs: " + harddrive ,-1175,220)
    text("Optical Disc Drive: " + opticaldiscdrive ,-1175,230)
    text("PSU: " + psus ,-1175,240)
     if(keyWentDown(65)){
    camera.zoom=camera.zoom+1
  }
   if(keyWentDown(83) && camera.zoom >=2){
    camera.zoom=camera.zoom-1
  }


    if(keyDown("space")){
      player.x=200
      player.y=200
      gamestate=1
      player.visible=true




}






  }
  
  
drawSprites();  
}



    
    
  
