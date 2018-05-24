/* Q-B: (your files: q-b.html, q-b.js – if you think you need more – let them start with q-b-[whatever].js)
You know that DOM-operations are slow operations. Write a HTML page that contains 2 form fields. Connect (include and initialize)
a 'class' like the following to that page – consider the 2 fields as for example a row of a spreadsheet component where you usually
can have an unpredictable number of such fields depending on the resultset that goes into the final widget:

The HTML document will not contain any JavaScript written in it except the script include of that mentioned JavaScript class (or
more classes if u feel you need them). Implement the PAGE class and the getDocumentContent method (and of course
everything else you feel is necessary). The method should return the values of the document's fields in the following form whenever
it is called:
{ “field1”: value, “field2”: value }
Requirements:
• while that example could look more then basic to you, you might even wonder what the point should be – so read the
following very carefully:
• implement it in a way so that overall DOM operations are minimized (that means even during the lifetime of the
application – in the best case – during that lifetime no DOM operation happens at all when using the
getDocumentContent method)
• the 2 form fields are just meant as an example – write the code in such a generic way that if you would add more fields or
rename them (even changing the id if you use it) – it still would work without changing the JavaScript code
• write the JavaScript code in plain JavaScript (don't include any external lib like jQuery or whatever)
• optimize your code – write it as if it would be production code
*/

function ready(callback) {
    // in case the document is already rendered
    if (document.readyState != 'loading') callback();
    // modern browsers
    else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
    // IE <= 8
    else document.attachEvent('onreadystatechange', function () {
        if (document.readyState == 'complete') callback();
    });
}

ready(function () {
    console.log('I am ready');

    var PAGE = function  (el, n)  { 
        this.elementSelector = el;
        this.parentEl = document.getElementById(el);
        this.noOfField = n;
    }

    PAGE.prototype.init = function () {
        var input = document.createElement('input');
        input.setAttribute('name', 'field');
        for (var k = 0; k < this.noOfField; k++) {            
            var clonedEl = input.cloneNode();
            clonedEl.setAttribute('name', 'field_' + k);
            this.parentEl.appendChild(clonedEl);
        }
        this.bindClick();
    }

    PAGE.prototype.getDocumentContent  =  function ()  {
        var inputs = document.querySelectorAll('#'+this.elementSelector +' input');
        var res = {};
        for (var k = 0; k < inputs.length; k++) {  
            var input = inputs[k];
            res[input.getAttribute('name')] = input.value;
        }
        return res;
    }

    PAGE.prototype.printValue = function(res){
        var output = document.getElementById('output');
        output.innerText = JSON.stringify(res);
    }

    PAGE.prototype.bindClick = function(){
        var _this = this;
        var inputs = document.querySelector('#'+this.elementSelector +' button');
        console.log(inputs)
        inputs.addEventListener('click', function () {
            _this.printValue()
        });
    }    

    var page = new PAGE('formId', 5, 'output');
    page.init();
    
});
