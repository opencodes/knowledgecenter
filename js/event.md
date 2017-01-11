## What is Event Delegation?
Event delegation is a process to use event propagation(bubbling) to handle event on higher element than where it is originated.
It allows us to bind a single event for the DOM which exist now or in future.

eg. $('div').on('click', 'a', function(){
})
