package algorithms.datastructure.textprocessing;

import java.util.HashMap;
import java.util.Map;

public class BoyerMore {

    public static int findBoyerMoore(char[] text, char[] pattern) {

        int n = text.length;
        int m = pattern.length;
        if (m == 0)
            return 0;
        Map<Character, Integer> last = new HashMap<>();
        for (int i = 0; i < n; i++) {
            last.put(text[i], -1);
        }
        for (int i = 0; i < m; i++) {
            last.put(pattern[i], i);
        }
        // 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19
        // a b a c a a b a d c a  b  a  c  a  b  a  a  b  b
        // a b a c a b, j  = 4, K =5, i =5,m = 6, 

        int i = m - 1;
        int k = m - 1;

        while (i < n) {
            if (text[i] == pattern[k]) {
                if (k == 0)
                    return i;
                i--;
                k--;
            } else {
                i += m - Math.min(k, 1 + last.get(text[i]));
                k = m - 1;
            }

        }

        return -1;
    }

}
