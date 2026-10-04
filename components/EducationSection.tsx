import {JSX} from "react";
import RetroPanel from "@/components/RetroPanel";
import EducationBlock from "@/components/EducationBlock";
import TinyInfoBlock from "./TinyInfoBlock";
import internet from "@/assets/icons/internet.webp"
import {currentlyEnrolled, formalEducation, certifications} from "@/components/data";
export default function EducationSection():JSX.Element {

  return (
    <section className="sectionGrid">
      {/*//* Formal Education */}

      <RetroPanel title="Formal Education.md" colSpan={3}>
        {/*//* Keys in the data match EducationBlock's props, so I can use the spread operator. */}
        <EducationBlock {...formalEducation} delay={0.2}/>
      </RetroPanel>

      {/*//* Currently Enrolled */}
      <RetroPanel title="Currently Enrolled.md" colSpan={3} delay={1}>
        <EducationBlock {...currentlyEnrolled} delay={0.3}>
          <TinyInfoBlock animate="spin" primary={"IN PROGRESS"}
            secondary={"Certificate pending completion"}
            logo={internet} color={"green"}
          />
        </EducationBlock>
      </RetroPanel>

      {/*//* Certifications */}
      <RetroPanel title="Certifications.md" delay={2}>
        <div className="flex flex-col gap-4">
          {certifications.map((certification, index) => (
            <EducationBlock key={index} {...certification} long={true} url={certification.url} delay={index ===0 ? 0.2 : 0.3 * index}/>
          ))}
        </div>
      </RetroPanel>
    </section>
  );
}