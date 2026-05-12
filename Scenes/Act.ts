import { Point, Canvas, GameContext } from "../Core/_exports";

/**
 * An 'act' is something that's run in a loop.  The main window continaully updates and draws whatever
 * the 'current act' is.  Acts are things such as DemoAct, GameAct, GameOverAct etc.
 */
export abstract class Act {
    abstract update(context: GameContext): ActUpdateResult;
    abstract draw(canvas: Canvas): void;
    abstract get nextAct(): Act;
}

export enum ActUpdateResult {
    Running,
    Finished
}

export class TextPoints {
    static readonly playerTextPoint = new Point(70, 89);
    static readonly readyPoint = new Point(90, 136);
    static readonly gameOverPoint = new Point(75, 136);
}