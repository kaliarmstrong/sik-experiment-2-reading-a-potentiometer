let PotentiometerVal = 0
basic.forever(function () {
    PotentiometerVal = pins.analogReadPin(AnalogPin.P2)
    pins.analogWritePin(AnalogPin.P4, PotentiometerVal)
})
