
## Service Vs Factory ##
------------------------
https://toddmotto.com/factory-versus-service
- Service
A Service is just a function for the business layer of the application, it’s just a simple function. It acts as a constructor function and is invoked once at runtime with new, much like you would with plain JavaScript (Angular is just calling a new instance under the hood for us).

- Use a .service() when you want to just create things that act as public APIs, such as the getEmails method we defined above.

- Factory

A factory is not just “another way” for doing services, anyone that tells you that is wrong. It can however, give you the same capabilities of a .service(), but is much more powerful and flexible.
- A factory is not just a “way” of returning something, a factory is in fact a design pattern.
- Factories create Objects, that’s it. Now ask yourself: what type of Object do I want? With .factory(), 
	we can create various Objects, such as 
	- new Class instances (with .prototype or ES2015 Classes), 
	- return Object literals, 
	- return functions and closures, 
	- or even just return a simply String. 
	- You can create whatever you like, that’s the rule.


Say we have:

app.factory('a', fn);
app.service('b', fn);
app.provider('c', fn);
The difference between the three is that:

a's stored value comes from running fn , in other words: fn()
b’s stored value comes from newing fn, in other words: new fn()
c’s stored value comes from first getting an instance by newing fn, and then running a $get method of the instance
which means, there’s something like a cache object inside angular, whose value of each injection is only assigned once, when they've been injected the first time, and where:

cache.a = fn()
cache.b = new fn()
cache.c = (new fn()).$get()
This is why we use this in services, and define a this.$get in providers.
	
## Why Angular 2 ?  ##
------------------------.
Angular 1.x limitations

- Angular 1.x cannot be server-side rendered
- Angular 1.x cannot be compiled into native code
- It also cannot render on other environments very well
- Understanding the limitations of Angular 1.x also boils down to the way it processes the DOM. 
- Angular would bind onto existing DOM, and add super powers.
 
These are serious conceptual changes that can or could not simply be “added” to the existing codebase as new APIs - thus Angular 2 was born.

Angular 2

The reason Angular 2 was created was to 
- address the above issues, 
- which also include issues $scope presents when trying to achieve the above goals. 
- The way that dirty-checking was carried out via the $digest loop also means a rewrite was necessary to achieve the new goals. 
- Think of Angular 2 as an enabler to achieve cross-platform rendering with immense scalability, speed, performance and power.

## Transclude  ##
------------------------
http://teropa.info/blog/2015/06/09/transclusion.html
http://teropa.info/build-your-own-angular

