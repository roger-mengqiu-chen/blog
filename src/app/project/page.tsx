import { Main } from '@/components/home/home';


export const generateMetadata = async () => {
  return {
    title: `Roger Chen's Blog | Projects`,
    description: "Blog from Roger Chen",
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