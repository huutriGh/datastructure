package algorithms.datastructure.Queue;

public interface Queue<E> {

    /**
     * Returns the number of elements in the queue
     * 
     * @return
     */

    int size();

    /**
     * Test whether the queue is empty
     * 
     * @return
     */
    boolean isEmpty();

    /**
     * Insert an element at rear of the queue
     */
    void enqueue(E e);

    /**
     * Returns, but does not remove, the first element of the queue (null if empty)
     * 
     * @return E
     */
    E first();

    /**
     * Removes and returns the first element of the queue (Null if empty)
     * 
     * @return E
     */
    E dequeue();

}
