package algorithms.datastructure.Queue;

public class ArrrayQueue<E> implements Queue<E> {

    public static final int CAPACITY = 1000;
    private E[] data;
    private int f = 0;
    private int sz = 0;

    public ArrrayQueue() {
        this(CAPACITY);
    }

    @SuppressWarnings("unchecked")
    public ArrrayQueue(int capacity) {
        data = (E[]) new Object[capacity];
    }

    @Override
    public int size() {

        return sz;
    }

    @Override
    public boolean isEmpty() {

        return sz == 0;
    }

    @Override
    public void enqueue(E e) {
        if (sz == data.length)
            throw new IllegalStateException("Queue is full");
        int avail = (f + sz) % data.length;
        data[avail] = e;
        sz++;

    }

    @Override
    public E first() {

        if (isEmpty())
            return null;

        return data[f];
    }

    @Override
    public E dequeue() {

        if (isEmpty())
            return null;

        E anwser = data[f];
        data[f] = null;
        f = (f + 1) % data.length;
        sz--;

        return anwser;
    }

}
