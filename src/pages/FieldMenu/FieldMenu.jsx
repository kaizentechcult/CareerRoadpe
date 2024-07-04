import FieldOption from "../../components/FieldOption/FieldOption";
import Search from "../../components/Search/Search";
import { useState, useEffect } from "react";

function Fields() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch("http://localhost:8080/roadmap");
        const response = await fetch(
          "https://careerroadpe.onrender.com/roadmap"
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

  const searchFunction = (event) => {
    event.preventDefault();
    const searchQuery = document.getElementById("search").value;
    const temp = data.filter((object) => {
      return object.title.includes(searchQuery);
    });

    console.log(temp);
    setData(temp);
  };

  return (
    <>
      <Search params={{ searchFunction }} />
      <div className="flex justify-center ">
        <ul className="flex flex-col gap-6 list-style-none md:grid md:grid-cols-2 w-full p-8 md:p-16">
          {data.map((item) => (
            <FieldOption key={item.id} data={item} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default Fields;
