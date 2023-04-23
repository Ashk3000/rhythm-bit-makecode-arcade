namespace SpriteKind {
    export const UpArrow = SpriteKind.create()
    export const DownArrow = SpriteKind.create()
    export const LeftArrow = SpriteKind.create()
    export const RightArrow = SpriteKind.create()
    export const Scene = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    pressArrow(0)
    console.log("" + game.runtime() + ", ")
    console.log("0, ")
})
function pressArrow (arrow: number) {
    for (let value of Arrow_Sprites) {
        if (value.y - 88 <= 20 && value.y - 88 >= -20) {
            if (arrow == 0) {
                if (value.kind() == SpriteKind.UpArrow) {
                    sprites.destroy(value)
                }
            } else if (arrow == 1) {
                if (value.kind() == SpriteKind.DownArrow) {
                    sprites.destroy(value)
                }
            } else if (arrow == 2) {
                if (value.kind() == SpriteKind.LeftArrow) {
                    sprites.destroy(value)
                }
            } else {
                if (value.kind() == SpriteKind.RightArrow) {
                    sprites.destroy(value)
                }
            }
        }
    }
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    pressArrow(0)
    console.log("" + game.runtime() + ", ")
    console.log("2, ")
})
sprites.onCreated(SpriteKind.LeftArrow, function (sprite) {
    sprite.setPosition(scene.screenWidth() / 5 * 1, 0)
    sprite.setVelocity(0, 50)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    pressArrow(3)
    console.log("" + game.runtime() + ", ")
    console.log("0, ")
})
sprites.onCreated(SpriteKind.RightArrow, function (sprite) {
    sprite.setPosition(scene.screenWidth() / 5 * 4, 0)
    sprite.setVelocity(0, 50)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    pressArrow(2)
    console.log("" + game.runtime() + ", ")
    console.log("2, ")
})
sprites.onCreated(SpriteKind.UpArrow, function (sprite) {
    sprite.setPosition(scene.screenWidth() / 5 * 3, 0)
    sprite.setVelocity(0, 50)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    pressArrow(3)
    console.log("" + game.runtime() + ", ")
    console.log("3, ")
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    pressArrow(1)
    console.log("" + game.runtime() + ", ")
    console.log("1, ")
})
sprites.onCreated(SpriteKind.DownArrow, function (sprite) {
    sprite.setPosition(scene.screenWidth() / 5 * 2, 0)
    sprite.setVelocity(0, 50)
})
let Arrow_Num = 0
let Arrow_Sprites: Sprite[] = []
let Line = sprites.create(assets.image`Line`, SpriteKind.Scene)
Line.z = 2
let Map = [
64,
3,
343,
0,
574,
2,
782,
1,
1091,
3,
1363,
3,
1615,
3,
2089,
2,
2334,
2,
2599,
2,
3098,
3,
3329,
3,
3599,
3,
4076,
3,
4306,
0,
4535,
2,
4799,
1,
5067,
3,
5359,
3,
5606,
3,
6039,
0,
6289,
0,
6560,
3,
6912,
2,
7161,
1
]
timer.background(function () {
    pause(1600)
    music.play(music.createSong(assets.song`Marry Had a Little Lamb`), music.PlaybackMode.InBackground)
})
game.onUpdate(function () {
    if (game.runtime() >= Map[0]) {
        Map.shift()
        Arrow_Num = Map.shift()
        if (Arrow_Num == 0) {
            Arrow_Sprites.push(sprites.create(assets.image`Up Arrow`, SpriteKind.UpArrow))
        } else if (Arrow_Num == 1) {
            Arrow_Sprites.push(sprites.create(assets.image`Down Arrow`, SpriteKind.DownArrow))
        } else if (Arrow_Num == 2) {
            Arrow_Sprites.push(sprites.create(assets.image`Left Arrow`, SpriteKind.LeftArrow))
        } else {
            Arrow_Sprites.push(sprites.create(assets.image`Right Arrow`, SpriteKind.RightArrow))
        }
    }
})
