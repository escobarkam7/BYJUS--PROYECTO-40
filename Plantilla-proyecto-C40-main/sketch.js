const firebaseConfig = {
  apiKey: "AIzaSyAsFqyWLwQwit_Z_NKBpWlz9QglojXCurw",
  authDomain: "proyecto-40-1-d8338.firebaseapp.com",
  databaseURL: "https://proyecto-40-1-d8338-default-rtdb.firebaseio.com",
  projectId: "proyecto-40-1-d8338",
  storageBucket: "proyecto-40-1-d8338.appspot.com",
  messagingSenderId: "883014976191",
  appId: "1:883014976191:web:2fe2fb2438286a08c1fc0a"
};

firebase.initializeApp(firebaseConfig);


var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;
var player1score =0;
var player2score =0;

function preload(){
  back_img = loadImage("images/jungle.jpg");
  player_img = loadImage("images/basket2.png");
  fruit1_img = loadImage("images/apple2.png");
  fruit2_img = loadImage("images/banana2.png");
  fruit3_img = loadImage("images/melon2.png");
  fruit4_img = loadImage("images/orange2.png");
  fruit5_img = loadImage("images/pineapple2.png");
  fruitGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
}