import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import Loader from "./components/Loader/Loader";
import Markdown from "react-markdown";
import generateAnswer from "./components/generateAnswer";

function ChatBot() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const URL = import.meta.env.VITE_GEMINI_URL;

  const geminiResponse = async () => {
    setLoading(true);
    const response = await generateAnswer({ question, URL });
    setAnswer(response);
    setQuestion("");
    setLoading(false);
  };

  return (
    <>
      <div className="bg-slate-950 h-fit  md:w-full overflow-x-hidden md:p-20 flex justify-center items-center pb-32 w-[90%] m-auto">
        {loading ? (
          <div className="p-8">
            <Loader />
          </div>
        ) : (
          <>
            {answer ? (
              <div className="bg-slate-900 overflow-auto text-white w-fit pr-4 md:p-6 p-4 m-2 md:ml-12 rounded-2xl ">
                <p className="md:text-sm text-xs whitespace-break-spaces">
                  <Markdown>{answer}</Markdown>
                </p>
              </div>
            ) : (
              <></>
            )}
          </>
        )}
        <div className=" flex justify-center items-center  fixed bottom-0 p-8 w-full border-[#fff]">
          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            type="text  "
            className="bg-[#0a0d2d6a] backdrop-blur-lg p-4 w-[90%] md:w-[40%] rounded-xl outline-none focus:ring-0"
            placeholder="Enter Your Prompt"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                geminiResponse();
              }
            }}
          />
          <button onClick={geminiResponse} className="rounded">
            <IoIosSearch className="text-white w-10 h-10 rounded p-1" />
          </button>
        </div>
      </div>
    </>
  );
}

export default ChatBot;
