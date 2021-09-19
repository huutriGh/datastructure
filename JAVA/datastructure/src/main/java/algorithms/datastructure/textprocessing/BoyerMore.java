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
