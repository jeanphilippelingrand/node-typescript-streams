import { Writable as WritableStream } from "stream";

export class Writable extends  WritableStream {
    private readonly hiThere: (props?: any) => void;

    constructor(highWaterMark: number, callback: (props?: any) => void) {
        super({
            highWaterMark,
            objectMode: true
        });
        this.hiThere = callback ;
    }

    _write(_chunk: any, _encoding: string, callback: (error?: (Error | null)) => void): void {
        this.hiThere({wl: this.writableLength});
        console.log(_chunk)
        setTimeout(function() {
            console.log('WDONE');
            callback();
        }, 100)
    }
}
// function randomIntFromInterval(min,max) // min and max included
// {
//     return Math.floor(Math.random()*(max-min+1)+min);
// }
