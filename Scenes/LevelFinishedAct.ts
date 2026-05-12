import { PeriodicTimer, Canvas, GameContext } from "../Core/_exports";
import { MainWindow } from "../Game/_exports";

import { Engine } from "../Engine";
import { Act, ActUpdateResult } from "./Act";
import { PlayerIntroAct } from "./PlayerIntroAct";

/**
 * When the level is finished, the screen flashes white and blue.
 * Transitions into either the cut-scene act if a 'cut-scene' is due, or the 'player intro' act.
 * * 
 */
export class LevelFinishedAct extends Act {

    private _step: number;
    private _timer: PeriodicTimer;
    private _finished: boolean;

    constructor() {
        super();

        this._step = 0;

        Engine.gameSounds.reset();

        MainWindow.actors.pacMan.startDigesting();
        MainWindow.actors.ghosts.forEach(g => g.stopMoving());

        this._timer = new PeriodicTimer(2000, () => {
            this._step += 1;
            MainWindow.actors.maze.startFlashing();
            MainWindow.actors.ghosts.forEach(g => g.visible = false);
            this._timer = new PeriodicTimer(2000, () => {
                this._step += 1;
                MainWindow.actors.maze.stopFlashing();

                MainWindow.actors.maze.reset();
                MainWindow.gameStats.levelFinished();

                this._finished = true;
            });
        });
    }

    update(context: GameContext): ActUpdateResult {
        this._timer.run(context.elapsed);
        MainWindow.actors.maze.update(context);
        MainWindow.actors.pacMan.update(context);

        return this._finished ? ActUpdateResult.Finished : ActUpdateResult.Running;
    }

    get nextAct(): Act {
        return new PlayerIntroAct(false);
    }

    draw(canvas: Canvas) {
        MainWindow.actors.maze.draw(canvas);
        MainWindow.actors.pacMan.draw(canvas);

        if (this._step === 0) {
            MainWindow.actors.ghosts.forEach(g => g.draw(canvas));
        }
    }
}
