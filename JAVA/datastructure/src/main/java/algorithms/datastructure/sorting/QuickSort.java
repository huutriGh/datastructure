package algorithms.datastructure.sorting;

import java.util.Comparator;
import java.util.LinkedList;
import java.util.Queue;

public class QuickSort {

    public static <K> void quickSort(Queue<K> S, Comparator<K> comp) {

        int n = S.size();
        if (n < 2) {
            return;
        }

        // Divide
        K pivot = S.peek();
        Queue<K> L = new LinkedList<>();
        Queue<K> E = new LinkedList<>();
        Queue<K> G = new LinkedList<>();
        while (!S.isEmpty()) {

            K element = S.remove();

            int c = comp.compare(element, pivot);
            if (c < 0) {
                L.add(element);
            } else if (c == 0) {
                E.add(element);
            } else
                G.add(element);
        }

        // Conquer

        quickSort(L, comp);
        quickSort(G, comp);

        // Concatenation

        while (!L.isEmpty()) {

            S.add(L.remove());
        }
        while (!E.isEmpty()) {

            S.add(E.remove());
        }
        while (!G.isEmpty()) {

            S.add(G.remove());
        }

    }

}
