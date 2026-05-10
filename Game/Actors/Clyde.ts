import { Vector2D, Point } from "../../Core/_exports";
import { MainWindow, Direction, Maze } from "../../Game/_exports";

import { Ghost } from "./Ghost";
import { GhostNickname } from "../Behavior/GhostNickname";
import { GhostState } from "../Behavior/GhostState";
import { GhostInsideHouseMover } from "../Behavior/GhostInsideHouseMover";
import { DirectionInfo } from "../Behavior/DirectionInfo";
import { GhostMovementMode } from "../Behavior/GhostMovementMode";

export class Clyde extends Ghost {
    private readonly _scatterTarget = new Point(0, 29);

    constructor(public readonly maze: Maze) {
        super("Clyde", GhostNickname.Clyde, maze, new Point(11.5, 12), Direction.Up);

        this.getScatterTarget = ()=> this._scatterTarget;
        this.getChaseTarget = this._getChaseTargetCell;

        this.houseOffset = 1;
    }

    reset(): void {
        super.reset();

        this.direction = new DirectionInfo(Direction.Up, Direction.Up);
        this._state = GhostState.Normal;
        this._movementMode = GhostMovementMode.InHouse;

        this.mover = new GhostInsideHouseMover(this, this.maze);
    }

    // Whenever Clyde needs to determine his target tile, he first calculates his distance from Pac-Man. 
    // If he is farther than eight tiles away, his targeting is identical to Blinky’s, 
    // using Pac-Man’s current tile as his target. However, as soon as his distance
    // to Pac-Man becomes less than eight tiles, Clyde’s target is set to the same tile as his fixed 
    // one in Scatter mode, just outside the bottom-left corner of the maze
    // Pac-Man’s current position and orientation, and selecting the location four tiles straight 
    // ahead of him. Works when PacMan is facing left, down, or right, but when facing upwards, 
    // it's also four tiles to the left 
    override _getChaseTargetCell = () => {
        var pacCellPos = MainWindow.actors.pacMan.getTile().index;
        const myPos = this.getTile().index;

        const distance = Math.abs(Vector2D.distanceBetween(myPos.toVector2D(), pacCellPos.toVector2D()));

        if (distance >= 8) {
            return pacCellPos;
        }

        return this._scatterTarget;
    }
}