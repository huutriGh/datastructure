Quick sort:
    - The main idea is to apply Divide-and-Conquer paradigm.
    - Divide Sequency S into subsequency, recur to sort each Sequency, and then combine the sorted subsequency by a simple concatenation.
    - In particular, the Quick sort consists of the fowllowing tree steps:
    1. Divide: 
        - If S has at least two elements, select a specific element x from S, which is called the pivot.
        - As is common practice, choose the pivot x to be  the last element in S.
        - Remove all the elements form S and put them into three subsequency.
            + L, storing the elements in S less than x.
            + E, storing the elements in S equal to x,
            + G, storing the elements in S greater than x.
            Of course if the elements of S are distinct, then E hold just one element - the pivot itseft.
    