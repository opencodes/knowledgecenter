### Explain the box-model and how it affects various CSS properties ?
In HTML every element is considered as box and having 4 properties related to that.
- Content : The content of box where where text or media appears.
- Padding : Clears an area around the content
- Border : A line of certain width which wrap around content and padding
- Margin : An empty space of certain width wrap around on top of border, with transparent background


//////////////////////////////////////
//	         Margin				     //
//	///////////////////////////////  //
//  //       Border				 //  // 
//	// ////////////////////////  //  // 
//  // //    Padding		 //  //  // 
//  // // /////////////////  //  //  // 
//  // // // Content     //  //  //  //
//  // // // //////////////	 //  //  //
//  // //                    //  //  //
//  // ////////////////////////  //  //
//  // 							 //  //
//  ///////////////////////////////  //
//  								 //
///////////////////////////////////////

Element width and height : The actual width and height of any element includes content, padding and border. 

Width = Content width + Padding(left + right) +  Border(left + right);
Height = Content width + Padding(top + bottom) +  Border(top + bottom);
If outer space is considerable than we can include margin as well.

Note for old IE: Internet Explorer 8 and earlier versions, include padding and border in the width property. To fix this problem, add a <!DOCTYPE html> to the HTML page.
### HTML <script> Tag async and defer
Note: There are several ways an external script can be executed:

If async="async": The script is executed asynchronously with the rest of the page (the script will be executed while the page continues the parsing)
If async is not present and defer="defer": The script is executed when the page has finished parsing
If neither async or defer is present: The script is fetched and executed immediately, before the browser continues parsing the page
