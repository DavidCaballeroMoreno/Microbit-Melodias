music.setTempo(45)
for (let index = 0; index < 2; index++) {
    basic.showLeds(`
        . . # . .
        . # # . .
        . . # . .
        . . # # .
        . . # # .
        `)
    music.playTone(392, music.beat(BeatFraction.Eighth))
    music.playTone(392, music.beat(BeatFraction.Eighth))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.playTone(523, music.beat(BeatFraction.Quarter))
    music.playTone(494, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Eighth))
    music.playTone(392, music.beat(BeatFraction.Eighth))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.playTone(587, music.beat(BeatFraction.Quarter))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Eighth))
    music.playTone(659, music.beat(BeatFraction.Eighth))
    music.playTone(784, music.beat(BeatFraction.Eighth))
    music.playTone(659, music.beat(BeatFraction.Quarter))
    music.playTone(523, music.beat(BeatFraction.Quarter))
    music.playTone(494, music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.playTone(698, music.beat(BeatFraction.Eighth))
    music.playTone(698, music.beat(BeatFraction.Eighth))
    music.playTone(659, music.beat(BeatFraction.Eighth))
    music.playTone(523, music.beat(BeatFraction.Eighth))
    music.playTone(587, music.beat(BeatFraction.Eighth))
    music.playTone(523, music.beat(BeatFraction.Half))
}
