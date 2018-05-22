/* Q-B: (your files: q-b.html, q-b.js – if you think you need more – let them start with q-b-[whatever].js)
You know that DOM-operations are slow operations. Write a HTML page that contains 2 form fields. Connect (include and initialize)
a 'class' like the following to that page – consider the 2 fields as for example a row of a spreadsheet component where you usually
can have an unpredictable number of such fields depending on the resultset that goes into the final widget:
function PAGE() {
}
PAGE.prototype.getDocumentContent = function() {
}
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
