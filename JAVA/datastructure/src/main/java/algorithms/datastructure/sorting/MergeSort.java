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

    public static <K> void sortBottomUp(K[] orig, Comparator<K> comp) {

        int n = orig.length;
        K[] src = orig;
        K[] dest = (K[]) new Object[n];
        K[] temp;
        for (int i = 1; i < n; i *= 2) {

            for (int j = 0; j < n; j += 2 * i) {
                merge(src, dest, comp, j, i);
            }
            temp = src;
            src = dest;
            dest = temp;
        }
        if (orig != src) {
            System.arraycopy(src, 0, orig, 0, n);
        }

    }

    private static <K> void merge(K[] in, K[] out, Comparator<K> comp, int start, int inc) {

        int end1 = Math.min(start + inc, in.length);
        int end2 = Math.min(start + 2 * inc, in.length);

        int x = start;
        int y = start + inc;
        int z = start;
        while (x < end1 && y < end2) {

            if (comp.compare(in[x], in[y]) < 0) {
                out[z++] = in[x++];
            } else {
                out[z++] = in[y++];
            }
        }
        if (x < end1) {
            System.arraycopy(in, x, out, z, end1 - x);
        } else if (y < end2) {
            System.arraycopy(in, y, out, z, end2 - y);
        }

    }
}
