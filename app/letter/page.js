import StoryLink from "../components/StoryLink";

const LETTER_PARAGRAPHS = [
  "Akhirnya kamu sampai juga di surat kecil ini. Makasih ya cayaangg udah mau meluangkan waktu buat baca semuanya. Bacanya pelan-pelan aja, nggak usah buru-buru. Hari ini aku cuma pengin kamu ngerasa kalau ada seseorang yang benar-benar bahagia karena hari ini kamu lahir ke dunia.",

  "Selamat ulang tahun ya, Cayaang. 🤍 Makasih karena udah jadi diri kamu sendiri yang selalu terlihat lucu, random, bawel, manja dan selalu berhasil jadi alasan kenapa hari-hari aku terasa lebih berwarna.",

  "Ada banyak hal dari kamu yang mungkin menurut kamu biasa aja tapi buat aku semuanya berarti sayaang. Cara kamu cerita tentang hari kamu, cara kamu selalu dengerin keluh kesah aku, ngambek karena hal receh, bahkan obrolan-obrolan random kita yang mungkin besok udah lupa pun semuanya selalu jadi bagian favorit aku tauu.",

  "Di hari ulang tahun kamu ini, aku nggak cuma pengin ngucapin selamat atau mendoakan hal-hal yang baik doang tapi aku juga pengin kamu tahu kalau kehadiran kamu itu berarti banget buat aku. Terima kasih karena tanpa sadar, kamu udah membawa banyak bahagia ke hidup aku yaa sayaang.",

  "Sekarang kamu resmi masuk umur 23. Aku tahu banget gimana perjalanan kamu untuk bisa sampai di titik ini cayaang. Ada hari-hari yang bikin capek, ada hal-hal yang mungkin gak pengen kamu alamin tapi di balik itu kamu tetap bertahan dan tetap berusaha. Aku bangga banget sama kamu lebih dari yang mungkin sering aku ucapkan.",

  "Semoga di umur yang baru ini, semesta memperlakukan kamu dengan lebih lembut lagi sayaang. Semoga langkah kamu dimudahkan, hati kamu lebih sering tenang dan kebahagiaan datang dari hal-hal sederhana dan kalau suatu hari dunia terasa berat, kamu harus selalu ingat kalau kamu nggak pernah sendirian cayaang karena ada aku yang akan selalu hadir buat kamu 🤍",
];

const HIGHLIGHTS = [
  {
    icon: "♡",
    title: "Tentang kamu",
    text: "Kalau ditanya kenapa aku sayang sama kamu, mungkin jawabannya terlalu banyak sihh. Tapi yang paling bermakna karena setiap hari kamu selalu berhasil bikin hidup aku terasa lebih indah.",
  },
  {
    icon: "✦",
    title: "Doa yang selalu aku titipkan",
    text: "Semoga Allah selalu menjaga kamu, menguatkan kamu di setiap langkah dan menghadirkan lebih banyak kebahagiaan daripada kesedihan.",
  },
  {
    icon: "❀",
    title: "Satu janji dari aku",
    text: "Aku ingin terus tumbuh bareng kamu dalam hal apapun. Menemani setiap cerita, merayakan setiap pencapaian dan memeluk kamu di setiap hari yang terasa berat.",
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
                Ini mungkin bukan surat yang sempurna tapi semua yang ada di sini aku
                tulis dari hati yang paling dalam khusus buat kamu.
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
