using System;

namespace netcore
{
    class Program
    {
        public static bool IsMatch(string s, string p)
        {

            if (string.IsNullOrEmpty(p))
            {
                return string.IsNullOrEmpty(s);
            }
            bool first_match = (!string.IsNullOrEmpty(s) && (p[0] == s[0] || p[0] == '.'));

            if (p.Length >= 2 && p[1] == '*')
            {
                return (IsMatch(s, p.Substring(2)) || (first_match && IsMatch(s.Substring(1), p)));

            }
            else
            {
                return first_match && IsMatch(s.Substring(1), p.Substring(1));
            }
        }

        public static bool IsMatchDPBottomUp(string s, string p)
        {
            bool[,] dp = new bool[s.Length + 1, p.Length + 1];
            dp[s.Length, p.Length] = true;
            for (int i = s.Length; i >= 0; i--)
            {
                for (int j = p.Length - 1; j >= 0; j--)
                {
                    bool first_match = (i < s.Length && (p[j] == s[i] || p[j] == '.'));
                    if (j + 1 < p.Length && p[j + 1] == '*')
                    {
                        dp[i, j] = dp[i, j + 2] || first_match && dp[i + 1, j];
                    }
                    else
                    {
                        dp[i, j] = first_match && dp[i + 1, j + 1];
                    }
                }
            }

            return dp[0, 0];
        }

        static void Main(string[] args)
        {


            Console.WriteLine($"Exam 5: {IsMatchDPBottomUp("aab", "c*a*b")}");


            Console.WriteLine("Hello World!");

        }
    }
}
