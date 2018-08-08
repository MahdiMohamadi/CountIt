// window/global scope
var cig = {};

cig.Game = (function() {
	// constructor
	function CountItGame() {
		console.log("Game starts.");

		this.canvas = document.getElementById("game-canvas");

		//EaselJS Stage
		this.stage = new createjs.Stage(this.canvas);

		var shape = new createjs.Shape();
		shape.graphics.setStrokeStyle(1);
		shape.graphics.beginStroke("#000");
		shape.graphics.beginFill("#efefef");
		shape.graphics.rect(0, 0, 80, 80);

		this.stage.addChild(shape);

		this.stage.update();
	}
	return CountItGame;
})();

window.onload = function() {
	//entry point
	var game = new cig.Game();
};