import StoryLink from "../components/StoryLink";

const LETTER_PARAGRAPHS = [
  "Akhirnya sampai juga di halaman kecil yang aku siapin buat kamu. Bacanya pelan-pelan ya, nggak usah buru-buru. Hari ini aku cuma pengin kamu ngerasa benar-benar dirayain.",
  "Selamat ulang tahun, Cayaang. Makasih udah jadi kamu, yang lucu, random, bawel, manja, kuat, kadang nyebelin dikit, tapi tetap jadi orang yang paling aku sayang.",
  "Banyak hal kecil dari kamu yang mungkin terasa biasa. Tapi buat aku, cara kamu cerita, ketawa, ngambek, sampai hal receh yang cuma kita berdua ngerti selalu berhasil bikin hari terasa lebih hangat.",
  "Aku nggak cuma pengin bilang semoga panjang umur dan bahagia. Aku pengin kamu tahu kalau kehadiran kamu berarti banget. Kamu pantas dirayain, didengerin, dan disayang tanpa harus jadi siapa-siapa selain diri kamu sendiri.",
  "Sekarang kamu masuk usia 23. Aku tahu perjalanan sampai di umur ini nggak selalu gampang, jadi aku bangga banget sama kamu yang tetap bertahan, tetap mencoba, dan terus tumbuh jadi versi kamu yang sekarang.",
  "Semoga di umur yang baru ini ada lebih banyak hari yang lembut, kabar baik yang datang tanpa diduga, dan alasan kecil buat kamu tersenyum lebih lama.",
];

const HIGHLIGHTS = [
  {
    icon: "♡",
    title: "Yang aku suka",
    text: "Kamu selalu punya cara kecil buat bikin hari aku lebih ringan.",
  },
  {
    icon: "✦",
    title: "Doa aku",
    text: "Semoga tahun ini lebih lembut, lebih banyak kabar baik, dan lebih banyak alasan buat senyum.",
  },
  {
    icon: "❀",
    title: "Janji kecil",
    text: "Aku mau tetap belajar jadi rumah yang aman buat kamu pulang.",
  },
];

export const metadata = {
  title: "Surat Buat Kamu",
  description: "Birthday letter kecil yang ditulis khusus buat kamu.",
};

export default function LetterPage() {
  return (
    <main className="letter-page">
      <div className="decor-layer" aria-hidden="true">
        <span className="heart heart-one" />
        <span className="spark spark-one" />
      </div>

      <section className="letter-shell" aria-labelledby="letter-title">
        <div className="letter-hero-card">
          <p className="letter-topline">
            <span className="mini-heart" aria-hidden="true" />
            Birthday surprise
          </p>

          <div className="letter-hero-grid">
            <div className="letter-hero-copy">
              <p className="letter-kicker">Untuk wanita yang paling aku sayang</p>
              <h1 id="letter-title">Selamat ulang tahun, Cayaang</h1>
              <p className="letter-intro">
                Ini bukan surat yang sempurna. Tapi semua yang ada di sini aku
                tulis dari hati, khusus buat kamu.
              </p>
            </div>

            <div className="birthday-orbit" aria-hidden="true">
              <span className="orbit-ring" />
              <span className="cake-card">🎂</span>
              <span className="floating-note note-one">xixi</span>
              <span className="floating-note note-two">love</span>
            </div>
          </div>
        </div>

        <div className="letter-memory-grid" aria-label="Pesan kecil buat kamu">
          {HIGHLIGHTS.map((item) => (
            <article className="memory-card" key={item.title}>
              <span className="memory-icon" aria-hidden="true">
                {item.icon}
              </span>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <article className="letter-paper">
          <div className="letter-body">
            {LETTER_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <footer className="letter-signature">
            <span>Dengan banyak sayang,</span>
            <strong>Brokoli kecayangan kamu</strong>
          </footer>
        </article>

        <div className="letter-actions story-actions-between">
          <StoryLink href="/surprise" variant="ghost">
            Sebelumnya
          </StoryLink>
          <StoryLink href="/our-story">Tentang kamu di usia 23</StoryLink>
        </div>
      </section>
    </main>
  );
}
