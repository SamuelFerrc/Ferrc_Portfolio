import { getPosts } from "@/app/utils/utils";
import { Column } from "@/once-ui/components";
import { Projects } from "@/components/work/Projects";
import { baseURL } from "@/app/resources";
import { person, work } from "@/app/resources/content";
export default function Work() {
  let allProjects = getPosts(["src", "app", "work", "projects"]);

  return (
      <Column maxWidth="m">
        <script
            type="application/ld+json"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "CollectionPage",
                headline: work.title,
                description: work.description,
                url: `https://${baseURL}/projects`,
                image: `${baseURL}/og?title=Design%20Projects`,
                author: {
                  "@type": "Person",
                  name: person.name,
                },
                hasPart: allProjects.map((project) => {
                  const creativeWork: any = {
                    "@type": "CreativeWork",
                    headline: project.metadata.title,
                    description: project.metadata.summary,
                    url: `https://${baseURL}/projects/${project.slug}`,
                    image: `${baseURL}/${project.metadata.image}`,
                  };

                  // Adiciona metadados de vídeo se existirem no projeto
                  if (project.metadata.videos && project.metadata.videos.length > 0) {
                    creativeWork.video = project.metadata.videos.map((video: string) => ({
                      "@type": "VideoObject",
                      contentUrl: `${baseURL}/${video}`,
                      embedUrl: `${baseURL}/${video}`,
                      thumbnailUrl: `${baseURL}/${project.metadata.image}`, // Usa a imagem principal como thumbnail
                      name: project.metadata.title,
                      description: project.metadata.summary,
                      uploadDate: project.metadata.publishedAt || new Date().toISOString()
                    }));
                  }

                  return creativeWork;
                }),
              }),
            }}
        />
        <Projects />
      </Column>
  );
}