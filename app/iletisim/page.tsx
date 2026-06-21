"use client";

import { useState } from "react";

const mapQuery =
  "Atalay Turizm Hamidiye Kuvayi Milliye Bl. Batum İş Hanı Kat 4 16600 Gemlik Bursa";

const encodedMapQuery = encodeURIComponent(mapQuery);
const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "gemlikatalayturizm@gmail.com";

export default function IletisimPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [responseMessage, setResponseMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setResponseMessage("");

    const formData = new FormData(event.currentTarget);

    const payload = {
      name: String(formData.get("name") || ""),
      phone: String(formData.get("phone") || ""),
      email: String(formData.get("email") || ""),
      service: String(formData.get("service") || ""),
      message: String(formData.get("message") || ""),
      kvkkAccepted: formData.get("kvkkAccepted") === "on",
      marketingConsent: formData.get("marketingConsent") === "on",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus("error");
        setResponseMessage(data.message || "Bir hata oluştu.");
        return;
      }

      setStatus("success");
      setResponseMessage(data.message || "Talebiniz başarıyla alındı.");
      event.currentTarget.reset();
    } catch {
      setStatus("error");
      setResponseMessage("Bağlantı sırasında bir hata oluştu.");
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] px-6 pb-24 pt-44 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(196,0,0,.22),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,.07),transparent_30%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#E00000]">
            İletişim
          </p>

          <h1 className="mt-5 text-5xl font-black leading-tight tracking-[-0.055em] md:text-7xl">
            Size özel ulaşım planı için iletişime geçin.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65">
            Personel taşımacılığı, öğrenci servisi ve kurumsal ulaşım
            hizmetlerimiz hakkında bilgi almak için bize ulaşabilirsiniz.
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-10 backdrop-blur-xl">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

            <h2 className="text-3xl font-black text-white">
              İletişim Bilgileri
            </h2>

            <div className="mt-10 space-y-8">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-[#E00000]">
                  Telefon
                </p>

                <a
                  href="tel:+905340630779"
                  className="mt-3 block text-lg font-semibold text-white/75 transition hover:text-white"
                >
                  +90 534 063 07 79
                </a>

                <a
                  href="tel:+905326265866"
                  className="mt-2 block text-lg font-semibold text-white/75 transition hover:text-white"
                >
                  +90 532 626 58 66
                </a>
              </div>

              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-[#E00000]">
                  E-Posta
                </p>

                <a
                  href={`mailto:${contactEmail}`}
                  className="mt-3 block break-all text-lg font-semibold text-white/75 transition hover:text-white"
                >
                  {contactEmail}
                </a>
              </div>

              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-[#E00000]">
                  WhatsApp
                </p>

                <a
                  href="https://wa.me/905340630779"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex rounded-lg bg-[#C40000] px-7 py-4 text-sm font-black uppercase tracking-widest text-white transition hover:-translate-y-1 hover:bg-[#990000]"
                >
                  WhatsApp ile Yaz
                </a>
              </div>

              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-[#E00000]">
                  Adres
                </p>

                <p className="mt-3 text-lg leading-8 text-white/70">
                  Hamidiye
                  <br />
                  Kuvayi Milliye Bl.
                  <br />
                  Batum İş Hanı Kat: 4
                  <br />
                  16600 Gemlik / Bursa
                </p>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodedMapQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex rounded-lg border border-white/15 px-6 py-3 text-sm font-black uppercase tracking-widest text-white transition hover:border-[#E00000] hover:bg-[#E00000]"
                >
                  Yol Tarifi Al
                </a>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 backdrop-blur-xl"
          >
            <h2 className="text-3xl font-black text-white">
              Teklif Talep Formu
            </h2>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <input
                name="name"
                required
                placeholder="Ad Soyad *"
                className="rounded-xl border border-white/10 bg-white/10 px-5 py-4 text-white outline-none placeholder:text-white/40 focus:border-[#E00000]"
              />

              <input
                name="phone"
                required
                placeholder="Telefon *"
                className="rounded-xl border border-white/10 bg-white/10 px-5 py-4 text-white outline-none placeholder:text-white/40 focus:border-[#E00000]"
              />

              <input
                name="email"
                type="email"
                placeholder="E-posta"
                className="rounded-xl border border-white/10 bg-white/10 px-5 py-4 text-white outline-none placeholder:text-white/40 focus:border-[#E00000]"
              />

              <select
                name="service"
                className="rounded-xl border border-white/10 bg-[#171717] px-5 py-4 text-white outline-none focus:border-[#E00000]"
              >
                <option value="">Hizmet Seçiniz</option>
                <option value="Personel Taşımacılığı">
                  Personel Taşımacılığı
                </option>
                <option value="Öğrenci Servisi">Öğrenci Servisi</option>
                <option value="Kurumsal Servis">Kurumsal Servis</option>
                <option value="Tur Organizasyonu">Tur Organizasyonu</option>
              </select>
            </div>

            <textarea
              name="message"
              required
              rows={6}
              placeholder="Mesajınız *"
              className="mt-5 w-full rounded-xl border border-white/10 bg-white/10 px-5 py-4 text-white outline-none placeholder:text-white/40 focus:border-[#E00000]"
            />

            <label className="mt-5 flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-white/70">
              <input
                name="kvkkAccepted"
                type="checkbox"
                required
                className="mt-1 h-4 w-4 shrink-0 accent-[#C40000]"
              />
              <span>
                Kişisel verilerimin işlenmesine ilişkin{" "}
                <a
                  href="/kvkk-aydinlatma-metni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-white underline decoration-[#E00000] underline-offset-4 transition hover:text-[#E00000]"
                >
                  KVKK Aydınlatma Metni
                </a>
                &apos;ni okudum.
              </span>
            </label>

            <label className="mt-3 flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.025] p-4 text-sm leading-6 text-white/60">
              <input
                name="marketingConsent"
                type="checkbox"
                className="mt-1 h-4 w-4 shrink-0 accent-[#C40000]"
              />
              <span>
                Kampanya, bilgilendirme ve tanıtım amaçlı ticari elektronik
                ileti gönderilmesine onay veriyorum.
              </span>
            </label>

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-6 w-full rounded-xl bg-[#C40000] px-8 py-4 text-sm font-black uppercase tracking-widest text-white transition hover:bg-[#990000] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "loading" ? "Gönderiliyor..." : "Teklif Talebi Gönder"}
            </button>

            {responseMessage && (
              <p
                className={`mt-5 rounded-xl px-5 py-4 text-sm font-semibold ${
                  status === "success"
                    ? "bg-green-500/15 text-green-300"
                    : "bg-red-500/15 text-red-300"
                }`}
              >
                {responseMessage}
              </p>
            )}
          </form>
        </div>

        <div className="mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-3 backdrop-blur-xl">
          <iframe
            src={`https://www.google.com/maps?q=${encodedMapQuery}&output=embed`}
            width="100%"
            height="100%"
            loading="lazy"
            className="min-h-[420px] rounded-[1.5rem]"
          />
        </div>
      </div>
    </main>
  );
}
