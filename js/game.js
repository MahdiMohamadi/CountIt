// window/global scope
var cig = {};

cig.Tile = (function() {
	function Tile(number){
		this.initialize();
		this.number = number;
		this.width = this.height = 80;

		var shape = new createjs.Shape();
		shape.graphics.setStrokeStyle(1);
		shape.graphics.beginStroke("#000");
		shape.graphics.beginFill("#efefef");
		shape.graphics.rect(0, 0, this.width, this.height);

		this.addChild(shape);

		
	}

	var p = Tile.prototype = new createjs.Container();
	return Tile
})();

cig.Game = (function() {
	// constructor
	function CountItGame() {
		console.log("Game starts.");

		this.canvas = document.getElementById("game-canvas");

		//EaselJS Stage
		this.stage = new createjs.Stage(this.canvas);

		var tile = new cig.Tile(10);
		this.stage.addChild(tile);

		this.stage.update();
	}
	return CountItGame;
})();

window.onload = function() {
	//entry point
	var game = new cig.Game();
};