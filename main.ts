input.onButtonPressed(Button.A, function () {
	
})
input.onSound(DetectedSound.Loud, function () {
    music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.UntilDone)
    datalogger.log(datalogger.createCV("Time", input.soundLevel()))
})
input.onButtonPressed(Button.B, function () {
	
})
input.onGesture(Gesture.Shake, function () {
	
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
	
})
input.setSoundThreshold(SoundThreshold.Loud, 80)
basic.forever(function () {
	
})