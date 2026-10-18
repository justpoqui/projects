import Toybox.Graphics;
import Toybox.Lang;

// The Jarvis-style frame: inner ring, bracket arcs and the CRUCIBLE tag.
module HudFrame {

    function draw(dc as Dc, cx as Number, cy as Number) as Void {
        var ring = cx - 30;

        dc.setPenWidth(1);
        dc.setColor(Palette.NEON_DIM, Graphics.COLOR_TRANSPARENT);
        dc.drawCircle(cx, cy, ring);

        // Corner brackets just inside the ring.
        dc.setPenWidth(3);
        dc.setColor(Palette.NEON_MID, Graphics.COLOR_TRANSPARENT);
        var bracket = ring - 8;
        dc.drawArc(cx, cy, bracket, Graphics.ARC_COUNTER_CLOCKWISE, 30, 65);
        dc.drawArc(cx, cy, bracket, Graphics.ARC_COUNTER_CLOCKWISE, 115, 150);
        dc.drawArc(cx, cy, bracket, Graphics.ARC_COUNTER_CLOCKWISE, 200, 235);
        dc.drawArc(cx, cy, bracket, Graphics.ARC_COUNTER_CLOCKWISE, 305, 340);

        // Short accents either side of the name tag.
        dc.setPenWidth(2);
        dc.setColor(Palette.NEON, Graphics.COLOR_TRANSPARENT);
        dc.drawArc(cx, cy, bracket, Graphics.ARC_COUNTER_CLOCKWISE, 245, 258);
        dc.drawArc(cx, cy, bracket, Graphics.ARC_COUNTER_CLOCKWISE, 282, 295);

        dc.setColor(Palette.NEON_MID, Graphics.COLOR_TRANSPARENT);
        dc.drawText(cx, cy + ring - 28, Graphics.FONT_XTINY, "CRUCIBLE",
            Graphics.TEXT_JUSTIFY_CENTER | Graphics.TEXT_JUSTIFY_VCENTER);
    }

    // Broken targeting circle drawn around a widget.
    function reticle(dc as Dc, x as Number, y as Number, r as Number) as Void {
        dc.setPenWidth(2);
        dc.setColor(Palette.NEON_DIM, Graphics.COLOR_TRANSPARENT);
        for (var start = 20; start < 360; start += 90) {
            dc.drawArc(x, y, r, Graphics.ARC_COUNTER_CLOCKWISE, start, start + 50);
        }
    }
}
