import { PeriodicTimer, Canvas, GameContext } from "../Core/_exports";
import { MainWindow } from "../Game/_exports";

import { StartButtonAct } from "./StartButtonAct";
import { Engine } from "../Engine";
import { AttractAct } from "./AttractAct";
import { Act, ActUpdateResult, TextPoints } from "./Act";

export class GameOverAct extends Act {
    private _progress: number = 0;
    private _finished: boolean;

    private _currentTimer: PeriodicTimer;

    constructor() {
        super();

        this._progress = 0;

        this._currentTimer = new PeriodicTimer(2000, () => {
            this._progress += 1;
            this._currentTimer = new PeriodicTimer(2000, () => {
                this._finished = true;
            });
        });
    }

    update(context: GameContext): ActUpdateResult {
        this._currentTimer.run(context.elapsed);

        return this._finished ? ActUpdateResult.Finished : ActUpdateResult.Running;
    }

    draw(canvas: Canvas) {
        MainWindow.actors.maze.draw(canvas);

        canvas.drawText("GAME OVER", "red", TextPoints.gameOverPoint);
    }

    get nextAct(): Act {
        if (Engine.credits === 0) {
            return new AttractAct();
        }

        return new StartButtonAct();
    }
}