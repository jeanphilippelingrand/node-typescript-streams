# nodeJS Streams

This small typescript nodeJS application allows you to understand 
1. How to implement Writable, Readable and Transform streams (Duplex streams not explained yet)
1. Understand how nodeJS `.pipe()` function actually manage each stream buffer. 
1. Understand the highWaterMark parameter

There is no yet explicit explanations but this is ready to be started. Play with the parameters and the logs to understand the flows.

## installation

1. `npm install`
1. `npm run start`

As is, once you start the application it never ends. 
The readable stream used as source of data is continuously delivering data in a infinite loop way.
