function Stopwatch() {
    let isRunning = false;
    let startTime = 0;
    let endTime = 0;
    let duration = 0;
    Object.defineProperty(this, 'duration', {
        get: function () {
            return duration;
        },
        set: function(value) {
            duration = value
        }
    });
    Object.defineProperty(this, 'endTime', {
        get: function () {
            return endTime;
        },
    });
    Object.defineProperty(this, 'startTime', {
        get: function () {
            return startTime;
        },
    });
    Object.defineProperty(this, 'isRunning', {
        get: function () {
            return isRunning;
        },
    });
}

Stopwatch.prototype.start = function() {
    if (this.isRunning)
        throw new Error('Stopwatch is already running!');
    this.isRunning = true;
    this.startTime = new Date();
}
Stopwatch.prototype.stop = function() {
    if (!this.isRunning)
        throw new Error('Stopwatch is not running!');
    this.isRunning = false;
    this.endTime = new Date();
    const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
    this.duration += seconds;
}
Stopwatch.prototype.restart = function() {
    this.isRunning = false;
    this.duration = 0;
    this.startTime = 0;
    this.endTime = 0;
}