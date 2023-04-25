var marioGameover
var marioJump
var marioCoin
var marioKick
var marioDie
var worldStart

function preload() {
	marioGameover = loadSound("gameover.wav")
	marioJump = loadSound("jump.wav")
	marioCoin = loadSound("coin.wav")
	marioKick = loadSound("kick.wav")
	marioDie = loadSound("mariodie.wav")
	worldStart = loadSound("world_start.wav")
	setSprites()
	MarioAnimation()
}

function setup() {
	var canvas =  createCanvas(1240,336)
	canvas.parent("canvas")
	instializeInSetup(mario)
	video = createCapture(VIDEO)
	video.size(800,400)
	video.parent("gameConsole")
	posenet = ml5.poseNet(video, modelLoaded)
	posenet.on("pose", getPoses)
}

function draw() {
	game()
}

function modelLoaded() {
	console.log("O modelo foi carregado!")
}

function getPoses(error, results) {
	if (error) {
		console.log(error)
	} else if (results.length>0) {
		console.log(results)
		noseX = results[0].pose.nose.x
		noseY = results[0].pose.nose.y
		console.log(noseX)
		console.log(noseY)
	}
}