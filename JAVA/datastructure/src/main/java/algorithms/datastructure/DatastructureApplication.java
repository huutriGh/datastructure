package algorithms.datastructure;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.TreeSet;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import algorithms.datastructure.Queue.ArrrayQueue;
//import algorithms.datastructure.Stacks.ArrayStack;
import algorithms.datastructure.Stacks.LinkedStack;
import algorithms.datastructure.Stacks.Stack;

// import algorithms.datastructure.LinkedList.DoubleLinkedList;
// import algorithms.datastructure.textprocessing.BoyerMore;
// import algorithms.datastructure.textprocessing.BruteForce;
// import algorithms.datastructure.textprocessing.KnuthMorrisPratt;

@SpringBootApplication
public class DatastructureApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(DatastructureApplication.class, args);
	}

	public static boolean isMathched(String expression) {

		final String opening = "({[";
		final String closing = ")}]";

		Stack<Character> buffer = new LinkedStack<>();
		for (char c : expression.toCharArray()) {

			if (opening.indexOf(c) != -1) {
				buffer.push(c);
			} else if (closing.indexOf(c) != -1) {
				if (buffer.isEmpty()) {
					return false;
				}
				if (closing.indexOf(c) != opening.indexOf(buffer.pop())) {
					return false;
				}
			}
		}
		return buffer.isEmpty();
	}

	public static boolean isHTMLMatched(String html) {

		Stack<String> buffer = new LinkedStack<>();
		int j = html.indexOf('<');
		while (j != -1) {
			int k = html.indexOf('>', j + 1);
			if (k == -1) {
				return false;
			}
			String tag = html.substring(j + 1, k);
			if (!tag.startsWith("/")) {
				buffer.push(tag);
			} else {
				if (buffer.isEmpty()) {
					return false;
				}
				if (!tag.substring(1).equals(buffer.pop())) {
					return false;
				}
			}
			j = html.indexOf('<', k + 1);
		}
		return buffer.isEmpty();
	}

	@Override
	public void run(String... args) throws Exception {
		/*
		 * 
		 * Comparator<Integer> Comp = new Comparator<Integer>() {
		 * 
		 * @Override public int compare(Integer o1, Integer o2) { if (o1 < o2) { return
		 * -1; } else if (o1 == o2) { return 0; } else { return 1; }
		 * 
		 * }
		 * 
		 * }; Queue<Integer> q = new LinkedList<Integer>(Arrays.asList(1, 4, 78, 5, 10,
		 * 7, 8, 9, 34)); QuickSort.quickSort(q, Comp); //
		 * q.stream().sorted(Comp).collect(Collectors.toCollection(LinkedList::new));
		 * Integer[] array = new Integer[] { 1, 4, 78, 5, 10, 7, 8, 9, 100000 }; //
		 * InsertSort.sort(array, Comp); MergeSort.sort(array, Comp); //
		 * 
		 * int a = BruteForce.findBrute("Nguyễn Hữu Trí".toCharArray(),
		 * "Hữu".toCharArray()); System.out.println(a); int b =
		 * BoyerMore.findBoyerMoore("abacaabadcabacabaabb".toCharArray(),
		 * "abacab".toCharArray()); System.out.println(b);
		 * 
		 * int idx = KnuthMorrisPratt.findKMP("abacaabaccabacabaabb".toCharArray(),
		 * "abacab".toCharArray()); System.out.println(idx);
		 * 
		 * int [] fail = KnuthMorrisPratt.computeFailKMP("amalgamation".toCharArray());
		 * System.out.println(fail); DoubleLinkedList<Integer> list = new
		 * DoubleLinkedList<>(); list.addFirst(5);
		 * System.out.println(list.getHead().getElement()); list.addFirst(4);
		 * System.out.println(list.getHead().getElement()); StringBuilder sb = new
		 * StringBuilder(); sb.append("<body>\n"); sb.append("<p/>"); sb.append("<br>");
		 * sb.append("<center>\n"); sb.append("<h1> The Little Boat </h1>\n");
		 * sb.append("</center>\n"); sb.append("</body>");
		 * 
		 * // System.out.println(isMathched("[(5+x)−(y+z)]"));
		 * System.out.println(isHTMLMatched(sb.toString())); ArrrayQueue<Integer> queue
		 * = new ArrrayQueue<>(5); queue.enqueue(1); queue.enqueue(2); queue.enqueue(3);
		 * queue.enqueue(4); queue.enqueue(5); queue.dequeue(); queue.dequeue();
		 * queue.dequeue(); queue.enqueue(6); queue.enqueue(7); queue.dequeue();
		 * queue.dequeue();
		 */




	int year=	(int)((((new SimpleDateFormat("dd/MM/yyyy").parse("25/10/2021")).getTime()- (new SimpleDateFormat("dd/MM/yyyy").parse("25/10/2017")).getTime())/(1000*60*60*24) )/365 + 1);
			 
		 
		System.out.println(year);
	}

}
