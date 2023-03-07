import { auth, sheets } from "@googleapis/sheets";

const SHEETS_SERVICE_ACCOUNT_KEY = process.env.SHEETS_SERVICE_ACCOUNT_KEY;
const SHEETS_ID = process.env.SHEETS_ID;

export async function POST(request) {
  const data = await request.json();
  const contact = parseContactForm(data);
  console.log(contact, data);

  // TODO rate limit access to api

  // try to add contact to google sheets
  try {
    // autorize and connect service account to google sheets api
    const client = auth.fromJSON(JSON.parse(SHEETS_SERVICE_ACCOUNT_KEY));
    client.scopes = ["https://www.googleapis.com/auth/spreadsheets"];
    const service = sheets({ version: "v4", auth: client });

    // append new contact into spreadsheet
    await service.spreadsheets.values.append({
      spreadsheetId: SHEETS_ID,
      range: "Sheet1!A:I",
      valueInputOption: "USER_ENTERED",
      resource: { values: [contact] },
    });

    return new Response("", { status: 200 });
  } catch (err) {
    return new Response("", { status: 500 });
  }
}

function parseContactForm({
  name = "",
  email = "",
  phone = "",
  address = "",
  requestSign = false,
  shareInfo = false,
  hostMeetAndGreet = false,
  helpUnsure = false,
  helpOther = "",
}) {
  const toggleCheckbox = (condition) => (condition ? "☑️" : "");

  return [
    name,
    phone,
    email,
    address,
    toggleCheckbox(requestSign),
    toggleCheckbox(shareInfo),
    toggleCheckbox(hostMeetAndGreet),
    toggleCheckbox(helpUnsure),
    helpOther,
  ];
}
