````
(function(){
    var arr = [1,2,3,4,5,6,7,8,9,10,11,22];
    var url = "http://localhost:3000/api/";
    
    
    function executeAjaxRequest(url, arr, rate){
        if(arr.length){
            $.getJSON(url + arr[0]).success(function(){  
                rate ++;

                if(arr.length && rate >= 1 && rate <= 4){
                    arr.splice(0,1);
                    executeAjaxRequest(url, arr, rate);
                }
            });
        }
        
        if(arr.length && rate >= 1 && rate <= 4){console.log(arr.length);
                                           
            arr.splice(0,1);  
            if(arr.length){                                     
                executeAjaxRequest(url, arr, rate-1);
            }
        }
        
    }
    
    executeAjaxRequest(url, arr, 4);
})();
````
