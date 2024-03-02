export async function GET(testCase) {
    const url = 'https://online-code-compiler.p.rapidapi.com/v1/';
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '1126204450mshd83ba7fa13b491dp1ebe3djsnae766e33565f',
            'X-RapidAPI-Host': 'online-code-compiler.p.rapidapi.com'
        },
        body: JSON.stringify({
            language: 'java',
            version: 'latest',
            code: `
import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        // Write your code here.
        double sum = 0;
        int count = 0;
        int temp = n;
        int check = n;
        while (n > 0) {
            count++;
            n /= 10;
        }
        for (int i = 0; i < count; i++) {
            int rem = temp % 10;
            sum = sum + Math.pow(rem, count);
            temp /= 10;
        }
        if (sum == check)
            System.out.println(true);
        else
            System.out.println(false);
        sc.close();
    }
}`,
            input: '153' // Passing the test case as input
        })
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
        return Response.json(result);
    } catch (error) {
        console.error(error);
        return Response.json(error);
    }
}