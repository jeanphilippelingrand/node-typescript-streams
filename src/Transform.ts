import {Transform as TransformStream} from 'stream';

export class Transform extends TransformStream {

    private club: any[];
    private readonly hiThere: (props?: any) => void;

    constructor(highWaterMark: number, callback: (props?: any) => void) {
        super({
            objectMode: true,
            highWaterMark
        });
        this.club = [];
        this.hiThere = callback;
    }

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
