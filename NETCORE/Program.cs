using System;
using System.Text.RegularExpressions;
using System.Collections.Generic;

namespace netcore
{
    class Program
    {
        public static bool IsMatch(string s, string p)
        {

            if (string.IsNullOrEmpty(p)) return string.IsNullOrEmpty(s);
            bool first_match = (!string.IsNullOrEmpty(s) &&
                                   (p[0] == s[0] || p[0] == '.'));

            if (p.Length >= 2 && p[1] == '*')
            {
                return (IsMatch(s, p.Substring(2)) ||
                        (first_match && IsMatch(s.Substring(1), p)));
            }
            else
            {
                return first_match && IsMatch(s.Substring(1), p.Substring(1));
            }
        }
        static void Main(string[] args)
        {

            // Console.WriteLine($"Exam 1: {isMatch("aa", "a")}");
            // Console.WriteLine($"Exam 2: {isMatch("aa", "a*")}");
            // Console.WriteLine($"Exam 3: {isMatch("ab", ".*")}");
            // Console.WriteLine($"Exam 4: {isMatch("aab", "c*a*b")}");
            Console.WriteLine($"Exam 5: {IsMatch("aab", "c*a*b")}");


            Console.WriteLine("Hello World!");

        }
    }
}
