import FieldOption from "../../components/FieldOption/FieldOption";
import ProtoTypes from "prop-types";
import Search from "../../components/Search/Search";
function Fields({ data }) {
  // console.log(data);
  return (
    <>
      <Search />
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

Fields.propTypes = {
  data: ProtoTypes.array.isRequired,
};

export default Fields;
