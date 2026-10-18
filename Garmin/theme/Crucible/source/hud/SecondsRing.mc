import Toybox.Graphics;
import Toybox.Lang;
import Toybox.Math;

// Outer ring of 60 ticks. Ticks up to the current second light up green.
module SecondsRing {

    function draw(dc as Dc, cx as Number, cy as Number, sec as Number) as Void {
        var outer = cx - 3;
        dc.setPenWidth(3);
        for (var i = 0; i < 60; i++) {
            var len = (i % 5 == 0) ? 20 : 11;
            var angle = Math.toRadians(i * 6);
            var sin = Math.sin(angle);
            var cos = Math.cos(angle);

            var color = Palette.NEON_DIM;
            if (i == sec) {
                color = Palette.NEON_HOT;
            } else if (i < sec) {
                color = Palette.NEON;
            }
            dc.setColor(color, Graphics.COLOR_TRANSPARENT);
            dc.drawLine(cx + outer * sin, cy - outer * cos,
                cx + (outer - len) * sin, cy - (outer - len) * cos);
        }
    }
}
