import Toybox.Graphics;
import Toybox.Lang;
import Toybox.Math;

// Heart outline with the current heart rate inside.
module HeartWidget {

    const POINTS = 32;
    const SCALE = 2.4;

    function draw(dc as Dc, x as Number, y as Number) as Void {
        HudFrame.reticle(dc, x, y, 56);

        var pts = heartPoints(x, y - 6);
        dc.setColor(Palette.NEON_DIM, Graphics.COLOR_TRANSPARENT);
        dc.fillPolygon(pts);

        dc.setColor(Palette.NEON, Graphics.COLOR_TRANSPARENT);
        dc.setPenWidth(3);
        for (var i = 0; i < POINTS; i++) {
            var a = pts[i];
            var b = pts[(i + 1) % POINTS];
            dc.drawLine(a[0], a[1], b[0], b[1]);
        }

        var hr = Sensors.heartRate();
        dc.drawText(x, y - 10, Graphics.FONT_SMALL, hr != null ? hr.toString() : "--",
            Graphics.TEXT_JUSTIFY_CENTER | Graphics.TEXT_JUSTIFY_VCENTER);

        dc.setColor(Palette.NEON_MID, Graphics.COLOR_TRANSPARENT);
        dc.drawText(x, y + 42, Graphics.FONT_XTINY, "BPM",
            Graphics.TEXT_JUSTIFY_CENTER | Graphics.TEXT_JUSTIFY_VCENTER);
    }

    // Classic parametric heart curve, centred on (cx, cy).
    function heartPoints(cx as Number, cy as Number) as Array<[Numeric, Numeric]> {
        var pts = [] as Array<[Numeric, Numeric]>;
        for (var i = 0; i < POINTS; i++) {
            var t = 2 * Math.PI * i / POINTS;
            var s = Math.sin(t);
            var hx = 16 * s * s * s;
            var hy = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
            // The curve spans y = -17..12, so +2.5 centres it vertically.
            pts.add([cx + SCALE * hx, cy - SCALE * (hy + 2.5)]);
        }
        return pts;
    }
}
