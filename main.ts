input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Diamond)
        basic.pause(150)
        basic.showIcon(IconNames.Target)
        basic.pause(150)
        basic.showIcon(IconNames.SmallDiamond)
        basic.pause(150)
    }
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 374232435972735760000; index++) {
        music.playMelody("E B C5 A B G A F ", 120)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.pause(150)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.pause(150)
    }
})
