// window/global scope
var cig = {};

cig.Game = (function(){
	// constructor
	function CountItGame() {
		console.log("Game starts.");

		this.canvas = document.getElementById('game-canvas');

		//EaselJS Stage
		this.stage = new createjs.Stage(this.canvas);

		this.stage.update();
	}
	return CountItGame;
})();

window.onload = function() {
	//entry point
	var game = new cig.Game();
};