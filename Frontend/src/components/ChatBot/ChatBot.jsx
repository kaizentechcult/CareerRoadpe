import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import axios from "axios";
import Markdown from "react-markdown";

const URL = import.meta.env.GEMINI_URL;
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
        <div className="bg-slate-900 overflow-auto text-white w-11/12 pr-4 md:p-6 p-4 m-2 md:ml-12 rounded-2xl">
          <p className="md:text-sm text-xs whitespace-pre">
            <Markdown>{answer}</Markdown>
          </p>
        </div>
        <div className="mb-3 mt-16">
          <div className="md:ml-16 ml-6 relative mb-4 flex w-full flex-wrap items-stretch">
            <input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              type="search"
              className="w-2/3 rounded-l text-white border border-solid border-neutral-300 bg-slate-900 bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-white focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-slate-500 dark:focus:border-primary"
              placeholder="Enter Your Prompt"
            />
            <button
              onClick={generateAnswer}
              className="rounded bg-gradient-to-r from-green-500 via-blue-500 to-green-400"
            >
              <IoIosSearch className="text-white w-10 h-10 rounded p-1 bg-gradient-to-r from-green-500 via-blue-500 to-green-400" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatBot;
