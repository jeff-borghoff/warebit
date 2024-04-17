input.onGesture(Gesture.EightG, function () {
	
})
input.onButtonPressed(Button.A, function () {
	
})
input.onGesture(Gesture.FreeFall, function () {
	
})
input.onGesture(Gesture.SixG, function () {
	
})
input.onSound(DetectedSound.Loud, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
	
})
input.onGesture(Gesture.ThreeG, function () {
	
})
input.setSoundThreshold(SoundThreshold.Loud, 80)
input.setAccelerometerRange(AcceleratorRange.OneG)
basic.forever(function () {
    if (input.acceleration(Dimension.Strength) > 0) {
        if (input.isGesture(Gesture.FreeFall)) {
        	
        }
    }
})
