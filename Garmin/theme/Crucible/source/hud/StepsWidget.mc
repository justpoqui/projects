import Toybox.Graphics;
import Toybox.Lang;

// Two footprints with today's step count underneath.
module StepsWidget {

    function draw(dc as Dc, x as Number, y as Number) as Void {
        HudFrame.reticle(dc, x, y, 56);

        dc.setColor(Palette.NEON, Graphics.COLOR_TRANSPARENT);
        drawFoot(dc, x - 11, y - 14);
        drawFoot(dc, x + 11, y - 22);

        dc.drawText(x, y + 16, Graphics.FONT_SMALL, Sensors.steps().toString(),
            Graphics.TEXT_JUSTIFY_CENTER | Graphics.TEXT_JUSTIFY_VCENTER);

        dc.setColor(Palette.NEON_MID, Graphics.COLOR_TRANSPARENT);
        dc.drawText(x, y + 42, Graphics.FONT_XTINY, "STEPS",
            Graphics.TEXT_JUSTIFY_CENTER | Graphics.TEXT_JUSTIFY_VCENTER);
    }

    // A sole with three toes above it.
    function drawFoot(dc as Dc, x as Number, y as Number) as Void {
        dc.fillEllipse(x, y, 6, 11);
        dc.fillCircle(x - 5, y - 15, 2);
        dc.fillCircle(x, y - 17, 2);
        dc.fillCircle(x + 5, y - 15, 2);
    }
}
