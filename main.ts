input.onGesture(Gesture.EightG, function () {
    basic.showNumber(8)
})
input.onButtonPressed(Button.A, function () {
	
})
input.onGesture(Gesture.FreeFall, function () {
    basic.showNumber(0)
})
input.onGesture(Gesture.SixG, function () {
    basic.showNumber(6)
})
input.onSound(DetectedSound.Loud, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
	
})
input.onGesture(Gesture.ThreeG, function () {
    basic.showNumber(3)
})
input.setSoundThreshold(SoundThreshold.Loud, 80)
input.setAccelerometerRange(AcceleratorRange.OneG)
basic.forever(function () {
    if (input.acceleration(Dimension.Strength) > 0) {
    	
    }
})
