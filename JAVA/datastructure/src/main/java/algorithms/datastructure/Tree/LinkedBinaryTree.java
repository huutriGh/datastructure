package algorithms.datastructure.Tree;

import java.util.Iterator;

public class LinkedBinaryTree<E> extends AbstractBinaryTree<E> {

    protected static class Node<E> implements Position<E> {

        private E element;
        private Node<E> parent;
        private Node<E> left;
        private Node<E> right;

        public Node(E element, Node<E> parent, Node<E> leftChild, Node<E> rightChild) {
            this.element = element;
            this.parent = parent;
            this.left = leftChild;
            this.right = rightChild;
        }

        public E getElement() {
            return element;
        }

        public void setElement(E element) {
            this.element = element;
        }

        public Node<E> getParent() {
            return parent;
        }

        public void setParent(Node<E> parent) {
            this.parent = parent;
        }

        public Node<E> getLeft() {
            return left;
        }

        public void setLeft(Node<E> left) {
            this.left = left;
        }

        public Node<E> getRight() {
            return right;
        }

        public void setRight(Node<E> right) {
            this.right = right;
        }

    }

    /**
     * Factory function to create a new node storing element e.
     * 
     * @param e
     * @param parent
     * @param left
     * @param right
     * @return
     */
    protected Node<E> creatNode(E e, Node<E> parent, Node<E> left, Node<E> right) {
        return new Node<E>(e, parent, left, right);
    }

    protected Node<E> root = null;
    private int size = 0;

    public LinkedBinaryTree() {
    }

    /**
     * Validates the position and returns it as a node
     * 
     * @param p
     * @return
     * @throws IllegalArgumentException
     */
    protected Node<E> validate(Position<E> p) throws IllegalArgumentException {
        if (!(p instanceof Node)) {
            throw new IllegalArgumentException("Not valid position type");
        }
        Node<E> node = (Node<E>) p; // safe cast
        if (node.getParent() == node) {
            throw new IllegalArgumentException("p is no longer in the tree");
        }
        return node;
    }

    @Override
    public Position<E> left(Position<E> p) throws IllegalArgumentException {

        Node<E> node = validate(p);
        return node.getLeft();
    }

    @Override
    public Position<E> right(Position<E> p) throws IllegalArgumentException {

        Node<E> node = validate(p);
        return node.getRight();
    }

    @Override
    public Position<E> root() {

        return root;
    }

    @Override
    public Position<E> parent(Position<E> p) throws IllegalArgumentException {

        Node<E> node = validate(p);
        return node.getParent();
    }

    @Override
    public int size() {

        return size;
    }

    @Override
    public Iterator<E> iterator() {

        return null;
    }

    @Override
    public Iterable<Position<E>> positions() {

        return null;
    }

    /**
     * Places element e at the root of an empty tree and returns its new position
     * 
     * @param e
     * @return
     * @throws IllegalStateException
     */
    public Position<E> addRoot(E e) throws IllegalStateException {
        if (!isEmpty())
            throw new IllegalStateException("Tree is not empty");
        root = creatNode(e, null, null, null);
        size = 1;
        return root();
    }

    /**
     * Create new left child of Position p storing element e
     * 
     * @param p
     * @param e
     * @return Position of e.
     * @throws IllegalArgumentException
     */
    public Position<E> addLeft(Position<E> p, E e) throws IllegalArgumentException {

        Node<E> parent = validate(p);
        if (parent.getLeft() != null)
            throw new IllegalArgumentException("P already has a left child");
        Node<E> child = creatNode(e, parent, null, null);
        parent.setLeft(child);
        size++;
        return child;

    }

    /**
     * Create new right child of Position p storing element e
     * 
     * @param p
     * @param e
     * @return Position of e.
     * @throws IllegalArgumentException
     */
    public Position<E> addRight(Position<E> p, E e) throws IllegalArgumentException {

        Node<E> parent = validate(p);
        if (parent.getLeft() != null)
            throw new IllegalArgumentException("P already has a left child");
        Node<E> child = creatNode(e, parent, null, null);
        parent.setRight(child);
        size++;
        return child;

    }

    /**
     * Replaces the element at Position p with e and returns the replaced element
     * 
     * @param p
     * @param e
     * @return
     * @throws IllegalArgumentException
     */
    public E set(Position<E> p, E e) throws IllegalArgumentException {

        Node<E> node = validate(p);
        E temp = node.getElement();
        node.setElement(e);
        return temp;

    }

    /**
     * Attach trees t1 and t2 as left and right subtrees of exteral p
     */
    public void attach(Position<E> p, LinkedBinaryTree<E> t1, LinkedBinaryTree<E> t2) throws IllegalArgumentException {

        Node<E> node = validate(p);
        if (isInternal(p))
            throw new IllegalArgumentException("p must be a leaf");

        size += t1.size() + t2.size();
        if (!t1.isEmpty()) {
            t1.root.setParent(node);
            node.setLeft(t1.root);
            t1.root = null;
            t1.size = 0;
        }
        if (!t2.isEmpty()) {

            t2.root.setParent(node);
            node.setRight(t2.root);
            t2.root = null;
            t1.size = 0;
        }
    }

    public E remove(Position<E> p) throws IllegalArgumentException {
        Node<E> node = validate(p);
        if (numChildren(p) == 2)
            throw new IllegalArgumentException("p has two children");
        Node<E> child = (node.getLeft() != null ? node.getLeft() : node.getRight());
        if (child != null) {
            child.setParent(node.getParent());
        }
        if (node == root) {
            root = child;
        } else {

            Node<E> parent = node.getParent();
            if (node == parent.getLeft()) {
                parent.setLeft((child));
            } else {
                parent.setRight(child);
            }
        }
        size--;
        E temp = node.getElement();
        node.setElement(null);
        node.setLeft(null);
        node.setRight(null);
        node.setParent(null);
        return temp;

    }

}
