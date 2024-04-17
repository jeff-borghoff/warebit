input.onButtonPressed(Button.A, function () {
	
})
input.onGesture(Gesture.FreeFall, function () {
	
})
input.onSound(DetectedSound.Loud, function () {
    music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.UntilDone)
    datalogger.log(datalogger.createCV("Time", input.soundLevel()))
})
input.onButtonPressed(Button.B, function () {
	
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
	
})
input.setSoundThreshold(SoundThreshold.Loud, 80)
basic.forever(function () {
    if (input.acceleration(Dimension.Strength) > 0) {
        if (input.isGesture(Gesture.FreeFall)) {
        	
        }
        if (input.isGesture(Gesture.ThreeG)) {
        	
        }
        if (input.isGesture(Gesture.SixG)) {
        	
        }
        if (input.isGesture(Gesture.EightG)) {
        	
        }
    }
})
