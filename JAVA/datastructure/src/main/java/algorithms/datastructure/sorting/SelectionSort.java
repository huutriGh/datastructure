package algorithms.datastructure.sorting;

import java.util.Comparator;

public class SelectionSort {
    public static <K> void sort(K[] s, Comparator<K> comp) {

        for (int i = 0; i < s.length; i++) {
            K temp = s[i];
            int minindex = i;
            // [5,3,7,89,45,21,2,54]

            for (int j = i + 1; j < s.length; j++) {

                if (comp.compare(s[j], s[minindex]) < 0) {

                    minindex = j;
                }
            }

            s[i] = s[minindex];
            s[minindex] = temp;

        }

    }
}
