import axios from "axios";
async function generateAnswer({ question, URL }) {
  const { data } = await axios({
    url: URL,
    method: "post",
    data: {
      contents: [
        {
          parts: [
            {
              text: question,
            },
          ],
        },
      ],
    },
  });

  return data.candidates[0].content.parts[0].text;
}

export default generateAnswer;
