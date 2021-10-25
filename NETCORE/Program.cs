using System;
using System.Text.RegularExpressions;
using System.Collections.Generic;

namespace netcore
{
    class Program
    {
        public static bool isMatch(string s, string p)
        {

            if (!p.Contains('*') && !p.Contains('.') && s != p)
            {
                return false;
            }
            else if (p == "*.")
            {
                return true;
            }
            else
            {

                var firstIndexOfMul = p.IndexOf("*");

                while (firstIndexOfMul != -1)
                {

                    var charBeforeMul = p[firstIndexOfMul - 1];
                    var charAfterMul = p[firstIndexOfMul + 1];
                    for (int i = firstIndexOfMul; i < s.Length; i++)
                    {
                        if (s[i] != charBeforeMul)
                        {
                            if (s[i] != charAfterMul)
                            {
                                return false;
                            }
                            else if(s[i] == charAfterMul)
                            {
                                firstIndexOfMul = p.IndexOf("*", firstIndexOfMul + 1);
                                if (firstIndexOfMul < 0)
                                {
                                    break;
                                }
                                charBeforeMul = p[firstIndexOfMul-1];
                                charAfterMul = p[firstIndexOfMul + 1];
                            }

                        }
                    }

                }




            }



            return true;
        }
        static void Main(string[] args)
        {

            // Console.WriteLine($"Exam 1: {isMatch("aa", "a")}");
            // Console.WriteLine($"Exam 2: {isMatch("aa", "a*")}");
            // Console.WriteLine($"Exam 3: {isMatch("ab", ".*")}");
            // Console.WriteLine($"Exam 4: {isMatch("aab", "c*a*b")}");
            Console.WriteLine($"Exam 5: {isMatch("aab", "c*a*b")}");


            Console.WriteLine("Hello World!");

        }
    }
}
