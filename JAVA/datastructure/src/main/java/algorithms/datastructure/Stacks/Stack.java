package algorithms.datastructure.Stacks;

public interface Stack<E> {

    /**
     * Returns the number of elements in the stack
     * 
     * @return the number of elements in the stack
     * 
     */
    int size();

    /**
     * Test whether the stack is empty
     * 
     * @return true if the stack is empty, false otherwise
     */
    boolean isEmpty();

    /**
     * Inserts an element at the top of the stack
     * 
     * @param e the element to be insertd
     */
    void push(E e);

    /**
     * Return but not remove, the element at the top of the stack
     * 
     * @return top element in the stack (or null if emty)
     */

    E top();

    /**
     * Removes and return the top element from the stack
     * 
     * @return element removed (or null if empty)
     */
    E pop();

}
