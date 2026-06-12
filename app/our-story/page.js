import StoryLink from "../components/StoryLink";

const MOMENTS = [
  {
    marker: "01",
    title: "Semua yang sudah kamu lewati",
    text: "Ada banyak hari yang mungkin nggak mudah, tapi kamu berhasil sampai sejauh ini dengan caramu sendiri.",
  },
  {
    marker: "02",
    title: "Diri kamu yang sekarang",
    text: "Kamu tumbuh jadi perempuan yang kuat, hangat, lucu, dan tetap punya sisi manja yang paling aku sayang.",
  },
  {
    marker: "03",
    title: "Hal baik yang menunggu",
    text: "Semoga usia 23 membawa lebih banyak tenang, kesempatan baru, dan hal-hal baik yang selama ini kamu tunggu.",
  },
  {
    marker: "04",
    title: "Satu tahun yang baru",
    text: "Nggak perlu punya semua jawabannya sekarang. Jalanin pelan-pelan, aku akan tetap ada buat dengerin cerita kamu.",
  },
];

export const metadata = {
  title: "Tentang Kamu di Usia 23",
  description: "Hal-hal baik untuk langkah baru di usia 23.",
};

export default function OurStoryPage() {
  return (
    <main className="story-page story-timeline-page">
      <section className="story-shell" aria-labelledby="timeline-title">
        <div className="story-heading story-heading-center">
          <p className="story-progress">03 / 05</p>
          <p className="story-eyebrow">Chapter twenty-three</p>
          <h1 id="timeline-title">Selamat datang di usia 23</h1>
          <p className="story-lead">
            Satu bab baru buat kamu, dengan lebih banyak ruang untuk tumbuh,
            istirahat, mencoba, dan bahagia.
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
