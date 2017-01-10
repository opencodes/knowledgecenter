### Searching for Patterns
````
(function(){
    var str = "This is a test text",
        niddle = "text";
    
    function findOccurenceOfPattern(str, niddle){
        var start = 0;
        var tempstring = "";
        var index = 0;
        var pos = 0;
        
        for(var i = 0; i < str.length; i++){
            //console.log(" --- " + str.charAt(i),"niddle" ,niddle.charAt(index))
            if(str.charAt(i) == niddle.charAt(index)){
                if(index == 0){
                    pos = i;
                }
                //console.log(" --- " + str.charAt(i))
                tempstring += str.charAt(i);
                index ++;
            }else{
                tempstring = "";
                index = 0;
            }
            
            if(niddle === tempstring){
                tempstring = "";
                index = 0;
                start.push(pos);
            }
            console.log("String '" + niddle + "' found at "+ start.join(' and ') +" in :" + str)
        }
    }
    findOccurenceOfPattern(str, niddle);
    
})();
````
