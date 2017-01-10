### Searching for Patterns
````
(function(){
    var str = "This is a test text",
        niddle = "text";
    
    function findOccurenceOfPattern(str, niddle){
        var start = 0;
        var tempstring = "";
        var index = 0;
        
        for(var i = 0; i < str.length; i++){
            //console.log(" --- " + str.charAt(i),"niddle" ,niddle.charAt(index))
            if(str.charAt(i) == niddle.charAt(index)){
                if(index == 0){
                    start = i;
                }
                //console.log(" --- " + str.charAt(i))
                tempstring += str.charAt(i);
                index ++;
            }else{
                tempstring = "";
                index = 0;
            }
            
            //console.log("tempstring : "+ tempstring," start : "+ start +" index : "+ index)
            
            if(niddle === tempstring){
                console.log("String '" + niddle + "' found at "+ start +" in :" + str)
                return start;
            }
        }
    }
    findOccurenceOfPattern(str, niddle);
    
})();
````
