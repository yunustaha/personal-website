import Image from "next/image";

export default function Home() {
  return (
    <main >
      <div className="relative flex items-center justify-center gap-16 mt-10">
        <Image
          width="0"
          height="0"
          sizes="100vw"
          className="w-48 h-48 rounded-full overflow-hidden"
          alt='Yunus Taha Yılmaz'
          src={'/images/profile.jpeg'}
        />
        <div className="flex flex-col items-center gap-6 w-2/5">
          <div className="flex flex-col w-full justify-start shine text-2xl text-title leading-snug">
            <h2 className="font-semibold">{"Merhaba, Ben Yunus 👋"}</h2>
            <p>
              {"İstanbul'un enerjisiyle beslenen bir ön yüz geliştiriciyim."}
            </p>
          </div>
          <div className="flex flex-col gap-6 text-xl">
            <p>
              {"Hayatımı renklendiren temel ilgi alanlarım arasında fotoğraf çekmek, kitap okumak ve balık tutmak yer alıyor. Minimalizm ve işlevselliği bir araya getiren tasarımlar benim için sadece estetik değil, aynı zamanda bir yaşam tarzı."}
            </p>
            <p>
              {"Ayrıca Flutter ile mobil uygulamaların hayatımıza kattığı kolaylıklara hayranım."}
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
