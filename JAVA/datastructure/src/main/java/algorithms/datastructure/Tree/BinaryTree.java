package algorithms.datastructure.Tree;

public interface BinaryTree<E> extends Tree<E> {
    /**
     * Return the Position of p's left child(or null if no child exists)
     * 
     * @param p
     * @return
     * @throws IllegalArgumentException
     */
    Position<E> left(Position<E> p) throws IllegalArgumentException;

    /**
     * Return Position of p's right child (or null if no child exists)
     * 
     * @param p
     * @return
     * @throws IllegalArgumentException
     */
    Position<E> right(Position<E> p) throws IllegalArgumentException;

    /**
     * Return Position of p's sibling (or null if no child exists)
     * 
     * @param p
     * @return
     * @throws IllegalArgumentException
     */
    Position<E> sibling(Position<E> p) throws IllegalArgumentException;

}
