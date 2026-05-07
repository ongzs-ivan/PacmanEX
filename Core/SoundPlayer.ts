/// <reference types="howler"/>

declare var Howl: any;

export class SoundPlayer {

    private _loaded: boolean;
    private readonly _howl: Howl;

    constructor(path: string, whenLoaded: () => void) {

        this._howl = new Howl({
            src: [path]
        });

        (this._howl as any).on("load", () => {
            whenLoaded();
            this._loaded = true;
        });

        (this._howl as any).on("loaderror", () => {
            whenLoaded();
            this._loaded = true;
        });
    }

    get volume(): number {
        return (this._howl as any).volume();
    }

    set volume(value: number) {
        (this._howl as any).volume(value);
    }

    get isPlaying() {
        return (this._howl as any).playing();
    }

    set loop(value: boolean) {
        (this._howl as any).loop(value);
    }

    mute() {
        return (this._howl as any).mute(true);
    }

    unmute() {
        return (this._howl as any).mute(false);
    }

    get isLoaded() {
        return this._loaded;
    }

    stop() {
        (this._howl as any).stop();
    }

    play() {
        if (!this.isLoaded) {
            throw new Error(`Not loaded!`);
        }

        if ((this._howl as any).loop() && (this._howl as any).playing()) {
            return;
        }

        (this._howl as any).play();
    }

    tryPlay() {
        if ((this._howl as any).loop() && !(this._howl as any).playing()) {
            return;
        }

        (this._howl as any).play();
    }
}
