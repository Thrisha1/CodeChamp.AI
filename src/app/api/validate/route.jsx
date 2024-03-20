const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(req) {
    const data = await req.json();
    // console.log("data", data )


    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `Question: ${data.currentQns.question} 
    \nAnswer: ${data.currentQns.answer} \n
    ${data.currentQns.options ? `options: ${data.currentQns.options}` : "" } \n
    option selected: ${data.optionSelected} \n
    compare the ${data.currentQns.answer} with the ${data.optionSelected} and check whether these are same or not and 
    evaluate the answer,give explanation and provide feedback. Suggest an online resource for the particular topic. create a json without spaces in keys
     and the example is : \n
        {\n
            "correct": true,\n
            "explanation": "The explanation for the answer",\n
            "feedback": "The feedback for the answer",\n
            "resource": "The resource for the answer"\n
        }`;

    // console.log("prompt", prompt)

    try {
        const result = await model.generateContent(prompt);
        const response = result.response;

        const text = response.text();
        // console.log("text data : ", text);

        let parsedData = JSON.parse(text);
        parsedData.question = data.currentQns.question;
        parsedData.category = data.currentQns.category;

        // console.log("parsedData", parsedData);


        return Response.json({ data: parsedData });

    } catch (error) {
        console.log("error is : " + error);
        return Response.error({ error: error });
    }
}

