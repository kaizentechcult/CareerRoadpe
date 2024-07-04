import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const ArticleSection = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch("http://localhost:8080/roadmap");
        const response = await fetch(
          "https://careerroadpe.onrender.com/article"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setData(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex justify-center  flex-col">
      <h1 className="text-center text-5xl text-bold">Article Page</h1>
      <ul className="flex flex-col gap-6 list-style-none md:grid md:grid-cols-2 w-full p-8 md:p-16">
        {data.map((articleData, index) => (
          <Link
            to={`${index}`}
            className="flex flex-col card-shadow bg-[#212020] border-[1px] border-white py-4 px-8 rounded-xl justify-center items-center w-full"
            key={articleData.id}
          >
            {" "}
            <h1 className="font-bold">{articleData.title}</h1>
            <div className="w-full bg-white h-[0.1px]"> </div>
            <br />
            <p>{articleData.content.slice(0, 40)}...</p>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default ArticleSection;
