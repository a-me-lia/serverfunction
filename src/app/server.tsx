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
        sleep(1)
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

export default async function StartCounting(){

    let C = new Counter(10000)
    C.startIncrementing()

    return(
        C.number
    )

}