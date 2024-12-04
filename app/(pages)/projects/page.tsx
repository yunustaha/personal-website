import ProjectCard from "@/components/ProjectCard";
import React from "react";

const Projects = () => {
  return (
    <main className="flex flex-col items-start justify-center gap-16">
      <h1 className="text-title text-4xl font-semibold ">Projeler</h1>
      <ProjectCard
        title={"FieldCo. İklimsa SSH"}
        description={
          "Türkiye genelindeki tüm İklimsa servis personelinin kullandığı uygulamanın backend kısmı, Node.js kullanılarak geliştirilmiştir. Bu backend, İklimsa’nın ihtiyaçlarına özel olarak kodlanmış olup servis personelinin iş süreçlerini daha verimli bir şekilde yönetmelerine olanak tanır."
        }
        techStacks={["Node.js", "PM2", "Windows Server (Pam)", "Git"]}
        imgUrls={["/projects/iklimsa.webp"]}
        liveUrl={
          "https://play.google.com/store/apps/details?id=com.mobim.fieldco.iklimsa&hl=tr"
        }
      />
      <ProjectCard
        title={"FieldCo CRM"}
        description={
          "İklimsa için FieldCo ekibi olarak CRM uygulaması oluşturduk, projenin backend kısmını Node.js kullanarak oluşturmaya odaklandım."
        }
        techStacks={["Node.js", "Flutter"]}
        imgUrls={["/projects/fieldcocrm.webp"]}
        liveUrl={
          "https://play.google.com/store/apps/details?id=com.mobim.fieldco_mobil_flutter&hl=tr&gl=US"
        }
      />
      <ProjectCard
        title={"Sport With AI"}
        description={`Bir tez projesi olarak üç kişilik bir ekip ile geliştirilmiş bir spor uygulaması olan Sport With AI'ı tasarladık ve kodladık. Bu uygulama, egzersiz hareketlerini görüntü işleme yoluyla analiz ediyor. Frontend için Angular, backend için Nest.js, mobil geliştirme için Flutter ve yapay zeka için Python kullanıldı. Sosyal medya bölümü için fotoğraf yükleme (EC2), metin paylaşımı (MongoDB) ve önbellek yapısı (Redis) uygulandı.`}
        techStacks={["Nest.js", "Flutter", "Angular"]}
        imgUrls={["/projects/sportwithai.webp"]}
        gitHubUrl="https://github.com/yunustaha/sport-with-ai-monorepo"
      />
    </main>
  );
};

export default Projects;
