input.onButtonPressed(Button.A, function () {
    pins.analogWritePin(AnalogPin.P0, 272)
    basic.pause(5000)
    pins.analogWritePin(AnalogPin.P0, 0)
    for (let index = 0; index < 4; index++) {
        pins.analogWritePin(AnalogPin.P1, 553)
        basic.pause(500)
        pins.analogWritePin(AnalogPin.P1, 0)
        basic.pause(500)
    }
    pins.analogWritePin(AnalogPin.P2, 809)
    basic.pause(5000)
    pins.analogWritePin(AnalogPin.P2, 0)
})
basic.forever(function () {
	
})
