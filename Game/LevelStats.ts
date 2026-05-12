import { Point } from "../Core/_exports";

import { GhostsLevelPatternProperties } from "./Behavior/GhostsLevelPatternProperties";
import { FruitItem } from "./FruitItem";
import { LevelProps } from "./LevelProps";
import { FruitEvent } from "./Events/FruitEvent";

export class LevelStats {
    private static levelProps: LevelProps[] = [ 
        new LevelProps(FruitItem.Cherry,	 300,    80,  71, 80, 40, 30,   90,   15,  95,   90,  79, 50, 6, 5),
        new LevelProps(FruitItem.Strawberry, 300,    90,  79, 85, 45, 30,   90,   15,  95,   95,  83, 55, 5, 5),
        new LevelProps(FruitItem.Peach,      500,    90,  79, 85, 45, 40,   90,   20,  95,   95,  83, 55, 3, 5),
        new LevelProps(FruitItem.Apple,      700,    100, 87, 95, 50, 40,   100,  20,  105,  100, 87, 60, 2, 5),
        new LevelProps(FruitItem.Grape,      1000,   100, 87, 95, 50, 50,   100,  25,  105,  100, 87, 60, 2, 5),
        new LevelProps(FruitItem.Grape,      1000,   100, 87, 95, 50, 50,   100,  25,  105,  100, 87, 60, 1, 5),
        new LevelProps(FruitItem.Galaxian,   2000,   100, 87, 95, 50, 60,   100,  30,  105,  100, 87, 60, 5, 3),
        new LevelProps(FruitItem.Bell,       3000,   100, 87, 95, 50, 60,   100,  30,  105,  100, 87, 60, 1, 5),
        new LevelProps(FruitItem.Bell,       3000,   100, 87, 95, 50, 80,   100,  40,  105,  100, 87, 60, 1, 3),
        new LevelProps(FruitItem.Key,        5000,   100, 87, 95, 50, 80,   100,  40,  105,  100, 87, 60, 1, 3),
        new LevelProps(FruitItem.Key,        5000,   100, 87, 95, 50, 100,  100,  50,  105,  100, 87, 60, 1, 3),
        new LevelProps(FruitItem.Key,        5000,   100, 87, 95, 50, 100,  100,  50,  105,  100, 87, 60, 1, 3),
        new LevelProps(FruitItem.Key,        5000,   100, 87, 95, 50, 100,  100,  50,  105,  0,    0,  0, 0, 0),
        new LevelProps(FruitItem.Key,        5000,   100, 87, 95, 50, 120,  100,  60,  105,  0,    0,  0, 0, 0),
        new LevelProps(FruitItem.Key,        5000,   100, 87, 95, 50, 120,  100,  60,  105,  0,    0,  0, 0, 0),
        new LevelProps(FruitItem.Key,        5000,   90,  79, 95, 50, 120,  100,  60,  105,  0,    0,  0, 0, 0)];
    // new LevelProps(Fruit.Cherry,		100,  80,  71, 75, 40, 20,  80,  10,  85,  90, 79, 50, 6, 5),
    // new LevelProps(Fruit.Strawberry,	300,  90,  79, 85, 45, 30,  90,  15,  95,  95, 83, 55, 5, 5),
    // new LevelProps(Fruit.Peach,			500,  90,  79, 85, 45, 40,  90,  20,  95,  95, 83, 55, 4, 5),
    // new LevelProps(Fruit.Peach,			500,  90,  79, 85, 45, 40,  90,  20,  95,  95, 83, 55, 3, 5),
    // new LevelProps(Fruit.Apple,			700,  100, 87, 95, 50, 40, 100,  20, 105, 100, 87, 60, 2, 5),
    // new LevelProps(Fruit.Apple,			700,  100, 87, 95, 50, 50, 100,  25, 105, 100, 87, 60, 2, 5),
    // new LevelProps(Fruit.Grape,			1000, 100, 87, 95, 50, 50, 100,  25, 105, 100, 87, 60, 2, 5),
    // new LevelProps(Fruit.Grape,			1000, 100, 87, 95, 50, 50, 100,  25, 105, 100, 87, 60, 1, 5),
    // new LevelProps(Fruit.Galaxian,		2000, 100, 87, 95, 50, 60, 100,  30, 105, 100, 87, 60, 5, 3),
    // new LevelProps(Fruit.Galaxian,		2000, 100, 87, 95, 50, 60, 100,  30, 105, 100, 87, 60, 2, 5),
    // new LevelProps(Fruit.Bell,			3000, 100, 87, 95, 50, 60, 100,  30, 105, 100, 87, 60, 1, 5),
    // new LevelProps(Fruit.Bell,			3000, 100, 87, 95, 50, 80, 100,  40, 105, 100, 87, 60, 1, 3),
    // new LevelProps(Fruit.Key,			5000, 100, 87, 95, 50, 80, 100,  40, 105, 100, 87, 60, 1, 3),
    // new LevelProps(Fruit.Key,			5000, 100, 87, 95, 50, 80, 100,  40, 105, 100, 87, 60, 3, 5),
    // new LevelProps(Fruit.Key,			5000, 100, 87, 95, 50, 100,100,  50, 105, 100, 87, 60, 1, 3),
    // new LevelProps(Fruit.Key,			5000, 100, 87, 95, 50, 100,100,  50, 105, 100, 87, 60, 1, 3),
    // new LevelProps(Fruit.Key,			5000, 100, 87, 95, 50, 100,100,  50, 105,   0,  0,  0, 0, 0),
    // new LevelProps(Fruit.Key,			5000, 100, 87, 95, 50, 100,100,  50, 105, 100, 87, 60, 1, 3),
    // new LevelProps(Fruit.Key,			5000, 100, 87, 95, 50, 120,100,  60, 105,   0,  0,  0, 0, 0),
    // new LevelProps(Fruit.Key,			5000, 100, 87, 95, 50, 120,100,  60, 105,   0,  0,  0, 0, 0),
    // new LevelProps(Fruit.Key,			5000, 90,  79, 95, 50, 120,100,  60, 105,   0,  0,  0, 0, 0)    ];

