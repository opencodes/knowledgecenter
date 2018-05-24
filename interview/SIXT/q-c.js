/*Q-C: (your file: q-c.js)
Imagine an application that utilizes an iframe where another application from another domain is loaded. How would you implement
communication between those 2 applications to pass data from one application to the other. Explain it first and what problems might
occur. Then propose your solution and show an example on how you would implement it – and explain why you did chose that
option
*/


document.getElementById('my-btn').addEventListener('click', function (e) {
    iframe_id.contentWindow.postMessage({ 'message': 'Please listen to window' }, 'http://localhost');
}, false);

// For Cross window put origin * in second parameter
document.getElementById('my-btn2').addEventListener('click', function (e) {
    iframe_id_2.contentWindow.postMessage({ 'message': 'Please listen to window' }, 'http://localhost');
}, false);


window.addEventListener('message', function (e) {
    console.log(e.data)
}, false);
