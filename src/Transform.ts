import {Transform as TransformStream} from 'stream';

// this transform stream is grouping chunks by 5
export class Transform extends TransformStream {

    // the property where we aggregate chunks so that we are able to send groups
    private club: any[];
    // function just for fun and understanding
    private readonly hiThere: (props?: any) => void;

    constructor(highWaterMark: number, callback: (props?: any) => void) {
        super({
            objectMode: true,
            highWaterMark
        });
        this.club = [];
        this.hiThere = callback;
    }

    // the callback function must be called after a chunk is processed so that another chunk can be processed
    // calling the callback with a second argument allow the function to actually deliver the transform chunked
    _transform(chunk: any, _encoding: string, callback: (error?: (Error | null), data?: any) => void): void {
        this.club.push(chunk);
        if(this.club.length === 5) {
            this.hiThere({
                rl: this.readableLength,
                wl: this.writableLength
            });
            callback(null, this.club);
            this.club = [];
        } else {
            callback();
        }
    }

}
