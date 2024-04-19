import ProjectsFilter from "@/components/ProjectsFilter/ProjectsFilter";
import ProjectsList from "@/components/ProjectsList/ProjectsList";

export default function ProjectsPage() {
  return (
    <main>
      <div className="wrapper__page">
        <h3 className="text-center text-[#C30F08] text-[34px] font-bold uppercase mb-[50px]">
          Projects
        </h3>
        <ProjectsFilter />
        <ProjectsList />
      </div>
    </main>
  );
}
