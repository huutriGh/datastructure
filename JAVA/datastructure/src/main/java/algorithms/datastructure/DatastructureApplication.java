package algorithms.datastructure;

import java.util.Arrays;
import java.util.Comparator;
import java.util.LinkedList;
import java.util.Queue;
import java.util.stream.Collectors;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import algorithms.datastructure.sorting.QuickSort;

@SpringBootApplication
public class DatastructureApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(DatastructureApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		Comparator<Integer> Comp = new Comparator<Integer>() {

			@Override
			public int compare(Integer o1, Integer o2) {
				if (o1 < o2) {
					return -1;
				} else if (o1 == o2) {
					return 0;
				} else {
					return 1;
				}

			}

		};
		Queue<Integer> q = new LinkedList<Integer>(Arrays.asList(1, 4, 78, 5, 10, 7, 8, 9, 34));
		q = q.stream().sorted(Comp).collect(Collectors.toCollection(LinkedList::new));
		QuickSort.quickSort(q, Comp);
	}

}
