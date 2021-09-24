package algorithms.datastructure.LinkedList;

public class DoubleLinkedList<E> {

    public static class Node<E> {

        private E element;
        private Node<E> prev;
        private Node<E> next;

        public Node(E element, Node<E> prev, Node<E> next) {
            this.element = element;
            this.prev = prev;
            this.next = next;
        }

        public E getElement() {
            return element;
        }

        public void setElement(E element) {
            this.element = element;
        }

        public Node<E> getPrev() {
            return prev;
        }

        public void setPrev(Node<E> prev) {
            this.prev = prev;
        }

        public Node<E> getNext() {
            return next;
        }

        public void setNext(Node<E> next) {
            this.next = next;
        }

    }

    private Node<E> head = null;
    private Node<E> tail = null;
    private int size = 0;

    public DoubleLinkedList() {
        head = new Node<>(null, null, null);
        tail = new Node<>(null, head, null);
        head.setNext(tail);
    }

    public Node<E> getHead() {
        return head;
    }

    public void setHead(Node<E> head) {
        this.head = head;
    }

    public Node<E> getTail() {
        return tail;
    }

    public void setTail(Node<E> tail) {
        this.tail = tail;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }

    public int size() {
        return size;
    }

    public boolean isEmpty() {

        return size == 0;

    }

    public void addFirst(E e) {

        addBetween(e, head, head.getNext());
    }

    public void addLast(E e) {

        addBetween(e, tail.getPrev(), tail);
    }

    public E removeFirst() {

        if (isEmpty())
            return null;

        return remove(head.getNext());
    }
    public E removeLast() {

        if (isEmpty())
            return null;

        return remove(tail.getPrev());
    }

    private void addBetween(E element, Node<E> predecessor, Node<E> successor) {

        Node<E> newNode = new Node<E>(element, predecessor, successor);
        predecessor.setNext(newNode);
        successor.setPrev(newNode);
        size++;

    }

    private E remove(Node<E> node) {

        Node<E> predecessor = node.getPrev();
        Node<E> successor = node.getNext();
        predecessor.setNext(successor);
        successor.setPrev(predecessor);
        return node.getElement();
    }

}