    private _currentMap: string[];
    private _pillsRemaining: number;

    //todo: move to another class (and related properties)
    private static readonly map: string[] = [
        // 0,0                     29,0
        "                             ",
        " oooooooooooo  oooooooooooo  ",
        " o    o     o  o     o    o  ",
        " *    o     o  o     o    *  ",
        " o    o     o  o     o    o  ",
        " oooooooooooooooooooooooooo  ",
        " o    o  o        o  o    o  ",
        " o    o  o        o  o    o  ",
        " oooooo  oooo  oooo  oooooo  ",
        "      o     +  +     o       ",
        "      o     +  +     o       ",
        "      o  ++++++++++  o       ",
        "      o  +        +  o       ",
        "      o  +        +  o       ",
        "++++++o+++        +++o+++++++",
        "      o  +        +  o       ",
        "      o  +        +  o       ",
        "      o  ++++++++++  o       ",
        "      o  +        +  o       ",
        "      o  +        +  o       ",
        " oooooooooooo  oooooooooooo  ",
        " o    o     o  o     o    o  ",
        " o    o     o  o     o    o  ",
        " *oo  ooooooo++ooooooo  oo*  ",
        "   o  o  o        o  o  o    ",
        "   o  o  o        o  o  o    ",
        " oooooo  oooo  oooo  oooooo  ",
        " o          o  o          o  ",
        " o          o  o          o  ",
        " oooooooooooooooooooooooooo  ",
        "                             "
        // 0,30                   //27,29
    ];

    private static readonly startingAmountOfPills: number = 244;
    private readonly _fruitEvent: FruitEvent;

    constructor(public readonly levelNumber: number) {
        this._pillsRemaining = LevelStats.startingAmountOfPills;
        //this._pillsRemaining = 20;
        this._currentMap = [];
        LevelStats.map.forEach(r => this._currentMap.push(r));
        const props = LevelStats.levelProps[levelNumber];
        this._fruitEvent = new FruitEvent(props.fruit, props.fruitPoints);
    }

    get fruitEvent():FruitEvent {
        return this._fruitEvent;
    }

    get pillsRemaining() {
        return this._pillsRemaining;
    }

    get pillsEaten() {
        return LevelStats.startingAmountOfPills - this._pillsRemaining;
    }

    get levelProps(): LevelProps {
        const index = Math.min(this.levelNumber, 20);
        return LevelStats.levelProps[index];
    }

    getLevelPropsAt(level: number): LevelProps {
        return LevelStats.levelProps[level];
    }

    getGhostPatternProperties(): GhostsLevelPatternProperties {
        const p = new GhostsLevelPatternProperties();

        //debug:
        // if (this.levelNumber === 0) {
        //     p.Scatter1 = 111117;
        //     p.Chase1 = 20;
        //     p.Scatter2 = 7;
        //     p.Chase2 = 20;
        //     p.Scatter3 = 5;
        //     p.Chase3 = 20;
        //     p.Scatter4 = 5;
        //     p.Chase4 = Number.MAX_VALUE;

        //     return p;
        // }
        if (this.levelNumber === 0) {
           p.scatter1 = 7;
           p.chase1 = 20;
           p.scatter2 = 7;
           p.chase2 = 20;
           p.scatter3 = 5;
           p.chase3 = 20;
           p.scatter4 = 5;
           p.chase4 = Number.MAX_VALUE;

           return p;
        }

        if (this.levelNumber >= 1 && this.levelNumber <= 3) {
            p.scatter1 = 7;
            p.chase1 = 20;
            p.scatter2 = 7;
            p.chase2 = 20;
            p.scatter3 = 5;
            p.chase3 = 1033;
            p.scatter4 = 0;
            p.chase4 = Number.MAX_VALUE;

            return p;
        }

        p.scatter1 = 5;
        p.chase1 = 20;
        p.scatter2 = 7;
        p.chase2 = 20;
        p.scatter3 = 5;
        p.chase3 = 1037;
        p.scatter4 = 0;
        p.chase4 = Number.MAX_VALUE;

        return p;
    }

    pillEaten(cellPosition: Point) {
        this._fruitEvent.pillEaten();
        --this._pillsRemaining;

        const oldString = this._currentMap[cellPosition.y];
        const newString = this.replaceCharacter(oldString, "+", cellPosition.x);
        this._currentMap[cellPosition.y] = newString;
    }

    getCellContent(point: Point): string {
        return this._currentMap[point.y].charAt(point.x);
    }

    private replaceCharacter(source: string, replacement: string, positon: number): string {
        return source.substr(0, positon) + replacement + source.substr(positon + replacement.length);
    }
}