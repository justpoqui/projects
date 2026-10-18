import Toybox.Graphics;
import Toybox.Lang;

// Battery icon with the percentage inside.
//   73-100%  green
//   26-72%   yellow
//   5-25%    red
//   0-4%     blinking red
module BatteryGauge {

    const BODY_W = 150;
    const BODY_H = 54;
    const NUB_W = 10;
    const NUB_H = 24;
    const INSET = 5;

    function draw(dc as Dc, cx as Number, cy as Number, sec as Number) as Void {
        var pct = Sensors.batteryPercent();

        var bright = Palette.NEON;
        var dim = Palette.NEON_DIM;
        if (pct < 26) {
            bright = Palette.RED;
            dim = Palette.RED_DIM;
        } else if (pct < 73) {
            bright = Palette.YELLOW;
            dim = Palette.YELLOW_DIM;
        }

        // Critical: hide the icon on odd seconds so it blinks.
        if (pct < 5 && sec % 2 == 1) {
            return;
        }

        // The terminal nub sits on the left, so the body is shifted right to keep the whole icon centred.
        var left = cx - BODY_W / 2 + NUB_W / 2;
        var top = cy - BODY_H / 2;

        var fillW = ((BODY_W - 2 * INSET) * pct) / 100;
        if (fillW > 0) {
            dc.setColor(dim, Graphics.COLOR_TRANSPARENT);
            dc.fillRoundedRectangle(left + BODY_W - INSET - fillW, top + INSET, fillW, BODY_H - 2 * INSET, 4);
        }

        dc.setColor(bright, Graphics.COLOR_TRANSPARENT);
        dc.setPenWidth(3);
        dc.drawRoundedRectangle(left, top, BODY_W, BODY_H, 8);
        dc.fillRoundedRectangle(left - NUB_W, cy - NUB_H / 2, NUB_W, NUB_H, 3);

        dc.drawText(left + BODY_W / 2, cy, Graphics.FONT_MEDIUM, pct.toString() + "%",
            Graphics.TEXT_JUSTIFY_CENTER | Graphics.TEXT_JUSTIFY_VCENTER);
    }
}
