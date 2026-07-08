import { readdirSync } from "node:fs";
import StoryLink from "../components/StoryLink";

const LITTLE_THINGS = [
  {
    title: "Cara kamu cerita",
    text: "Selalu ada versi heboh, lucu, dan detail kecil yang bikin aku betah dengerin.",
  },
  {
    title: "Ketawa random kamu",
    text: "Kadang muncul tiba-tiba, tapi justru itu yang paling aku kangenin.",
  },
  {
    title: "Sisi manja kamu",
    text: "Yang nggak perlu pura-pura kuat terus kalau lagi sama aku.",
  },
  {
    title: "Kamu yang tetap nyoba",
    text: "Walau harinya berat, kamu tetap pelan-pelan maju. Aku bangga sama itu.",
  },
];

const PHOTOS = readdirSync(`${process.cwd()}/public`)
  .filter((name) => /^image-\d+\.(jpe?g|png|webp)$/i.test(name))
  .sort((a, b) => Number(a.match(/\d+/)[0]) - Number(b.match(/\d+/)[0]));

export const metadata = {
  title: "Hal Kecil Tentang Kamu",
  description: "Kenangan dan hal-hal kecil yang selalu disukai.",
};

export default function MemoriesPage() {
  return (
    <main className="story-page story-memories-page">
      <section className="story-shell story-shell-wide" aria-labelledby="memories-title">
        <div className="story-heading">
          <p className="story-progress">04 / 04</p>
          <p className="story-eyebrow">Scrapbook kecil</p>
          <h1 id="memories-title">Hal kecil yang bikin aku jatuh hati lagi</h1>
          <p className="story-lead">
            Bukan cuma foto bagus atau hari yang spesial. Kadang yang paling aku
            simpan justru hal kecil yang kamu lakuin tanpa sadar.
          </p>
        </div>

        <div className="memories-layout">
          <div className="photo-strip" aria-label="Grid foto kenangan">
            {PHOTOS.map((photo, index) => (
              <figure className="photo-placeholder" key={photo}>
                <img src={`/${photo}`} alt={`Kenangan ${index + 1}`} />
              </figure>
            ))}
          </div>

          <div className="little-things-panel">
            <p className="panel-label">Yang selalu aku notice</p>
            <ol className="little-things-list">
              {LITTLE_THINGS.map((item, index) => (
                <li key={item.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>
                    <strong>{item.title}</strong>
                    {item.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="story-actions story-actions-between">
          <StoryLink href="/our-story" variant="ghost">
            Sebelumnya
          </StoryLink>
          <StoryLink href="/" variant="soft">Kembali ke awal</StoryLink>
        </div>
      </section>
    </main>
  );
}
