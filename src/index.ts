import {Readable} from "./Readable";
import {Writable} from "./Writable";
import {Transform} from "./Transform";

// where the data comes from
// callback called when data is pushed to the readable intern buffer
const readable = new Readable(10, function(props) {
    console.log(`R s${props.size} rs${props.rl}`)
});

// where we transform the data (we group chunks together)
// callback called when the data is delivered
const transform = new Transform(10, function(props) {
    console.log(`T rl: ${props.rl} wl: ${props.wl}`);
});

// we act like we write data somewhere and it takes some time
const writable = new Writable(10, function(props) {
    console.log(`W wl: ${props.wl}`)
});

readable.pipe(transform).pipe(writable);
