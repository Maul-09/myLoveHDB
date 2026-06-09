import Link from "next/link";

const LETTER_PARAGRAPHS = [
  "Akhirnya sampai juga di halaman kecil yang aku siapin buat kamu. Bacanya pelan-pelan ya, nggak usah buru-buru. Hari ini aku cuma pengin kamu ngerasa benar-benar dirayain.",
  "Selamat ulang tahun, cayaang. Makasih udah jadi kamu — yang lucu, random, bawel, manja, kuat, kadang nyebelin dikit, tapi tetap jadi orang yang paling aku sayang.",
  "Banyak hal kecil dari kamu yang mungkin kamu anggap biasa, tapi buat aku selalu berhasil bikin hari terasa lebih hangat. Cara kamu cerita, ketawa, ngambek, sampai hal-hal receh yang cuma kita berdua ngerti.",
  "Tahun ini jadi tahun kedua kita. Banyak yang udah kita lewatin: yang manis, yang sederhana, sampai yang bikin kita belajar lebih sabar. Dari semuanya, aku makin yakin kalau aku masih mau terus jalan bareng kamu.",
  "Aku nggak janji semuanya bakal selalu gampang. Tapi aku mau terus belajar jadi orang yang lebih ngerti kamu, lebih sabar sama kamu, dan lebih bisa bikin kamu ngerasa aman.",
  "Hari ini, semoga kamu ngerasa disayang dengan cara yang lembut, tulus, dan nggak setengah-setengah. Semoga halaman kecil ini jadi salah satu momen yang kamu inget sambil senyum.",
];

const MEMORY_CARDS = [
  { icon: "♡", title: "Yang aku suka", text: "Kamu selalu punya cara kecil buat bikin hari aku lebih ringan." },
  { icon: "✦", title: "Doa aku", text: "Semoga tahun ini lebih lembut, lebih banyak kabar baik, lebih banyak alasan buat senyum." },
  { icon: "❀", title: "Janji kecil", text: "Aku mau tetap belajar jadi rumah yang aman buat kamu pulang." },
];

export const metadata = {
  title: "Birthday Letter",
  description: "Surat kecil untuk hari ulang tahun kamu.",
};

export default function SurprisePage() {
  return (
    <main className="letter-page">
      <div className="decor-layer" aria-hidden="true">
        <span className="heart heart-one" />
        <span className="heart heart-two" />
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
                Ini bukan surat yang sempurna. Tapi semua yang ada di sini aku tulis
                dari hati, khusus buat kamu.
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

        <div className="letter-memory-grid" aria-label="Hal kecil buat kamu">
          {MEMORY_CARDS.map((item) => (
            <article className="memory-card" key={item.title}>
              <span className="memory-icon" aria-hidden="true">{item.icon}</span>
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
            <span>Dari,</span>
            <strong>Brokoli kecayangan kamu</strong>
          </footer>
        </article>

        <div className="letter-actions">
          <Link className="letter-link" href="/">
            Kembali ke countdown
          </Link>
          <button className="letter-next-button" type="button" disabled>
            Lanjut ke cerita kita
          </button>
        </div>
      </section>
    </main>
  );
}
