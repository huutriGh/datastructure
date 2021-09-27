package algorithms.datastructure.Stacks;

import algorithms.datastructure.LinkedList.SinglyLinkedList;

public class LinkedStack<E> implements Stack<E> {

    SinglyLinkedList<E> data;

    public LinkedStack() {
        data = new SinglyLinkedList<>();
    }

    @Override
    public int size() {

        return data.size();
    }

    @Override
    public boolean isEmpty() {

        return data.isEmpty();
    }

    @Override
    public void push(E e) {

        data.addFirst(e);
    }

    @Override
    public E top() {

        return data.first();
    }

    @Override
    public E pop() {

        return data.removeFirst();

    }

}
