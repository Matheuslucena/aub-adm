import { Handler } from "@netlify/functions";
import { google } from "googleapis";
import { JWT } from "google-auth-library";

const GOOGLE_SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY;
const GOOGLE_SHEET_ID = process.env.GOOGLE_SHEET_ID;

const handler: Handler = async (event, context) => {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const spreadsheetId = GOOGLE_SHEET_ID;
    const range = "DATA!A1";

    const data = JSON.parse(event.body || "{}");
    const values = [
      [
        data.date,
        data.id,
        data.employee,
        data.score,
        data.quizScore,
        data.location,
        data.type,
        JSON.stringify(data.answers),
        JSON.stringify(data.quiz),
      ],
    ];

    const resource = {
      values,
    };

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "RAW",
      requestBody: resource,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Data saved successfully!",
        response,
      }),
    };
  } catch (error) {
    console.error("Error saving data to Google Sheets:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to save data to Google Sheets" }),
    };
  }
};

export { handler };
