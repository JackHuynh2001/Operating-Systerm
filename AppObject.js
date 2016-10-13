function App(n,m,s){

    //Declare your instance variables here.
    this.name = n;
    this.memory = m;
    this.state = s;

    //Declare the instance function open here.
    this.open = function(){
      this.state = "active"

    };
    //Declare the instance function sleep here.
this.sleep = function(){
  this.state = "sleep";
  this.memory/2;


}


    //Declare the instance function active here.
this.active = function(){
  if(this.state == "sleep");
  this.state = "active";
  this.memory*2;
}

    //Declare the instance function close here.
this.close = function(){
  if(this.state == "null");
  this.memory*0;
  else(this.state == "null")
}
}

//Use the constructor to create 4 App objects below.
var CallofDuty20 = new app(CallofDuty20,10,"active");
var Pay2Win = new app(Pay2Win,2,"active");
var TrendingGame = new app(TrendingGame,2,"active");
var ActualGoodGame = new app(ActualGoodGame,5,"active");

var appList = [CallofDuty20,Pay2Win,TrendingGame,ActualGoodGame]


//Declare an array named appList, and place all 4 of your apps in that array.
//The order does not matter.
