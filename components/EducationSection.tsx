import RetroPanel from "@/components/RetroPanel";
export default function EducationSection() {
  return (
    <section className="sectionGrid">
      <RetroPanel title="Formal Education.md" colSpan={3}>
        <div className="">College</div>
      </RetroPanel>
      <RetroPanel title="Currently Enrolled.md" colSpan={3} delay={1}>
        <div className="">College</div>
      </RetroPanel>
      <RetroPanel title="Certifications.md" delay={2}>
        <div className="">Certificates</div>
      </RetroPanel>
    </section>
  );
}