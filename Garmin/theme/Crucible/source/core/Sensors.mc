import Toybox.Activity;
import Toybox.ActivityMonitor;
import Toybox.Lang;
import Toybox.System;

// Reads the watch data the HUD shows.
module Sensors {

    function batteryPercent() as Number {
        var pct = (System.getSystemStats().battery + 0.5).toNumber();
        return pct > 100 ? 100 : pct;
    }

    // Live heart rate, falling back to the most recent stored sample. Null when unknown.
    function heartRate() as Number? {
        var info = Activity.getActivityInfo();
        if (info != null) {
            var current = info.currentHeartRate;
            if (current != null) {
                return current;
            }
        }
        if (ActivityMonitor has :getHeartRateHistory) {
            var sample = ActivityMonitor.getHeartRateHistory(1, true).next();
            if (sample != null) {
                var stored = sample.heartRate;
                if (stored != null && stored != ActivityMonitor.INVALID_HR_SAMPLE) {
                    return stored;
                }
            }
        }
        return null;
    }

    function steps() as Number {
        var steps = ActivityMonitor.getInfo().steps;
        return steps != null ? steps : 0;
    }
}
