import { GameContext } from "./GameContext";
import { PeriodicTimer } from "./PeriodicTimer";

export class TwoFrameAnimation {
    timer: PeriodicTimer;
    flag: boolean;

    constructor(switchEveryMs: number) {
        this.timer = new PeriodicTimer(switchEveryMs, () => this.flag = !this.flag);
    }

    run(context: GameContext): void {
        this.timer.run(context.elapsed);
    }
}
