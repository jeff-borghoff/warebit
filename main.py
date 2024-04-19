def on_gesture_eight_g():
    basic.show_number(8)
input.on_gesture(Gesture.EIGHT_G, on_gesture_eight_g)

def on_button_pressed_a():
    pass
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_free_fall():
    basic.show_number(0)
input.on_gesture(Gesture.FREE_FALL, on_gesture_free_fall)

def on_gesture_six_g():
    basic.show_number(6)
input.on_gesture(Gesture.SIX_G, on_gesture_six_g)

def on_sound_loud():
    pass
input.on_sound(DetectedSound.LOUD, on_sound_loud)

def doCompass():
    global degrees
    degrees = input.compass_heading()
    if degrees < 45:
        basic.show_arrow(ArrowNames.NORTH)
    elif degrees < 135:
        basic.show_arrow(ArrowNames.EAST)
    elif degrees < 255:
        basic.show_arrow(ArrowNames.SOUTH)
    elif degrees < 315:
        basic.show_arrow(ArrowNames.WEST)
    else:
        basic.show_arrow(ArrowNames.NORTH)

def on_button_pressed_b():
    pass
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_logo_pressed():
    pass
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

def on_gesture_three_g():
    basic.show_number(3)
input.on_gesture(Gesture.THREE_G, on_gesture_three_g)

degrees = 0
input.set_sound_threshold(SoundThreshold.LOUD, 80)
input.set_accelerometer_range(AcceleratorRange.ONE_G)

def on_forever():
    doCompass()
    if input.acceleration(Dimension.STRENGTH) > 0:
        pass
basic.forever(on_forever)
