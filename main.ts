let projectile: Sprite = null
scene.setBackgroundColor(9)
let mySprite = sprites.create(img`
    . . f f f f f f f f f f . . . . 
    . f f 5 5 5 5 5 5 5 5 f . . . . 
    . f 5 5 5 e 4 e 5 5 5 f . . . . 
    f f f 5 e 4 e 4 e 5 5 f f f . . 
    f 5 5 5 4 e 4 e 4 e 5 5 5 f . . 
    f 5 5 5 e 4 e 4 e 4 5 5 5 f . . 
    f f f f 5 e 4 e 4 5 f f f f . . 
    . f 5 5 5 5 e 4 5 5 5 f . . . . 
    . f 5 5 5 f 7 f 5 5 5 f . . . . 
    . f f f f f 7 f f f 5 f . . . . 
    . . . f f f 7 f f f f f . . . . 
    . . . f 7 7 7 7 7 f . . . . . . 
    . f f f 7 f 7 f f f f f . . . . 
    . f 7 f f f 7 f f f 7 f . . . . 
    . f 7 7 7 7 7 7 7 7 7 f . . . . 
    . f f f f f f f f f f f . . . . 
    `, SpriteKind.Player)
game.onUpdateInterval(100, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f . f . . . . . . . 
        . . . . . d d f d d d d . . . . 
        . . . d d d f 5 f 5 5 d d . . . 
        . d d d f 5 f 5 f 5 f 5 d . . . 
        . d f f f 5 f 5 f 5 5 5 d . . . 
        . d d d f 5 f 5 f 5 5 5 d . . . 
        . . . d d d f 5 f 5 5 d d . . . 
        . . . . . d d d d d d d . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, randint(-25, 25), randint(-25, 25))
    projectile.lifespan = 3000
    if (projectile.vx < 0) {
        projectile.image.flipX()
    }
})
