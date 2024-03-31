const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(req) {
  const data = await req.json();
  // console.log("data", data )

  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = `Question: ${data.currentQns.question} 
    \nAnswer: ${data.currentQns.answer} \n
    ${data.currentQns.options ? `options: ${data.currentQns.options}` : ""} \n
    option selected: ${data.optionSelected} \n
    study the meaning of ${data.currentQns.answer} in detail and then compare it with the ${data.optionSelected} if the meaning of both are same then only the answer is correct else it is wrong. and checkk them throughly.
    if the answer is some thing like dont know, or any unnessessary answer then the answer is wrong.
    evaluate the answer,give explanation and provide feedback. Suggest an online resource for the particular topic. create a json without spaces in keys
     and the example is : \n
        {\n
            "correct": true,\n
            "explanation": "The explanation for the answer",\n
            "feedback": "The feedback for the answer",\n
            "resource": "The resource for the answer"\n
            "mark": this shows how acccurately the student answers the question the part should range from 0 to 1 and incldue decimalfor inbetween values if answer is wrong the mark is 0 \n
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
    parsedData.topic = data.currentQns.topic;

    // console.log("parsedData", parsedData);

    return Response.json({ data: parsedData });
  } catch (error) {
    console.log("error is : " + error);
    return Response.error({ error: error });
  }
}
