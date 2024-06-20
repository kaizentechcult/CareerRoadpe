import FieldOption from "../../components/FieldOption/FieldOption";
function Fields({ data }) {
  // console.log(data);
  return (
    <div className="flex justify-center">
      <ul className="flex flex-col gap-2 list-style-none">
        {data.map((item) => (
          <li key={item.id} className="inline-block mr-4 mb-4">
            <FieldOption data={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Fields;
