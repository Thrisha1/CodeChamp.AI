const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function GET() {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = "Generate a JSON object representing a set of multiple-choice questions for a personalized Data Structure & Algorithm (DSA) learning platform. The questions should cover four distinct categories: technical, problem_solving, mathematical, and DSA_concepts. Each category must contain two questions. For each question, include the following elements:" +
        "Question: Clearly state the problem or scenario to be solved." +
        "Options: Provide four possible solutions or answers." +
        "Answer: Specify the correct solution." +
        "Explanation: Offer a brief explanation or rationale behind why the correct answer is indeed correct" +
        "Ensure that the questions are drawn from a comprehensive database built on 10 years of experience in DSA content and cover a range of difficulty levels. Prioritize clarity, accuracy, and relevance to the learning objectives of the DSA curriculum. The JSON object should be structured with categories as arrays, each containing objects representing individual questions along with their options, correct answers, and explanations. Aim to create an output that can be easily converted into an object format for seamless integration into the learning platform.";

    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;

        const text = response.text();
        // console.log("text data : +", text);

        const questions = await parseQuestions(text);

        return Response.json(questions);

    } catch (error) {
        console.log("error is : " + error);
        return Response.error({ error: error });
    }
}

async function parseQuestions(responseText) {
    try {
        // Remove leading and trailing whitespace, including backticks if any
        const trimmedResponseText = responseText.trim().replace(/^```json\n/, "").replace(/\n```$/, "");

        // // Parse the trimmed response text as JSON
        let inter_result =  JSON.parse(trimmedResponseText);
        return inter_result
    } catch (error) {
        console.log(error);
        return { error: "Error parsing JSON data" };
    }
}