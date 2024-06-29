import team from "../../assets/team";

const MentorPage = () => {
  return (
    <div>
      <h1 className="text-white text-center text-4xl font-bold p-4">Our Mentors</h1>
      <div className="flex gap-5 flex-wrap justify-center items-center">
        {team.map((member) => (
          <div
            className="rounded-xl bg-gray-800 text-white p-4 flex gap-8 w-1/3"
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
