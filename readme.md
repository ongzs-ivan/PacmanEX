# Pacman

Pacman clone made in TypeScript. 

The goal of this project was both to learn TypeScript and a dedicated engine to run Pacman.
This project is based on Steve Gunn's faithful reproduction of [PacMan](https://github.com/SteveDunn/Pacman-TypeScript)

## License
GNU GENERAL PUBLIC LICENSE Version 3 [#](LICENSE.txt)

## Project Layout

### Folders

#### Core
This folder contains core items that essentially make up a basic game engine.
Things like Canvas, Sprite, timers, and fundamental types such as Point and Rect.

#### Game
Game specific types, such as GameStats, PlayerStats, Tile, Fruit, and PacMan.

#### Actors
Classes that inherit IActor and/or Sprite.

#### Behaviors
Contains the AI logic for the ghosts

#### Events
Triggers that cause a change to the game world (e.g. spawning fruits, ghosts becoming scared)

#### Scenes
Game-mode specific types (also functions as a way to play cutscenes).


