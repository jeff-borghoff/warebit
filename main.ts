input.onButtonPressed(Button.A, function () {
	
})
input.onSound(DetectedSound.Loud, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
input.onGesture(Gesture.Shake, function () {
	
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
	
})
input.setSoundThreshold(SoundThreshold.Loud, 80)
basic.forever(function () {
    if (input.acceleration(Dimension.Strength) > 0) {
        if (input.isGesture(Gesture.FreeFall)) {
            basic.showNumber(0)
        }
        if (input.isGesture(Gesture.ThreeG)) {
            basic.showNumber(1)
        }
        if (input.isGesture(Gesture.SixG)) {
            basic.showNumber(2)
        }
        if (input.isGesture(Gesture.EightG)) {
            basic.showNumber(3)
        }
    }
})
