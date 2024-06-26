import FieldOption from "../../components/FieldOption/FieldOption";
import ProtoTypes from "prop-types";
import Search from "../../components/Search/Search";
import { useState } from "react";

function Fields({ data }) {
  const [shownData, setShownData] = useState(data);

  const searchFunction = (event) => {
    event.preventDefault();
    const searchQuery = document.getElementById("search").value;
    const temp = data.filter((object) => {
      return object.title.includes(searchQuery);
    });

    console.log(temp);
    setShownData(temp);
  };
  return (
    <>
      <Search params={{ searchFunction }} />
      <div className="flex justify-center ">
        <ul className="flex flex-col gap-6 list-style-none md:grid md:grid-cols-2 w-full p-8 md:p-16">
          {shownData.map((item) => (
            <FieldOption key={item.id} data={item} />
          ))}
        </ul>
      </div>
    </>
  );
}

Fields.propTypes = {
  data: ProtoTypes.array.isRequired,
};

export default Fields;
