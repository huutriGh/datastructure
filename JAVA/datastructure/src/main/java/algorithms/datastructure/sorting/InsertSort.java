package algorithms.datastructure.sorting;

import java.util.Comparator;

public class InsertSort {
    public static <K> void sort(K[] S, Comparator<K> Comp) {

        // [5,5,7,89,45,21,54] 8

        for (int i = 1; i < S.length; i++) {
            K cur = S[i];

            int j = i;
            while (j > 0 && Comp.compare(S[j - 1], cur) > 0) {

                S[j] = S[j - 1];
                j--;

            }
            S[j] = cur;
        }

    }
}
