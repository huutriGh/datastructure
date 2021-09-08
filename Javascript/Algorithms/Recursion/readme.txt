
- Recursion is technical by which a method make one or more call to itself during excution, 
  or by which a datastruture relies upon smaller instances of the very same type of structure in its representation.

- Have one or more base cases, when base case reach no further recursive calls are made. 
- Have one or more recursive cases,  which define the function in terms of itself.

* Each time a method called, a structure is created to store information about the progress of that invocation of the method ( Parameter, local variable ...). Known Activation frame
* When the excution of a method lead to nested method call, the excution of former call is suspended 
  and its frame store place of source code at which the flow of control continue upon return of
  the nested call. A new frame is created for each nested method call. 
  This process is used for both in the standard one method call different method, or in recursive case where a method call itself. The point key is to have a separate frame for each active call.






==============================================================================
DO: 
1. Identify the base case
2. Identify the recursive case
3. Get closer and closer and return we needed. Usually you have two returns.