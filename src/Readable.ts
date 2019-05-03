import { Readable as ReadableStream } from "stream";

// this readable is un infinite reader
// it will produce the letters from the array `this.source`
export class Readable extends ReadableStream {

    // source of data
    private source: string[];
    // where we are reading
    private cursor: number;

    // function just for fun and understanding
    private readonly hiThere: (props: any) => void;

    constructor(highWaterMark: number, callback: (props: any) => void) {
        super({
            highWaterMark,
            objectMode: true
        });
        this.cursor = 0;
        this.source = `From the beginning, Vampire Weekend were winners: charming, relatively lighthearted; Columbia students one year, festival headliners the next. They had cute sweaters and smart jokes; they wrote with wit and curiosity about the tapestry of privileged life; they carried themselves with an almost infuriating sparkle. But they were also manic, weird, and provocatively cross-cultural, mixing up digital dancehall and string sections, Latin punk and raga in ways that didn’t quite fit. And despite their superficial politeness, there was something deeply antagonistic about them, the vestigial bite of suburban kids who grew up loving punk and hardcore but never quite felt entitled to its anger, the indie-rock band bent on breaking up the monopoly rock held over guitar-based music.
            `.split('');
        this.hiThere = callback;
    }

    _read(size: number): void {
        const nextCursor = size + this.cursor;

        let contentToPush;
        if (nextCursor < this.source.length) {
            contentToPush = this.source.slice(this.cursor, nextCursor);
        } else {
            contentToPush = this.source.slice(this.cursor, this.source.length);
            contentToPush.concat(this.source.slice(0, nextCursor - this.source.length));
        }

        contentToPush.map(letter => {
           this.push({
               cursor: this.cursor,
               letter
           });
           if (this.cursor === this.source.length -1) {
               this.cursor = 0;
           } else {
               this.cursor++;
           }
        });

        this.hiThere({size, rl:this.readableLength});
    }
}
