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

                int i = 0;
                int j = 0;
                if (p.StartsWith(".*"))
                {
                    j = 2;
                }

                do
                {
                    if (s[i] == p[j])
                    {
                        i++;
                        j++;
                    }
                    else if (s[i] != p[j])
                    {
                        if ((p[j] != '*' && p[j] != '.') && (p[j + 1] != '*' && p[j + 1] != '.')) /// loi o day
                        {
                            return false;
                        }
                        else
                        {
                            if (p[j] == '.')
                            {
                                i++;
                                j++;
                            }
                            else // *
                            {
                                var charBeforeMul = ' ';
                                var tempIndexofI = i - 1;
                                if (i - 1 < 0)
                                {
                                    charBeforeMul = p[i];
                                    tempIndexofI = 0;
                                    j++;
                                }


                                for (int z = tempIndexofI; z < s.Length; z++)
                                {
                                    if (s[z] != charBeforeMul)
                                    {
                                        var charAfterMul = p[++j];

                                        if (s[z] != charAfterMul)
                                        {
                                            return false;
                                        }

                                        else
                                        {
                                            i = z + 1;

                                            j++;
                                            break;
                                        }

                                    }
                                    i = z + 1;


                                }
                                j++;
                            }
                        }
                    }
                } while (i < s.Length || j < p.Length);




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
