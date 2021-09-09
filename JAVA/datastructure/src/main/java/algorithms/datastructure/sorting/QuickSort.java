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

    public static <K> void quickSortInPlace(K[] S, Comparator<K> comp, int a, int b) {

        if (a >= b) {
            return;
        }
        int left = a;
        int right = b - 1;
        K pivot = S[b];
        K temp;
        while (left <= right) {

            while (left <= right && comp.compare(S[left], pivot) < 0) {
                left++;
            }
            while (left <= right && comp.compare(S[right], pivot) > 0) {
                right--;
            }
            if (left <= right) {
                temp = S[left];
                S[left] = S[right];
                S[right] = temp;

                left++;
                right--;
            }
        }
        temp = S[left];
        S[left] = S[b];
        S[b] = temp;
        quickSortInPlace(S, comp, a, left - 1);
        quickSortInPlace(S, comp, left + 1, b);

    }
}
