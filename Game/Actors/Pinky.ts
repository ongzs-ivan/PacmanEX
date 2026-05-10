import { Point } from "../../Core/_exports";
import { Tile, MainWindow, Direction, DirectionToIndexLookup, Maze } from "../../Game/_exports";

import { Ghost } from "./Ghost";
import { GhostNickname } from "../Behavior/GhostNickname";
import { GhostState } from "../Behavior/GhostState";
import { GhostInsideHouseMover } from "../Behavior/GhostInsideHouseMover";
import { DirectionInfo } from "../Behavior/DirectionInfo";
import { GhostMovementMode } from "../Behavior/GhostMovementMode";

export class Pinky extends Ghost {
    constructor(public readonly maze: Maze) {
        super("Pinky", GhostNickname.Pinky, maze, Tile.fromCell(15.5, 11), Direction.Down);

        this.getScatterTarget = ()=> new Point(2, 0);
        this.getChaseTarget = this._getChaseTargetCell;
        this.houseOffset = 0;
    }

    reset(): void {
        super.reset();

        this.direction = new DirectionInfo(Direction.Down, Direction.Down);

        this._state = GhostState.Normal;
        this._movementMode = GhostMovementMode.InHouse;
        this.mover = new GhostInsideHouseMover(this, this.maze);
  }

    // Pac-Man’s current position and orientation, and selecting the location four tiles straight 
    // ahead of him. Works when PacMan is facing left, down, or right, but when facing upwards, 
    // it's also four tiles to the left 
    override _getChaseTargetCell = () => {
        var pacDir = MainWindow.actors.pacMan.getDirection();
        var pacCellPos = MainWindow.actors.pacMan.getTile().index;
        var offset = this.maze.constrainCell(
            pacCellPos.add(DirectionToIndexLookup.indexVectorFor(pacDir).multiply(4).toPoint()));

        const newTarget = this.maze.constrainCell(pacCellPos.add(offset));

        return newTarget;
    }
}
