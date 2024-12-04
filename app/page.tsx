import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="relative flex flex-col lg:flex-row items-center justify-center gap-16 mt-0 lg:mt-10">
        <Image
          width="0"
          height="0"
          sizes="100vw"
          className="w-56 h-56 rounded-full overflow-hidden"
          alt="Yunus Taha Yılmaz"
          src={"/images/profile.jpeg"}
        />
        <div className="flex flex-col items-center gap-6 w-4/5 lg:w-2/5">
          <div className="flex flex-col w-full justify-start shine text-2xl text-title leading-snug">
            <h2 className="font-semibold">{"Merhaba, Ben Yunus 👋"}</h2>
            <p>{"FieldCo'da yazılım mühendisi olarak çalışmaktayım."}</p>
          </div>
          <div className="flex flex-col gap-6 text-xl">
            <p>
              {
                "Yeni teknolojileri keşfetmek ve bu bilgileri gerçek dünyadaki projelere entegre etmek benim için büyük bir motivasyon kaynağı."
              }
            </p>
            <p>
              {
                "Ayrıca, sistem mimarisi tasarımı, mikro hizmetler ve bulut tabanlı çözümler üzerinde çalışmayı seviyorum."
              }
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
