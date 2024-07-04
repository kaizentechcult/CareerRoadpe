import { useState, useEffect } from "react";
import Scholarship from "../../components/Scholarship/Scholarship";
const Scholarships = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch("http://localhost:8080/roadmap");
        const response = await fetch(
          "https://careerroadpe.onrender.com/scholarship"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <div>
      <h1 className="w-full px-3 text-center text-4xl font-bold">
        Scholarship Programs
      </h1>
      <ul className="flex flex-col gap-6 list-style-none md:grid md:grid-cols-2 w-full p-8 md:p-16">
        {data.map((text) => (
          <Scholarship key={text} Text={text} />
        ))}
      </ul>
    </div>
  );
};

export default Scholarships;
