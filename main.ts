let 車車車車車1: number[] = []
let 車子list: game.LedSprite[] = []
let 車車車車車2: number[] = []
let 車車車車車3: number[] = []
let frog: game.LedSprite = null
let 分身號 = 0
let 撞飛號 = 0
function cars () {
    if (車車車車車1.pop() == 1) {
        車子list.push(game.createSprite(4, 1))
    }
    if (車車車車車2.pop() == 1) {
        車子list.push(game.createSprite(4, 2))
    }
    if (車車車車車3.pop() == 1) {
        車子list.push(game.createSprite(4, 3))
    }
}
input.onButtonPressed(Button.A, function () {
    frog.change(LedSpriteProperty.X, -1)
    分身號 = 0
    for (let index = 0; index < 車子list.length; index++) {
        if (frog.isTouching(車子list[撞飛號])) {
            game.removeLife(1)
        }
        撞飛號 += 1
    }
})
input.onButtonPressed(Button.AB, function () {
    frog.change(LedSpriteProperty.Y, -1)
    分身號 = 0
    for (let index = 0; index < 車子list.length; index++) {
        if (frog.isTouching(車子list[撞飛號])) {
            game.removeLife(1)
        }
        撞飛號 += 1
    }
})
input.onButtonPressed(Button.B, function () {
    frog.change(LedSpriteProperty.X, 1)
    分身號 = 0
    for (let index = 0; index < 車子list.length; index++) {
        if (frog.isTouching(車子list[撞飛號])) {
            game.removeLife(1)
        }
        撞飛號 += 1
    }
})
basic.forever(function () {
    車車車車車1 = []
    車車車車車2 = []
    車車車車車3 = []
    車子list = []
    game.setLife(3)
    frog = game.createSprite(2, 4)
    while (!(frog.get(LedSpriteProperty.Y) == 0)) {
        分身號 = 0
        for (let index = 0; index < 車子list.length; index++) {
            if (車子list[分身號].get(LedSpriteProperty.X) == 0) {
                車子list[分身號].delete()
            }
            車子list[分身號].change(LedSpriteProperty.X, -1)
            分身號 += 1
        }
        cars()
        basic.pause(500)
    }
    game.addScore(1)
})
basic.forever(function () {
    for (let index = 0; index < randint(1, 3); index++) {
        車車車車車1.unshift(1)
    }
    for (let index = 0; index < randint(2, 4); index++) {
        車車車車車1.unshift(0)
    }
    for (let index = 0; index < randint(1, 3); index++) {
        車車車車車2.unshift(1)
    }
    for (let index = 0; index < randint(2, 4); index++) {
        車車車車車2.unshift(0)
    }
    for (let index = 0; index < randint(1, 3); index++) {
        車車車車車3.unshift(1)
    }
    for (let index = 0; index < randint(2, 4); index++) {
        車車車車車3.unshift(0)
    }
})
