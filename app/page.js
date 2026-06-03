"use client";

import { useEffect, useMemo, useState } from "react";

const TARGET_DATE = new Date("2026-07-09T00:00:00+07:00").getTime();
const DECORATIONS = [
  "heart heart-one",
  "heart heart-two",
  "spark spark-one",
];

function getTimeLeft() {
  const distance = Math.max(0, TARGET_DATE - Date.now());

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((distance / (1000 * 60)) % 60),
    seconds: Math.floor((distance / 1000) % 60),
    isDone: distance === 0,
  };
}

function formatUnit(value) {
  return String(value).padStart(2, "0");
}

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(getTimeLeft());

    const timer = window.setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const units = useMemo(
    () => [
      { label: "Hari", value: timeLeft.days, tone: "pink" },
      { label: "Jam", value: timeLeft.hours, tone: "blue" },
      { label: "Menit", value: timeLeft.minutes, tone: "lavender" },
      { label: "Detik", value: timeLeft.seconds, tone: "sunny" },
    ],
    [timeLeft],
  );
  const subtitleLines = timeLeft.isDone
    ? [
        "Akhirnya tiba juga ya Cayaang.",
        "Hari ini aku cuma mau kamu ngerasa paling disayang.",
      ]
    : [
        "Aku nggak mau ngasih banyak bocoran dulu.",
        "Kamu kan kecayangan aku yang suka banget dikasih surprise.",
        "Yang jelas, ada sesuatu yang lagi aku siapin buat kamu, cayaang :). Tungguin aja ya!",
      ];

  return (
    <main className="countdown-page">
      <div className="decor-layer" aria-hidden="true">
        {DECORATIONS.map((className) => (
          <span className={className} key={className} />
        ))}
      </div>

      <section className="countdown-content" aria-live="polite">
        <p className="eyebrow">
          <span className="mini-heart" aria-hidden="true" />
          Hai, sayang
          <span className="mini-spark" aria-hidden="true" />
        </p>
        <h1>Tinggal Nunggu Hari Kamu</h1>
        <p className="subtitle">
          {subtitleLines.map((line) => (
            <span className="subtitle-line" key={line}>
              {line}
            </span>
          ))}
        </p>

        <div className="countdown-grid">
          {units.map((unit) => (
            <div className={`countdown-unit ${unit.tone}`} key={unit.label}>
              <span className="countdown-number">
                {mounted ? formatUnit(unit.value) : "--"}
              </span>
              <span className="countdown-label">{unit.label}</span>
            </div>
          ))}
        </div>

        <div className="target-row">
          <span>9 Juli 2026</span>
          <span>Hari yang kamu tunggu</span>
        </div>
        <p className="sweet-note">
          Aku cuma pengen pas hari itu tiba bakalan jadi salah satu momen kecil
          yang kamu inget sambil senyum xixi. ~ Brokoli Kecayangan Kamu
        </p>
      </section>
    </main>
  );
}
