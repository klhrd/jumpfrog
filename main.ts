function cars () {
    list.push(game.createSprite(4, randint(1, 3)))
}
input.onButtonPressed(Button.A, function () {
    frog.change(LedSpriteProperty.X, -1)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    list.push(game.createSprite(4, randint(1, 3)))
})
input.onButtonPressed(Button.AB, function () {
    frog.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    frog.change(LedSpriteProperty.X, 1)
})
let 分身號 = 0
let 車車車車車1: string[] = []
let list: game.LedSprite[] = []
let frog: game.LedSprite = null
let 車子list: number[] = []
frog = game.createSprite(2, 4)
basic.forever(function () {
    車車車車車1 = []
    frog.delete()
    frog = game.createSprite(2, 4)
    while (!(frog.get(LedSpriteProperty.Y) == 0)) {
        分身號 = 0
        for (let index = 0; index < list.length; index++) {
            if (list[分身號].get(LedSpriteProperty.X) == 0) {
                list[分身號].delete()
            }
            list[分身號].change(LedSpriteProperty.X, -1)
            分身號 += 1
        }
        cars()
        basic.pause(500)
    }
    game.addScore(1)
})
basic.forever(function () {
    let 車車車車車3: string[] = []
    let 車車車車車2: string[] = []
    車車車車車1.push("c" + convertToText(randint(1, 4)))
    車車車車車1.push("s" + convertToText(randint(1, 4)))
    車車車車車2.push("c" + convertToText(randint(1, 4)))
    車車車車車2.push("s" + convertToText(randint(1, 4)))
    車車車車車3.push("c" + convertToText(randint(1, 4)))
    車車車車車3.push("s" + convertToText(randint(1, 4)))
})
