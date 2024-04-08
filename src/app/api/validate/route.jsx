const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(req) {
  const data = await req.json();
  // console.log("data", data )

  function compareAnswers(preWrittenAnswer, userAnswer) {

    console.log("preWrittenAnswer", preWrittenAnswer);
    // Split the answers into words
    let preWrittenWords = new Set(preWrittenAnswer.toLowerCase().split(/\s+/));
    let userWords = new Set(userAnswer.toLowerCase().split(/\s+/));

    console.log("preWrittenWords", preWrittenWords)
    console.log("userWords", userWords)


    // If there are no words in the user's answer, return 0 marks
    if (userWords.size === 0) {
      return 0;
    }

    // Calculate the percentage of words from user's answer present in the pre-written answer
    let matchingWords = new Set(
      [...preWrittenWords].filter((word) => userWords.has(word))
    );
    let percentageMatch = matchingWords.size / userWords.size;

    // Assign marks based on the percentage of words matched
    let marks,correct;
    if (percentageMatch === 1) {
      marks = 100;
      correct = true;
    } else if (percentageMatch > 0) {
      marks = Math.floor(percentageMatch * 90); // Reducing marks by 10% for each unmatched word
      correct = true;
    } else {
      marks = 0;
      correct = false;
    }

    let commends = "";

    if (marks === 0) {
      commends = "Fully Wrong";
    } else if (marks === 100) {
      commends = "Fully Correct";
    } else if (marks < 30 && marks > 0) {
      commends = "just passed";
    } else if (marks < 60 && marks > 0) {
      commends = "Partially Correct";
    } else {
      commends = "Almost Correct";
    }

    return { marks, commends, correct };
  }

  // Example usage:
  let preWrittenAnswer = data.currentQns.answer
  let userAnswer = data.optionSelected

  let marks = compareAnswers(preWrittenAnswer, userAnswer);
  console.log("Marks:", marks);


  // ai model starte
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = `Question: ${data.currentQns.question} 
    \nAnswer: ${data.currentQns.answer} \n
    ${data.currentQns.options ? `options: ${data.currentQns.options}` : ""} \n
    option selected: ${data.optionSelected} \n
    study the meaning of ${
      data.currentQns.answer
    } in detail and then compare it with the ${
    data.optionSelected
  }
    evaluate the answer,give explanation and provide feedback and provide code snippets for which can be given. Suggest an online resource for the particular topic. create a json without spaces in keys
    and the example is : \n
        {\n
            "correct": ${marks.correct} \n
            "explanation": "The explanation for the answer",\n
            "feedback": ${marks.commends},\n
            "resource": "The resource for the answer"\n
            "mark": ${marks.marks} \n
            "code_snippet": "The code snippet for the answer if there"\n
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
