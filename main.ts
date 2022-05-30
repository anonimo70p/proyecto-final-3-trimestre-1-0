input.onButtonPressed(Button.A, function () {
    basic.showString("" + (input.magneticForce(Dimension.Strength)))
})
radio.setGroup(14)
basic.forever(function () {
    if (input.magneticForce(Dimension.Strength) < 200) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . . . .
            # # # # #
            # . # . #
            `)
    }
})
