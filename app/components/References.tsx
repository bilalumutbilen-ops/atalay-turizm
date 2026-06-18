const references = [
  "Kurumsal Firma",
  "Otel Partneri",
  "Organizasyon Şirketi",
  "Turizm Acentesi",
  "Eğitim Kurumu",
];

export default function References() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C8A96B]">
            Referanslar
          </p>
          <h2 className="max-w-3xl text-4xl font-semibold md:text-5xl">
            Kurumsal iş ortaklıklarına uygun profesyonel hizmet standardı.
          </h2>
        </div>

        <p className="max-w-md text-sm leading-7 text-white/55">
          Atalay Turizm; kurumların operasyonel ihtiyaçlarına göre güvenli,
          planlı ve sürdürülebilir ulaşım çözümleri geliştirir.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-5">
        {references.map((item) => (
          <div
            key={item}
            className="flex h-28 items-center justify-center rounded-3xl border border-white/10 bg-white/[0.04] px-4 text-center text-sm uppercase tracking-[0.18em] text-white/35"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}