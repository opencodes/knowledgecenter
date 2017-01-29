## What is BEM and explain why using something like it could be useful in your CSS?

The Block, Element, Modifier methodology (commonly referred to as BEM) is a popular naming convention for classes in HTML and CSS. Developed by the team at Yandex, its goal is to help developers better understand the relationship between the HTML and CSS in a given project.
Here's an example of what a CSS developer writing in the BEM style might write:
````
/* Block component */
.btn {}

/* Element that depends upon the block */ 
.btn__price {}

/* Modifier that changes the style of the block */
.btn--orange {} 
.btn--big {}
````
In this CSS methodology a block is a top-level abstraction of a new component, for example a button: .btn { }. This block should be thought of as a parent. Child items, or elements, can be placed inside and these are denoted by two underscores following the name of the block like .btn__price { }. Finally, modifiers can manipulate the block so that we can theme or style that particular component without inflicting changes on a completely unrelated module. This is done by appending two hyphens to the name of the block just like btn--orange.

The markup might then look like this:
````
<a class="btn btn--big btn--orange" href="http://css-tricks.com">
  <span class="btn__price">$9.99</span>
  <span class="btn__text">Subscribe</span>
</a>
````
***Why should we consider BEM?***

- If we want to make a new style of a component, we can easily see which modifiers and children already exist. We might even realize we don't need to write any CSS in the first place because there is a pre-existing modifier that does what we need.
- If we are reading the markup instead of CSS, we should be able to quickly get an idea of which element depends on another (in the previous example we can see that .btn__price depends on .btn, even if we don't know what that does just yet.)
- Designers and developers can consistently name components for easier communication between team members. In other words, BEM gives everyone on a project a declarative syntax that they can share so that they're on the same page.

## CSS Selectors
- 	Universal selector
- 	Type selector
- 	Attribute selectors
- 	Structural pseudo-classes
-	  The link pseudo-classes
-   The user action pseudo-classes
- The target pseudo-class	
- The :lang() pseudo-class	
- states pseudo-classes	
- states pseudo-classes	
- ::first-line pseudo-element	
- ::first-letter pseudo-element	
- ::before pseudo-element	
- ::after pseudo-element
- Class selectors	
- ID selectors	
- Negation pseudo-class	
- Descendant combinator	
- Child combinator	
- Adjacent sibling combinator	
- General sibling combinator	
