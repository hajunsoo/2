input.onButtonPressed(Button.A, function () {
    while (true) {
        basic.showNumber(sdfsdf)
        sdfsdf += -1
        if (sdfsdf == -1) {
            sdfsdf = 0
            basic.clearScreen()
            break;
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    sdfsdf += 10
    basic.showNumber(sdfsdf)
    basic.pause(100)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    sdfsdf += 1
    basic.showNumber(sdfsdf)
    basic.pause(100)
    basic.clearScreen()
})
let sdfsdf = 0
sdfsdf = 0
