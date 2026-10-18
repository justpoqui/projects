import Toybox.Graphics;
import Toybox.Lang;
import Toybox.System;
import Toybox.WatchUi;

// Lays out the HUD modules. Everything is sized for the 416x416 Venu 2 Plus screen.
class CrucibleView extends WatchUi.WatchFace {

    // Positions used to nudge the always-on time around so no pixel stays lit too long.
    private const SLEEP_OFFSETS = [[0, 0], [14, -10], [-14, 10], [10, 14], [-10, -14]];

    private var _isAwake as Boolean = true;

    function initialize() {
        WatchFace.initialize();
    }

    function onLayout(dc as Dc) as Void {
    }

    function onUpdate(dc as Dc) as Void {
        var w = dc.getWidth();
        var h = dc.getHeight();
        var cx = w / 2;
        var cy = h / 2;
        var clock = System.getClockTime();

        if (dc has :setAntiAlias) {
            dc.setAntiAlias(true);
        }
        dc.setColor(Palette.NEON, Palette.BACKGROUND);
        dc.clear();

        if (!_isAwake) {
            drawSleep(dc, cx, cy, clock);
            return;
        }

        HudFrame.draw(dc, cx, cy);
        SecondsRing.draw(dc, cx, cy, clock.sec);
        BatteryGauge.draw(dc, cx, (h * 0.22).toNumber(), clock.sec);
        TimeDisplay.drawTime(dc, cx, (h * 0.41).toNumber(), Graphics.FONT_NUMBER_HOT, Palette.NEON, clock);
        TimeDisplay.drawDate(dc, cx, (h * 0.52).toNumber(), Palette.NEON_MID);
        HeartWidget.draw(dc, (w * 0.29).toNumber(), (h * 0.67).toNumber());
        StepsWidget.draw(dc, (w * 0.71).toNumber(), (h * 0.67).toNumber());
    }

    // Always-on (low power) mode: AMOLED burn-in rules allow only a few dim pixels,
    // so show just the time and shift it every minute.
    private function drawSleep(dc as Dc, cx as Number, cy as Number, clock as System.ClockTime) as Void {
        var offset = SLEEP_OFFSETS[clock.min % SLEEP_OFFSETS.size()];
        TimeDisplay.drawTime(dc, cx + offset[0], cy + offset[1], Graphics.FONT_NUMBER_MEDIUM, Palette.NEON_MID, clock);
    }

    function onExitSleep() as Void {
        _isAwake = true;
        WatchUi.requestUpdate();
    }

    function onEnterSleep() as Void {
        _isAwake = false;
        WatchUi.requestUpdate();
    }
}
