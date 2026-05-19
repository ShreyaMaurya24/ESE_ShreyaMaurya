import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({

  baseURL: "https://openrouter.ai/api/v1",

  apiKey: process.env.OPENROUTER_API_KEY,

});

export const analyzeComplaint = async (
  complaintText
) => {

  try {

    const completion =
      await openai.chat.completions.create({

        model: "mistralai/mistral-7b-instruct",

        messages: [
          {
            role: "user",

            content: `
Analyze this complaint.

Complaint:
${complaintText}

Return ONLY:

Priority: High
Department: Electricity Department
Summary: Short summary
Response: Auto response
`,
          },
        ],

      });

    const text =
      completion.choices[0].message.content;

    console.log(text);

    return {

      priority:
        text.match(/Priority:\s*(.*)/i)?.[1]
        || "Medium",

      department:
        text.match(/Department:\s*(.*)/i)?.[1]
        || "General",

      summary:
        text.match(/Summary:\s*(.*)/i)?.[1]
        || "No Summary",

      response:
        text.match(/Response:\s*(.*)/i)?.[1]
        || "Complaint received",

    };

  } catch (error) {

    console.log("AI ERROR:", error);

    return {

      priority: "Medium",

      department: "General",

      summary: "AI failed",

      response:
        "Complaint received successfully",

    };
  }
};