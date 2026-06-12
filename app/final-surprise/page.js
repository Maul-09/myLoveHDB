import StoryLink from "../components/StoryLink";

export const metadata = {
  title: "Satu Surprise Terakhir",
  description: "Penutup kecil untuk kejutan ulang tahun kamu.",
};

export default function FinalSurprisePage() {
  return (
    <main className="story-page story-final-page">
      <section className="final-shell" aria-labelledby="final-title">
        <p className="story-progress">05 / 05</p>

        <div className="final-gift" aria-hidden="true">
          <span className="gift-lid" />
          <span className="gift-box" />
          <span className="gift-ribbon" />
        </div>

        <p className="story-eyebrow">One last thing</p>
        <h1 id="final-title">Surprise aslinya ada di sini nanti</h1>
        <p className="story-lead">
          Bagian ini sengaja belum aku buka sekarang. Nanti bisa diisi video,
          petunjuk hadiah, lokasi dinner, QR code, atau pesan terakhir yang cuma
          boleh kamu lihat di hari ulang tahunmu.
        </p>

        <div className="reveal-placeholder">
          <span>Locked for now</span>
          <strong>9 Juli 2026</strong>
          <p>Tempat untuk hadiah atau reveal utama.</p>
        </div>

        <p className="final-message">
          Selamat ulang tahun ke-23, Cayaang. Terima kasih sudah jadi kamu, dan
          terima kasih sudah sampai di halaman terakhir ini.
        </p>

        <div className="story-actions story-actions-center">
          <StoryLink href="/memories" variant="ghost">
            Sebelumnya
          </StoryLink>
          <StoryLink href="/" variant="soft">
            Kembali ke awal
          </StoryLink>
        </div>
      </section>
    </main>
  );
}
