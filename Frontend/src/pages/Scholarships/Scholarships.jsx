import ScholarshipData from "../../assets/Scholarship";
import Scholarship from "../../components/Scholarship/Scholarship";
const Scholarships = () => {
  return (
    <div>
      <h1 className="w-full px-3 text-center text-4xl font-bold">
        Scholarship Programs
      </h1>
      <ul className="flex flex-col gap-6 list-style-none md:grid md:grid-cols-2 w-full p-8 md:p-16">
        {ScholarshipData.map((text) => (
          <Scholarship key={text} Text={text} />
        ))}
      </ul>
    </div>
  );
};

export default Scholarships;
