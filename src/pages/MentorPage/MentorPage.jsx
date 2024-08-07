import { useState, useEffect } from "react";

const MentorPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch("http://localhost:8080/roadmap");
        const response = await fetch("https://careerroadpe.onrender.com/team");

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

  return (
    <div>
      <h1 className="text-white text-center text-4xl font-bold p-4">
        Our Mentors
      </h1>
      <div className="flex flex-col md:flex-row gap-5 flex-wrap justify-center items-center">
        {data.map((member) => (
          <div
            className="rounded-xl bg-gray-800 text-white p-4 flex gap-8 md:w-1/3 w-[90%]"
            key={member.id}
          >
            <div>
              <img
                src={member.img}
                alt="member"
                className="w-[7rem] h-[7rem] rounded-full"
              />
            </div>
            <div className="w-1/2 flex justify-evenly flex-col">
              <p className="font-bold">{member.name}</p>
              <p>{member.profession}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MentorPage;
