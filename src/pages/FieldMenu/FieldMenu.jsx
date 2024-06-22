import FieldOption from "../../components/FieldOption/FieldOption";
import ProtoTypes from "prop-types";
function Fields({ data }) {
  // console.log(data);
  return (
    <div className="flex justify-center md:mt-52 md:h-max">
      <ul className="flex flex-col gap-2 list-style-none md:grid md:grid-cols-2 md:gap-x-24">
        {data.map((item) => (
          <li key={item.id} className="inline-block mr-4 mb-4 md:w-[30vw]">
            <FieldOption data={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

Fields.propTypes = {
  data: ProtoTypes.array.isRequired,
};

export default Fields;
