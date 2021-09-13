package algorithms.datastructure.sorting;

import java.util.Collections;
import java.util.LinkedList;
import java.util.List;

public class BucketSort {

    public static void sort(Integer[] arr) {

        int n = arr.length;
        // Create bucket array
        @SuppressWarnings("unchecked")
        List<Integer>[] buckets = new List[n];
        // Associate a list with each index
        // in the bucket array
        for (int i = 0; i < n; i++) {
            buckets[i] = new LinkedList<>();
        }
        // Assign numbers from array to the proper bucket
        // by using hashing function
        for (int num : arr) {
            // System.out.println("hash- " + hash(num));
            buckets[hash(num)].add(num);
        }
        // sort buckets
        for (List<Integer> bucket : buckets) {
            Collections.sort(bucket);
        }
        int i = 0;
        // Merge buckets to get sorted array
        for (List<Integer> bucket : buckets) {
            for (int num : bucket) {
                arr[i++] = num;
            }
        }

    }

    private static int hash(int num) {
        return num / 10;
    }
}
