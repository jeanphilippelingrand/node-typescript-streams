import { Writable as WritableStream } from "stream";

// this stream imitate the writing of data somewhere
// writing duration is set between 10ms and 1s
export class Writable extends  WritableStream {

    // function just for fun and understanding
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
        setTimeout(function() {
            console.log('WDONE');
            callback();
        }, randomIntFromInterval(10, 1000))
    }
}

// this is to imitate some randomness in the writing process
function randomIntFromInterval(min,max) // min and max included
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
