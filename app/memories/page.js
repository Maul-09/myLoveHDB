import StoryLink from "../components/StoryLink";

const LITTLE_THINGS = [
  "Cara kamu semangat waktu cerita hal yang kamu suka.",
  "Ketawa kamu yang kadang muncul di waktu paling random.",
  "Sisi manja kamu yang cuma keluar ke orang tertentu.",
  "Cara kamu tetap mencoba, bahkan saat harinya lagi berat.",
  "Hal-hal receh yang cuma kita berdua anggap lucu.",
  "Cara kamu bikin hari biasa terasa punya cerita.",
];

const PHOTO_SLOTS = [
  { number: "01", caption: "Momen yang bikin kita ketawa lama." },
  { number: "02", caption: "Hari sederhana yang tetap aku simpan." },
  { number: "03", caption: "Salah satu foto favorit kita nanti." },
];

export const metadata = {
  title: "Hal Kecil Tentang Kamu",
  description: "Kenangan dan hal-hal kecil yang selalu disukai.",
};

export default function MemoriesPage() {
  return (
    <main className="story-page story-memories-page">
      <section className="story-shell story-shell-wide" aria-labelledby="memories-title">
        <div className="story-heading">
          <p className="story-progress">04 / 05</p>
          <p className="story-eyebrow">Little things, big feelings</p>
          <h1 id="memories-title">Hal kecil yang selalu aku notice</h1>
          <p className="story-lead">
            Mungkin kelihatannya sederhana, tapi justru hal-hal ini yang bikin
            kamu terasa begitu spesial buat aku.
          </p>
        </div>

        <div className="memories-layout">
          <div className="photo-strip" aria-label="Tempat foto kenangan">
            {PHOTO_SLOTS.map((photo) => (
              <figure className="photo-placeholder" key={photo.number}>
                <div className="photo-empty-state">
                  <span>{photo.number}</span>
                  <small>Foto kita</small>
                </div>
                <figcaption>{photo.caption}</figcaption>
              </figure>
            ))}
          </div>

          <div className="little-things-panel">
            <p className="panel-label">Yang aku suka dari kamu</p>
            <ol className="little-things-list">
              {LITTLE_THINGS.map((item, index) => (
                <li key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="story-actions story-actions-between">
          <StoryLink href="/our-story" variant="ghost">
            Sebelumnya
          </StoryLink>
          <StoryLink href="/final-surprise">Satu halaman terakhir</StoryLink>
        </div>
      </section>
    </main>
  );
}
