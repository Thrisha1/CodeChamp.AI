const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(req) {
    const data = await req.json();
    // console.log("inside the post method", data);

    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    //
    const prompt = `Now we have the data from the user, we can use this data to generate the specified learning material for that user.
    The user have the following percentage knowledge in DSA : 
    Conceptual Knowledge : ${data.percentages[0].value}
    Logical Knowledge : ${data.percentages[1].value}
    Syntax : ${data.percentages[2].value}
    Error handling : ${data.percentages[3].value}

    now create a learning material for the user based on the above data.
    from the questions in the attempted questions find the topic which the question refers to : 
    the learning material should contain the following : 
    

    the result should be in the format : 
    {
        result : [
            {
                topic_heading : The topic name which the user have less knowledge about from the questions.
                topic_content : description about the topic and explanation.
                youtube_videos : youtube_videos related to it
                website : website data related to the topic.
            }
        ]
    }
 
    convert the whole data as a json with nessessary headings and subheadings and return the data as a response.
    
    `

    try {
        const result = await model.generateContent(prompt);
        const response = result.response;

        const text = response.text();
        console.log("text data : +", text);

        const questions = await parseQuestions(text);
        // console.log("questions data : +", questions);

        return Response.json(questions);

    } catch (error) {
        console.log("error is : " + error);
        return Response.error({ error: error });
    }
}

async function parseQuestions(responseText) {
    try {
        // Remove leading and trailing whitespace, including backticks if any

        const trimmedResponseText = responseText.trim().replace(/^```json\n/, "").replace(/^```\n/, "").replace(/^```JSON\n/, "").replace(/\n```$/, "");


        // // Parse the trimmed response text as JSON
        let inter_result = JSON.parse(trimmedResponseText);
        return inter_result
    } catch (error) {
        console.log(error);
        return { error: "Error parsing JSON data" };
    }
}