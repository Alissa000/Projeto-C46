var bordas, solo, soloInvisivel;
var imagemDoSolo;
var fundo,sol, solImg;
var meninaImg;
var menina;
var ladra;
var ladraImg;
var casa1,casa2,casa3,casa4,casa5,casa6;
var casa1Img,casa2Img,casa3Img,casa4Img,casa5Img,casa6Img;



var JOGAR = 1;
var ENCERRAR = 0;
var estadoJogo= JOGAR;

function preload(){
  
  fundo = loadImage('fundocor.png');
  solImg = loadImage('solcor.png');
  meninaImg = loadAnimation('1.png','2.png','4.png'); 
  ladraImg = loadAnimation('ladra1.png','ladra2.png');
  casa1Img = loadImage ('casa1.png');
  casa2Img = loadImage ('casa2.png');
  casa3Img = loadImage ('casa3.png');
  casa4Img = loadImage ('casa4.png');
  casa5Img = loadImage ('casa5.png');
  casa6Img = loadImage ('casa6.png');
  
  
  //carregar imagem do solo
  imagemDoSolo = loadImage("solocor.png");
  
  //carregar imagem da nuvem

  
  
 
  
  
}

function setup(){
  
  //cria a tela
  createCanvas(900,400);
  
  menina = createSprite(400,270);
  menina.addAnimation("running",meninaImg);
  menina.scale =0.5;


  ladra = createSprite(100,270);
  ladra.addAnimation("ladrarunning",ladraImg);
  ladra.scale = 1.7;
  ladra.velocity.x = 1


  sol = createSprite(50,40);
  sol.addImage('sol', solImg);
  sol.scale = 0.3;
  
  //cria solo
  solo = createSprite(200,380,400,20);
  //adiciona imagem de solo
  solo.addImage("solo", imagemDoSolo)
  solo.x = width/2;
  solo.scale = 0.6;
  
  //cria solo invisível
  soloInvisivel = createSprite(300,height-10,600,10);
  soloInvisivel.visible = false;
  
  //cria solo invisível
  soloInvisivel = createSprite(300,height-10,600,10);
  soloInvisivel.visible = false;
  
  
  
  
  

}

function draw(){
  //fundo branco
  background(fundo);
  
  solo.velocityX = -8;
  
  
  
 
  if (ladra.x>900){
    ladra.x=100;
 }
  
  //faz o solo voltar ao centro se metade dele sair da tela
  if (solo.x<0){
     solo.x=width/2;
  }
  
  casas();

  //desenha os sprites  
  drawSprites();
    

    
   
    
  
}

function casas() {
if (frameCount % 40 ===0) {
  var casa = createSprite(400,270,10,40);
  casa.velocity.x = -3;


  var rand = Math.round(random(1,6));

  switch (rand) {
    case 1: casa.addImage(casa1Img);     
      break;
    case 2: casa.addImage(casa2Img);     
      break;
    case 3: casa.addImage(casa3Img);     
      break;
    case 4: casa.addImage(casa4Img);     
      break;
    case 5: casa.addImage(casa5Img);     
      break;
    case 6: casa.addImage(casa6Img);     
      break;
    default:
      break;
  }
  casa.scale = 2.0;
}
  
  
}