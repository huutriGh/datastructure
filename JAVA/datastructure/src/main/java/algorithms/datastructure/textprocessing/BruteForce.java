package algorithms.datastructure.textprocessing;

public class BruteForce {

    public static int findBrute(char[] text, char[] pattern) {

        int n = text.length;
        int m = pattern.length;
        for (int i = 0; i < n - m; i++) {

            int k = 0;
            while (k < m && text[i + k] == pattern[k]) {
                k++;

            }
            if (k == m) {
                return i;
            }

        }
        return -1;

    }

}
