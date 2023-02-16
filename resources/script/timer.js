class TickTimer{
    /**
     * A tick based counter/timer
     */
    constructor(){
        /**
         * The method of ticking. 
         */
        this.method='timer';
        /**
         * The frequency of the ticking, it uses milliseconds.
         */
        this.tickFrequency=10; // Milliseconds per tick
        /**
         * The number of ticks.
         */
        this.ticks=0;
        /**
         * If the timer is running
         */
        this.running=false;
        Object.freeze(this); // Make sure they don't break anything(that wouldn't be good)
        
    }
    /**
     * Reset the number of ticks
     */
    reset(){
        this.ticks = 0;
        this.running = false;
    }
    /**
     * Count up by one tick
     */
    tick(){
        if(this.method == "count"){
            this.ticks+=1;
        } else if(this.method == "timer"){
            if(this.running){
                setTimeout(this.tick,this.tickFrequency);
            }
        }
    }
    /**
     * Start ticking
     */
    start(){
        if(this.method == "timer"){
            this.running = true;
        }
    }
    /**
     * Stop ticking
     */
    stop(){
        if(this.method == "timer"){
            this.running = false;
        }
    }
}