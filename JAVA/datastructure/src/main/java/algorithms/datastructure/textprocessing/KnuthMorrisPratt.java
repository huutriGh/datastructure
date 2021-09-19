package algorithms.datastructure.textprocessing;

public class KnuthMorrisPratt {

    public static int findKMP(char[] text, char[] pattern) {

        int n = text.length;
        int m = pattern.length;
        if (m == 0) {
            return 0;
        }
        int[] fail = computeFailKMP(pattern);
        int j = 0;
        int k = 0;
        int count = 0;
        while (j < n) {
            count++;
            if (count == 11) {
                System.out.println(count);
            }
            if (text[j] == pattern[k]) {
                if (k == m - 1) {
                    return j - m + 1;
                }
                j++;
                k++;
            } else if (k > 0) {
                k = fail[k - 1];
            } else {
                j++;
            }

        }
        return -1;
    }

    private static int[] computeFailKMP(char[] pattern) {

        int m = pattern.length;
        int[] fail = new int[m];
        int j = 1;
        int k = 0;
        while (j < m) {

            if (pattern[j] == pattern[k]) {
                fail[j] = k + 1;
                j++;
                k++;
            } else if (k > 0) {
                k = fail[k - 1];
            } else {
                j++;
            }

        }

        return fail;

    }

}
