import StoryLink from "../components/StoryLink";

const MOMENTS = [
  {
    marker: "01",
    title: "Sejauh ini, kamu hebat.",
    text: "Nggak semua hari yang kamu lewatin itu mudah, tapi kamu berhasil sampai di titik ini dan itu layak buat dibanggakan.",
  },
  {
    marker: "02",
    title: "Tetap jadi kamu.",
    text: "Aku suka cara kamu tumbuh tanpa kehilangan sisi hangat, lucu dan manja yang selalu bikin aku senyum.",
  },
  {
    marker: "03",
    title: "Semoga lebih banyak bahagia.",
    text: "Semoga umur 23 membawa lebih banyak ketenangan kesempatan baru, dan alasan buat kamu tersenyum.",
  },
  {
    marker: "04",
    title: "Aku ada di sini.",
    text: "Nggak perlu buru-buru. Jalanin semuanya pelan-pelan aja ya sayang soalnya aku akan selalu siap dengerin cerita kamu.",
  },
];

export const metadata = {
  title: "Tentang Kamu di Usia 23",
  description: "Hal-hal kecil yang ingin aku sampaikan di hari spesialmu.",
};

export default function OurStoryPage() {
  return (
    <main className="story-page story-timeline-page">
      <section className="story-shell" aria-labelledby="timeline-title">
        <div className="story-heading story-heading-center">
          <p className="story-progress">03 / 04</p>
          <p className="story-eyebrow">Chapter Twenty-Three</p>
            <h1 id="timeline-title">
              Untuk kamu, di usia 23.
            </h1>

            <p className="story-lead">
              Semoga tahun ini dipenuhi lebih banyak
              tenang, tawa dan hal-hal baik yang pantas kamu dapatkan.
            </p>
        </div>

        <div className="relationship-timeline">
          {MOMENTS.map((moment) => (
            <article className="timeline-moment" key={moment.marker}>
              <span className="timeline-marker">{moment.marker}</span>
              <div>
                <h2>{moment.title}</h2>
                <p>{moment.text}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="story-quote">
          “Di usia 23 ini, semoga kamu lebih sering merasa cukup, dicintai, dan
          bangga sama diri kamu sendiri.”
        </p>

        <div className="story-actions story-actions-between">
          <StoryLink href="/letter" variant="ghost">
            Sebelumnya
          </StoryLink>
          <StoryLink href="/memories">Hal kecil tentang kamu</StoryLink>
        </div>
      </section>
    </main>
  );
}
