var observer = {
    /**
    * Method to add subscriber
    * @private
    * @method addSubscriber
    * @param {Object} callback
    * @return {Object} description
    */   
    addSubscriber : function(callback){
        if(typeof callback === "function"){
            this.subscribers[this.subscribers.length] = callback;
        }
    },
    /**
    * Method to remove subscriber
    * @private
    * @method removeSubscriber
    * @param {Object} subscriber
    * @return {Object} description
    */
    removeSubscriber : function(subscriber){
        for(var i = 0 ; i < this.subscribers.length; i++){
            if(this.subscribers[i] === subscriber){
                this.subscribers.splice(i,1);
            }            
        }
    },
    /**
    * Takes data and call all subscribers, passing the data to them
    * @private
    * @method publish
    * @param {Object} what
    * @return {Object} description
    */
    publish : function(what){
        for(var i = 0 ; i < this.subscribers.length; i++){
            this.subscribers[i](what);                       
        }
    },
    /**
    * Method that takes any object and turns into a publisher by adding all of the method mentioned previously to it
    * @private
    * @method make
    * @param {Object} o
    * @return {Object} description
    */
    make : function(o){
        for(var i in this){
            if(this.hasOwnProperty(i)){
                o[i] = this[i];
                o.subscribers = [];
            }            
        }
    }
}

var blogger = {
    writeBlogPost : function(){
        var content = "Today is "+ new Date();
        this.publish(content);
    }
}

var la_times = {
    newIssue : function(){
        var paper = "Martin have landed on earth";
        this.publish(paper);
    }
}
//Turn these object into publisher
observer.make(blogger);
observer.make(la_times);

// Now lets have  two subscriber jack and jill

var jack = {
    read : function(what){
        console.log("I just read that"+ what);
    }
}

var jill = {
    read : function(what){
        console.log("You didn't here it from me but "+ what);
    }
}

//Let jack and jill subscribe to event
blogger.addSubscriber(jack.read);
blogger.addSubscriber(jill.read);

//Let blogger write post
blogger.writeBlogPost();
