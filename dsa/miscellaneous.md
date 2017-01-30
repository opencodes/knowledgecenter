###Linked Lists
This is an extremely popular topic. I've had linked lists on every interview.
You must be able to produce simple clean linked list implementations quickly.
Implement Insert and Delete for
singly-linked linked list
sorted linked list
circular linked list

int Insert(node** head, int data)
int Delete(node** head, int deleteMe)
Split a linked list given a pivot value
void Split(node* head, int pivot, node** lt, node** gt)
Find if a linked list has a cycle in it. Now do it without marking nodes.
Find the middle of a linked list. Now do it while only going through the list once. (same solution as finding cycles)
### Strings
Reverse words in a string (words are separated by one or more spaces). Now do it in-place. By far the most popular string question!
Reverse a string
Strip whitespace from a string in-place
void StripWhitespace(char* szStr)
Remove duplicate chars from a string ("AAA BBB" -> "A B")
int RemoveDups(char* szStr)
Find the first non-repeating character in a string:("ABCA" -> B )
int FindFirstUnique(char* szStr)
More Advanced Topics:
You may be asked about using Unicode strings. What the interviewer is usually looking for is:
each character will be two bytes (so, for example, char lookup table you may have allocated needs to be expanded from 256 to 256 * 256 = 65536 elements)
that you would need to use wide char types (wchar_t instead of char)
that you would need to use wide string functions (like wprintf instead of printf)
Guarding against being passed invalid string pointers or non nul-terminated strings (using walking through a string and catching memory exceptions
### Binary Trees
Implement the following functions for a binary tree:
Insert
PrintInOrder
PrintPreOrder
PrintPostOrder
Implement a non-recursive PrintInOrder
### Arrays
You are given an array with integers between 1 and 1,000,000. One integer is in the array twice. How can you determine which one? Can you think of a way to do it using little extra memory.
You are given an array with integers between 1 and 1,000,000. One integer is missing. How can you determine which one? Can you think of a way to do it while iterating through the array only once. Is overflow a problem in the solution? Why not?
Returns the largest sum of contiguous integers in the array
Example: if the input is (-10, 2, 3, -2, 0, 5, -15), the largest sum is 8
int GetLargestContiguousSum(int* anData, int len)
Implement Shuffle given an array containing a deck of cards and the number of cards. Now make it O(n).
Return the sum two largest integers in an array
int SumTwoLargest(int* anData, int size)
Sum n largest integers in an array of integers where every integer is between 0 and 9
int SumNLargest(int* anData, int size, int n)
### Queues
Implement a Queue class in C++ (which data structure to use internally? why? how to notify of errors?)
Other
Count the number of set bits in a byte/int32 (7 different solutions)
Difference between heap and stack? Write a function to figure out if stack grows up or down.
SQL query to select some rows out of a table (only because I had SQL on the resume)
Open a file as securely as possible (assume the user is hostile -- list all the nasty things that could happen and checks you would have to do to)
Implement a function to return a ratio from a double (ie 0.25 -> 1/4). The function will also take a tolerance so if toleran ce is .01 then FindRatio(.24, .01) -> 1/4
int FindRatio(double val, double tolerance, int& numerator, int& denominator)
### Puzzles
You have 2 supposedly unbreakable light bulbs and a 100-floor building. Using fewest possible drops, determine how much of an impact this type of light bulb can withstand. (i.e. it can withstand a drop from 17th floor, but breaks from the 18th).
Note that the ever-popular binary search will give you a worst case of 50 drops. You should be able to do it with under 20.
There are n gas stations positioned along a circular road. Each has a limited supply of gas. You can only drive clockwise around the road. You start with zero gas. Knowing how much gas you need to get from each gas station to the next and how much gas you can get at each station, design an algorithm to find the gas station you need to start at to get all the way around the circle.
Out of 10 coins, one weighs less then the others. You have a scale.
How can you determine which one weighs less in 3 weighs?
Now how would you do it if you didn't know if the odd coin weighs less or more?
What is the next line in the following sequence:
1
11
21
Answer: it's 1211 and the next is 111221
Design Questions
How would you design a server that has to process a fair number of good number of requests a second. What if you didn't know how many requests you'd be getting? What if requests had different priorities? (I always think of the Apache design for this question)
Design malloc and free. (give up? see how G++ malloc works or this page for more examples)
Design an elevator control system. Don't forget buttons on every floor and supporting multiple elevators. (What objects/methods/properties/how components communicate)
Design a chess game (what objects? what methods? which data where? how will it work?)
Design a deck of cards class (object/methods/data)
How would you design the infrastructure front half of a very large web ecommerce site? what if it was very personalized? (how sessions are handled? where and what you can cache? how to load-balance?)
### Concurrency
Difference between Mutexes and Critical Sections?
What are Reentrant Locks? Implement a Reentrant Lock with Mutexes.
Implement a thread-safe class that will read/write to/from a buffer
TSBuffer::TSBuffer(int size)
int TSBuffer::Read(char* buff, int max_size)
int TSBuffer::Write(char* buff, int size)
Windows-specific Questions
What is the IUnknown COM interface?
Synchronization primitives available in Windows (see MSDN documentation)
Basic structure of a Win32 program (WinMain, Message processing)
C# and WPF-specific Questions
What's the difference between Delegates and Events?
How does the C# ThreadPool work?
How does the C# Garbage Collector work? What is a Generational Garbage Collector? (see here)
What is Boxing/Uboxing? (see here)
What are Routed Events?
What are Dependency Properties?
### Networking
I got most of these because I have a lot of networking on my resume.
Difference between TCP and UDP? When would you want to use one over the other?
How would approach guaging performance of webpages/parts on a very large website?
Questions you are unlikely to get unless you claim a lot of IP experience
How does traceroute work?
How does path MTU discovery work?
How can one poison a BGP peer?
Non-Technical Questions
All of the following are very common. It's best to have canned answers.
What do you want to do?
Describe your perfect job?
How did your interview go? How did you like the group you interviewed with?
Rate your C++ proficiency on the scale of 1 to 10.
What have you been up to since you were laid off or finished school?
Why do you want to work at X?
What reservations do you have working at X?
Do you like working alone or in a group?
Discuss your greatest accomplishment over the last couple years.
Discuss one big problem you solved in a work/school project.
How do you handle conflict in a group?
How much do you want to make? How much did you make at your previous position?

Mysql engine and diff in innodb and myiseam
Find missing element in array of 99 length
How to optimize query
How to secure php
Store tree structure in mysql
Sort array best approach

