import { twMerge } from "tailwind-merge";
import Marquee from "../components/Marquee";
import { skills } from "../constants";

const firstRow = skills.slice(0, skills.length / 2);
const secondRow = skills.slice(skills.length / 2);

const SkillCard = ({ img, name }) => {
  return (
    <div
      className={twMerge(
        "flex flex-col items-center justify-center w-32 h-32 p-3  border border-gray-50/[.1] bg-indigo rounded-xl hover:bg-royal hover-animation"
      )}
    >
      <img src={img} alt={name} className="w-12 h-12 object-contain mb-2" />
      <p className="text-sm font-medium text-white">{name}</p>
    </div>
  );
};

export default function Skills() {
  return (
    <div className="items-start mt-25 md:mt-3 c-space">
      <h2 className="text-heading">My Technical Skills</h2>
      <div className="relative flex flex-col items-center justify-center w-full mt-12 overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((skill) => (
            <SkillCard key={skill.id} {...skill} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((skill) => (
            <SkillCard key={skill.id} {...skill} />
          ))}
        </Marquee>
        <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-primary"></div>
        <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-primary"></div>
      </div>
    </div>
  );
}
