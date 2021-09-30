package algorithms.datastructure.LinkedList;

/**
 * SinglyLinkedList
 */
public class SinglyLinkedList<E> {

    public static class Node<E> {

        private E element;
        private Node<E> next;

        public Node(E element, Node<E> next) {
            this.element = element;
            this.next = next;
        }

        public E getElement() {
            return element;
        }

        public void setElement(E element) {
            this.element = element;
        }

        public Node<E> getNext() {
            return next;
        }

        public void setNext(Node<E> next) {
            this.next = next;
        }

    }

    public SinglyLinkedList() {

    }

    private Node<E> head = null;
    private Node<E> tail = null;
    private int size = 0;

    public int size() {

        return size;
    }

    public boolean isEmpty() {
        return size == 0;
    }

    public E first() {

        if (isEmpty())
            return null;
        return head.getElement();
    }

    public E last() {
        if (isEmpty())
            return null;
        return tail.getElement();
    }

    public void addFirst(E e) {

        head = new Node<>(e, head);
        if (size == 0) {
            tail = head;
        }
        ;
        size++;

    }

    public void addLast(E e) {
        Node<E> newest = new Node<>(e, null);

        if (isEmpty()) {
            head = newest;
        } else {
            tail.setNext(newest);
        }
        size++;

    }

    public E removeFirst() {

        if (isEmpty())
            return null;

        E anwser = head.getElement();
        head = head.getNext();
        size--;
        if (size == 0) {
            tail = null;
        }
        return anwser;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        @SuppressWarnings("unchecked")
        SinglyLinkedList<E> other = (SinglyLinkedList<E>) obj;

        if (size != other.size)
            return false;

        Node<E> walkA = head;
        Node<E> walkB = other.head;

        while (walkA != null) {

            if (!walkA.getElement().equals(walkB.getElement())) {
                return false;
            }
            walkA = walkA.getNext();
            walkB = walkB.getNext();
        }

        return true;
    }

    @Override
    public SinglyLinkedList<E> clone() throws CloneNotSupportedException {
        @SuppressWarnings("unchecked")
        SinglyLinkedList<E> other = (SinglyLinkedList<E>) super.clone();
        if (size > 0) {
            other.head = new Node<E>(head.getElement(), null);
            Node<E> walk = head.getNext();
            Node<E> otherTail = other.head;
            while (walk != null) {

                Node<E> newest = new Node<E>(walk.getElement(), null);
                otherTail.setNext(newest);
                otherTail = newest;
                walk = walk.getNext();
            }
        }

        return other;
    }

}