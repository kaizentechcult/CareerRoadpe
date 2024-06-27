import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import axios from "axios";
import Markdown from "react-markdown";

const URL = import.meta.env.VITE_GEMINI_URL;
console.log(URL);
function ChatBot() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  async function generateAnswer() {
    console.log("Loading....");
    const response = await axios({
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

    setAnswer(response.data.candidates[0].content.parts[0].text);
  }

  return (
    <>
      <div className="bg-slate-950 h-screen w-full overflow-x-hidden">
        {answer ? (
          <div className="bg-slate-900 overflow-auto text-white w-fit pr-4 md:p-6 p-4 m-2 md:ml-12 rounded-2xl">
            <p className="md:text-sm text-xs whitespace-pre">
              <Markdown>{answer}</Markdown>
            </p>
          </div>
        ) : (
          <></>
        )}
        <div className=" flex justify-center items-center  ">
          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            type="search"
            className="bg-[#0d1031] p-4 w-[40%] rounded-xl"
            placeholder="Enter Your Prompt"
          />
          <button onClick={generateAnswer} className="rounded bg-gradient-to-r">
            <IoIosSearch className="text-white w-10 h-10 rounded p-1 bg-gradient-to-r" />
          </button>
        </div>
      </div>
    </>
  );
}

export default ChatBot;
