import { Point } from "../../Core/_exports";
import { MainWindow, Direction, DirectionToIndexLookup, Maze } from "../../Game/_exports";
import { Tile } from "../../Game/Tile";

import { Ghost } from "./Ghost";
import { Blinky } from "./Blinky";
import { GhostNickname } from "../Behavior/GhostNickname";
import { GhostState } from "../Behavior/GhostState";
import { GhostInsideHouseMover } from "../Behavior/GhostInsideHouseMover";
import { DirectionInfo } from "../Behavior/DirectionInfo";
import { GhostMovementMode } from "../Behavior/GhostMovementMode";


export class Inky extends Ghost {
    private readonly _scatterTarget = new Point(27, 29);

    private readonly _blinky: Blinky;

    constructor(public readonly maze: Maze, blinky: Blinky) {
        super("Inky", GhostNickname.Inky, maze, Tile.fromCell(15.5, 11), Direction.Up);

        this.houseOffset = -1;

        this._blinky = blinky;

        this.getScatterTarget = () => this._scatterTarget;
        this.getChaseTarget = this._getChaseTargetCell;
    }

    reset(): void {
        super.reset();

        this.direction = new DirectionInfo(Direction.Up, Direction.Up);

        this._state = GhostState.Normal;
        this._movementMode = GhostMovementMode.InHouse;
        this.mover = new GhostInsideHouseMover(this, this.maze);
    }


    // To locate Inky’s target, we first start by selecting the position two tiles in front of Pac-Man 
    // in his current direction of travel.
    // From there, imagine drawing a vector from Blinky’s position to this tile, and then doubling 
    // the length of the vector. The tile that this new, extended vector ends on will be Inky’s actual target
    override _getChaseTargetCell = (): Point => {
        const pacDir = MainWindow.actors.pacMan.getDirection();
        const pacCellPos = MainWindow.actors.pacMan.getTile().index;
        const twoCellsInFront = this.maze.constrainCell(
            pacCellPos.add(DirectionToIndexLookup.indexVectorFor(pacDir).multiply(2).toPoint()));

        const blinkyCellPos = this._blinky.getTile().index;
        const diff = twoCellsInFront.minus(blinkyCellPos).toVector2D();
        const diff2 = diff.multiply(2);
        const newTarget = this.maze.constrainCell(blinkyCellPos.add(diff2.toPoint()));

        return newTarget;
    }
}