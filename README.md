# nodeJS Streams

This small typescript nodeJS application allows you to understand 
1. How to implement Writable, Readable and Transform streams (Duplex streams not explained yet)
1. Understand how nodeJS `.pipe()` function actually manage each stream buffer. 
1. Understand the 
    11. highWaterMark constructor parameter
    11. readable and writable length internal properties

IMPORTANT: 
1. *There is no yet explicit explanations but this is ready to be started and play with the parameters and the logs to understand the streams concept.*
1. *This is not a library*


## installation

1. `npm install`
1. `npm run start`

As is, once you start the application it never ends. 
The readable stream used as source of data is continuously delivering data in a infinite loop way.
