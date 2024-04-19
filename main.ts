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
function doCompass () {
    degrees = input.compassHeading()
    if (degrees < 45) {
        basic.showArrow(ArrowNames.North)
    } else if (degrees < 135) {
        basic.showArrow(ArrowNames.East)
    } else if (degrees < 255) {
        basic.showArrow(ArrowNames.South)
    } else if (degrees < 315) {
        basic.showArrow(ArrowNames.West)
    } else {
        basic.showArrow(ArrowNames.North)
    }
}
input.onButtonPressed(Button.B, function () {
	
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
	
})
input.onGesture(Gesture.ThreeG, function () {
    basic.showNumber(3)
})
let degrees = 0
input.setSoundThreshold(SoundThreshold.Loud, 80)
input.setAccelerometerRange(AcceleratorRange.OneG)
basic.forever(function () {
    doCompass()
    if (input.acceleration(Dimension.Strength) > 0) {
    	
    }
})
