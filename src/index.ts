import {Readable} from "./Readable";
import {Writable} from "./Writable";
import {Transform} from "./Transform";

const readable = new Readable(10, function(props) {
    console.log(`R s${props.size} rs${props.rl}`)
});

const transform = new Transform(10, function(props) {
    console.log(`T rl: ${props.rl} wl: ${props.wl}`);
});

const writable = new Writable(10, function(props) {
    console.log(`W wl: ${props.wl}`)
});

readable
    .on('close', () => {
    });

writable
    .on('drain', () => {
    });

readable.pipe(transform).pipe(writable);
