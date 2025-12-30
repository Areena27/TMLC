import java.util.Scanner;

class DigitAnalyzer {

    void countDigit(int num, int d){
        int count=0;
        while (num>0){
        int digit = num % 10;
        if (digit == d){
            count++;
            }
        num = num / 10;
        }
        System.out.println("The digit " + d + " occurs " + count + " times.");
    }

    public static void main(String[] args) {
      Scanner sc= new Scanner(System.in);
      System.out.println("Enter a number: ");  
      int num = sc.nextInt();
      System.out.println("Enter the digit: ");  
      int d = sc.nextInt();
      
      DigitAnalyzer da = new DigitAnalyzer();
      da.countDigit(num, d);
      sc.close(); 
    }

}
    

