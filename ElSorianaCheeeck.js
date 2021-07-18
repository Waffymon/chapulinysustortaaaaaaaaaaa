const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var pizou
var bolillochopiado
var bolillocajetoso
var bolillomantecoso
var bolilloduro
var bolillolvidado
var bolilloquemado
var bolilloreciensalidodelhorno
var bolillonutelozo
var bolilloFIT
var chipotechillonconahmbhre
var chapulin 
var chapo

function preload() {
chapo=loadImage("elver.png")
}

function setup(){
    engine = Engine.create();
   world = engine.world;
 createCanvas(3000,800); 
 pizou=new Flor(1000,700,2000,40)
 bolillochopiado=new Boliiilloooosdeeeelllsoooriiaaaanaaa(800,630,70,70);
 bolillocajetoso=new Boliiilloooosdeeeelllsoooriiaaaanaaa(800,560,70,70)
 bolillomantecoso=new Boliiilloooosdeeeelllsoooriiaaaanaaa(800,490,70,70)
 bolilloduro=new Boliiilloooosdeeeelllsoooriiaaaanaaa(800,420,70,70)
 bolillolvidado=new Boliiilloooosdeeeelllsoooriiaaaanaaa(800,350,70,70)
 bolilloquemado=new Boliiilloooosdeeeelllsoooriiaaaanaaa(800,280,70,70)
 bolilloreciensalidodelhorno=new Boliiilloooosdeeeelllsoooriiaaaanaaa(800,210,70,70)
 bolillonutelozo=new Boliiilloooosdeeeelllsoooriiaaaanaaa(800,140,70,70);
 bolilloFIT=new Boliiilloooosdeeeelllsoooriiaaaanaaa(800,70,70,70);
 chipotechillonconahmbhre=new Chapulincolorado(30,30,700,300)
 chapulin= new Elmundoentero(chipotechillonconahmbhre.body,{
    x:300,y:50
    
  })   ;
}

function draw(){
    Engine.update(engine);
    background("gray");
    pizou.display();
    image(chapo,200,200,200,200);
    bolillochopiado.display();
    bolillocajetoso.display();
    bolillomantecoso.display();
    bolilloduro.display();
    bolillolvidado.display();
    bolilloquemado.display();
    bolilloreciensalidodelhorno.display();
    bolillonutelozo.display();
    bolilloFIT.display();
    chipotechillonconahmbhre.display();
    chapulin.display();
}
