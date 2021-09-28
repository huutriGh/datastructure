package algorithms.datastructure.Queue;

import algorithms.datastructure.LinkedList.SinglyLinkedList;

public class LinkedListQueue<E> implements Queue<E> {

    SinglyLinkedList<E> data;

    public LinkedListQueue() {
        data = new SinglyLinkedList<>();
    }

    @Override
    public int size() {

        return data.size();
    }

    @Override
    public boolean isEmpty() {

        return data.size() == 0;
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

}
