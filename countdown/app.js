"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
class Timer {
    constructor(minutes) {
        this.targetTime = new Date();
        this.targetTime.setMinutes(this.targetTime.getMinutes() + minutes);
        this.timerId = null;
    }
    getRemainingTime() {
        const now = new Date();
        const diff = Math.max(this.targetTime.getTime() - now.getTime(), 0);
        return Math.floor(diff / 1000);
    }
    formatTime(seconds) {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
    }
    updateDisplay() {
        const remainingSeconds = this.getRemainingTime();
        if (remainingSeconds > 0) {
            const formattedTime = this.formatTime(remainingSeconds);
            console.clear();
            console.log(`Countdown: ${formattedTime}`);
        }
        else {
            this.stop();
            console.clear();
            console.log("Countdown Finished!");
            // Add any actions you want to perform after the countdown finishes here.
        }
    }
    start() {
        this.stop();
        this.timerId = setInterval(() => this.updateDisplay(), 1000);
    }
    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }
}
// Example usage
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function startTimer() {
    rl.question("Enter the countdown time in minutes: ", (answer) => {
        const minutes = parseInt(answer, 10);
        if (!isNaN(minutes) && minutes > 0) {
            const timer = new Timer(minutes);
            timer.start();
        }
        else {
            console.log("Invalid input. Please enter a positive number for minutes.");
        }
    });
}
startTimer();
