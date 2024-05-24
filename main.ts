input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (spalte > 0) {
        spalte += -1
    }
    lcd16x2rgb.setCursor(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2_x3E), zeile, spalte)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    if (spalte < 15) {
        spalte += 1
    }
    lcd16x2rgb.setCursor(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2_x3E), zeile, spalte)
})
let zeichencode = 0
let spalte = 0
let zeile = 0
lcd16x2rgb.initLCD(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2_x3E))
zeile = 0
spalte = 0
qwiicgpio.beimStart(qwiicgpio.qwiicgpio_eADDR(qwiicgpio.eADDR.GPIO_x27))
qwiicgpio.setMode(
qwiicgpio.qwiicgpio_eADDR(qwiicgpio.eADDR.GPIO_x27),
qwiicgpio.eIO.IN_inverted,
qwiicgpio.eIO.IN_inverted,
qwiicgpio.eIO.IN_inverted,
qwiicgpio.eIO.IN_inverted,
qwiicgpio.eIO.IN_inverted,
qwiicgpio.eIO.IN_inverted,
qwiicgpio.eIO.IN_inverted,
qwiicgpio.eIO.IN_inverted
)
loops.everyInterval(500, function () {
    zeichencode = qwiicgpio.readINPUT_PORT(qwiicgpio.qwiicgpio_eADDR(qwiicgpio.eADDR.GPIO_x27))
    basic.showString(String.fromCharCode(zeichencode))
    lcd16x2rgb.writeLCD(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2_x3E), String.fromCharCode(zeichencode))
    lcd16x2rgb.writeText(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2_x3E), 1, 0, 7, lcd16x2rgb.lcd16x2_text(bit.formatNumber(zeichencode, bit.eLength.BIN_11111111)))
    lcd16x2rgb.writeText(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2_x3E), 1, 9, 10, lcd16x2rgb.lcd16x2_text(bit.formatNumber(zeichencode, bit.eLength.HEX_FF)))
    lcd16x2rgb.writeText(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2_x3E), 1, 12, 14, lcd16x2rgb.lcd16x2_text(bit.formatNumber(zeichencode, bit.eLength.toString)))
    lcd16x2rgb.writeText(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2_x3E), 1, 15, 15, String.fromCharCode(zeichencode))
    lcd16x2rgb.setCursorCB(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2_x3E), zeile, spalte, true)
})
