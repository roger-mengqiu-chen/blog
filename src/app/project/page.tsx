import { Main } from '@/components/home/home';


export const generateMetadata = async () => {
  return {
    title: `Roger Chen's Site | Projects`,
    description: "Roger Chen's projects",
  }
}


const ProjectMainPage = () => {
  return (
    <>
      <Main category="project" />
    </>
  );
}

export default ProjectMainPage;