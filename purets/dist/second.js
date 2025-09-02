"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Instagram {
    cameramode;
    filter;
    burst;
    constructor(cameramode, filter, burst) {
        this.cameramode = cameramode;
        this.filter = filter;
        this.burst = burst;
    }
}
class Youtube {
    cameramode;
    filter;
    burst;
    short;
    constructor(cameramode, filter, burst, short) {
        this.cameramode = cameramode;
        this.filter = filter;
        this.burst = burst;
        this.short = short;
    }
    createStory() {
        console.log("story was created");
    }
}
//cant do less than necessary
//# sourceMappingURL=second.js.map