import StoryLink from "../components/StoryLink";

export const metadata = {
  title: "Surprise Buat Kamu",
  description: "Awal dari kejutan kecil untuk hari spesial kamu.",
};

export default function SurprisePage() {
  return (
    <main className="story-page story-opening">
      <div className="story-ambient" aria-hidden="true">
        <span className="ambient-heart ambient-heart-left" />
        <span className="ambient-star ambient-star-right" />
      </div>

      <section className="opening-shell" aria-labelledby="opening-title">
        <p className="story-progress">01 / 04</p>

        <div className="opening-envelope" aria-hidden="true">
          <span className="envelope-paper" />
          <span className="envelope-body" />
          <span className="envelope-seal">B</span>
        </div>

        <p className="story-eyebrow">A little surprise for you</p>
        <h1 id="opening-title">Akhirnya hari ulang tahun kamu datang juga sayang 🤍</h1>
        <p className="story-lead">
          Hari ini aku cuma ingin kamu meluangkan sedikit waktu untuk membaca sesuatu yang aku siapkan khusus buat kamu Cayaang
        </p>

        <div className="story-actions story-actions-center">
          <StoryLink href="/letter">Mulai dari surat kecil</StoryLink>
          <StoryLink href="/" variant="ghost">
            Kembali
          </StoryLink>
        </div>
      </section>
    </main>
  );
}
