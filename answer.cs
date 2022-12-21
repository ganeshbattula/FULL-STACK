
// A word or phrase made by using the letters of another word or phrase in a different order.
using System;
using System.Collections;
class GFG {
	public static bool areAnagram(ArrayList str1, ArrayList str2)
	{
		
		int n1 = str1.Count;
		int n2 = str2.Count;
		if (n1 != n2) {
			return false;
		}
		str1.Sort();
		str2.Sort();
		for (int i = 0; i < n1; i++) {
			if (str1[i] != str2[i]) {
				return false;
			}
		}
		return true;
	}
	public static void Main(string[] args)
	{
	
		ArrayList str1 = new ArrayList();
		str1.Add('g');
		str1.Add('r');
		str1.Add('a');
		str1.Add('m');
	
		ArrayList str2 = new ArrayList();
		str2.Add('a');
		str2.Add('r');
		str2.Add('m');

		if (areAnagram(str1, str2)) {
			Console.WriteLine("The two strings are"
							+ " anagram of each other");
		}
		else {
			Console.WriteLine("The two strings are not"
							+ " anagram of each other");
		}
	}
}

// Write a function that when provided with an IPv4 address can compare this address with a stored list of IP ranges and returns if the supplied address is within that list

public static boolean checkIPIsInGivenRange (String inputIP, String rangeStartIP, String rangeEndIP) 
  throws AddressStringException {
    IPAddress startIPAddress = new IPAddressString(rangeStartIP).getAddress();
    IPAddress endIPAddress = new IPAddressString(rangeEndIP).getAddress();
    IPAddressSeqRange ipRange = startIPAddress.toSequentialRange(endIPAddress);
    IPAddress inputIPAddress = new IPAddressString(inputIP).toAddress();

    return ipRange.contains(inputIPAddress);
}

// Using the provided CSV, write an application to import the data, removing any duplicates using the vehicle registration as the primary key.


//1 Create A design to import data, take a button that will open a dialog box to select CSV file and one textbox to show the selected file name.


namespace CsvImporter
{
    public class CsvLine
    {
        public string CicId { get; set; }
        public string JrsId { get; set; }
        public string CustomerNumber { get; set; }
        public string HotelName { get; set; }
        public string Status { get; set; }

        public override string ToString()
        {
            return $"Hotel {HotelName}: CicId: {CicId}, JrsId: {JrsId}";
        }
    }
}


//Write a program that prints the integers from 1 to 100 (inclusive).
// C# program to print Fizz Buzz
using System;

class GFG{

// Driver Code
public static void Main()
{
	int n = 100;

	for(int i = 1; i <= n; i++)							
	{
		
		if (i % 15 == 0)
			Console.Write("FizzBuzz" + " ");

		else if (i % 3 == 0)	
			Console.Write("Fizz" + " ");

		else if (i % 5 == 0)											
			Console.Write("Buzz" + " ");
		
		else
			Console.Write(i + " ");					
	}
}
}

