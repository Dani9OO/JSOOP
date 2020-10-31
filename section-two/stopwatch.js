function Stopwatch() {
    let isRunning = false;
    let startTime = 0;
    let endTime = 0;
    let duration = 0;
    this.start = function() {
        if (isRunning)
            throw new Error('Stopwatch is already running!');
        isRunning = true;
        startTime = new Date();
    },
    this.stop = function() {
        if (!isRunning)
            throw new Error('Stopwatch is not running!');
        isRunning = false;
        endTime = new Date();
        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    },
    this.reset = function() {
        isRunning = false;
        duration = 0;
        startTime = 0;
        endTime = 0;
    }
    Object.defineProperty(this, 'duration', {
        get: function () {
            return duration;
        }
    });
}