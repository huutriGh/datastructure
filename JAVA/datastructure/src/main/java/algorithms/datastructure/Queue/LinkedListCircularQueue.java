package algorithms.datastructure.Queue;

import algorithms.datastructure.LinkedList.CircularlyLinkedList;

public class LinkedListCircularQueue<E> implements CircularQueue<E> {

    public CircularlyLinkedList<E> data = new CircularlyLinkedList<>();

    @Override
    public int size() {

        return data.size();

    }

    @Override
    public boolean isEmpty() {

        return data.isEmpty();
    }

    @Override
    public void enqueue(E e) {

        data.addLast(e);
    }

    @Override
    public E first() {

        return data.first();
    }

    @Override
    public E dequeue() {

        return data.removeFirst();
    }

    @Override
    public void rotate() {

        data.rotate();

    }

}
