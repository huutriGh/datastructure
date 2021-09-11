package algorithms.datastructure.sorting;

import java.util.Arrays;
import java.util.Comparator;

public class MergeSort {
    public static <K> void sort(K[] S, Comparator<K> comp) {

        int n = S.length;

        if (n < 2) {
            return;
        }
        // divide
        int mid = n / 2;

        K[] S1 = Arrays.copyOfRange(S, 0, mid);
        K[] S2 = Arrays.copyOfRange(S, mid, n);
        // conquer with recusion

        sort(S1, comp);
        sort(S2, comp);

        // Merge Result
        merge(S1, S2, S, comp);
    }

    private static <K> void merge(K[] s1, K[] s2, K[] s, Comparator<K> comp) {

        int i = 0;
        int j = 0;

        while (i + j < s.length) {
            if (j == s2.length || (i < s1.length && comp.compare(s1[i], s2[j]) < 0)) {

                s[i + j] = s1[i++];
            } else {
                s[i + j] = s2[j++];
            }
        }

    }
}
