export async function POST(req) {
    const data = await req.json();
    console.log("server data", data);
    const url = 'https://online-code-compiler.p.rapidapi.com/v1/';
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '1126204450mshd83ba7fa13b491dp1ebe3djsnae766e33565f',
            'X-RapidAPI-Host': 'online-code-compiler.p.rapidapi.com'
        },
        body: JSON.stringify({
            language: data.language,
            version: 'latest',
            code: data.code,
            input: data.input // Passing the test case as input
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