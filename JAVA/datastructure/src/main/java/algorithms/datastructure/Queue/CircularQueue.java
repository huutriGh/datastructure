package algorithms.datastructure.Queue;

public interface CircularQueue<E> extends Queue<E> {

    /**
     * Rotates the font element ò the queue to back of the queue
     * This dose nothing if the queue is empty
     */
    void rotate();
    
}
