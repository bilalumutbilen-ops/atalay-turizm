import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const recipientEmail =
  process.env.CONTACT_RECIPIENT_EMAIL || "gemlikatalayturizm@gmail.com";
const smtpHost = process.env.SMTP_HOST || "smtp.office365.com";
const smtpPort = Number(process.env.SMTP_PORT || 587);
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const fromEmail = process.env.SMTP_FROM || smtpUser;

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    if (!smtpUser || !smtpPass || !fromEmail) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Mail gönderimi için SMTP_USER ve SMTP_PASS ortam değişkenleri tanımlanmalıdır.",
        },
        { status: 500 }
      );
    }

    const body = await request.json();

    const name = String(body.name || "").trim();
    const phone = String(body.phone || "").trim();
    const email = String(body.email || "").trim();
    const service = String(body.service || "").trim();
    const message = String(body.message || "").trim();
    const kvkkAccepted = Boolean(body.kvkkAccepted);
    const marketingConsent = Boolean(body.marketingConsent);

    if (!name || !phone || !message) {
      return NextResponse.json(
        { success: false, message: "Ad soyad, telefon ve mesaj alanları zorunludur." },
        { status: 400 }
      );
    }

    if (!kvkkAccepted) {
      return NextResponse.json(
        {
          success: false,
          message: "KVKK Aydınlatma Metni onayı zorunludur.",
        },
        { status: 400 }
      );
    }

    const submittedAt = new Date().toLocaleString("tr-TR", {
      dateStyle: "long",
      timeStyle: "short",
      timeZone: "Europe/Istanbul",
    });

    const rows = [
      ["Ad Soyad", name],
      ["Telefon", phone],
      ["E-posta", email || "-"],
      ["Hizmet", service || "-"],
      ["Tarih", submittedAt],
      ["KVKK Aydınlatma Metni", "Okundu ve kabul edildi"],
      ["Ticari Elektronik İleti Onayı", marketingConsent ? "Var" : "Yok"],
    ];

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      requireTLS: smtpPort === 587,
    });

    await transporter.sendMail({
      from: `"Atalay Turizm" <${fromEmail}>`,
      to: recipientEmail,
      replyTo: email || fromEmail,
      subject: `Yeni teklif talebi - ${name}`,
      text: [
        "Atalay Turizm web sitesinden yeni teklif talebi geldi.",
        "",
        ...rows.map(([label, value]) => `${label}: ${value}`),
        "",
        "Mesaj:",
        message,
      ].join("\n"),
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#171717">
          <h2>Yeni teklif talebi</h2>
          <p>Atalay Turizm web sitesinden yeni bir teklif talebi geldi.</p>
          <table cellpadding="8" cellspacing="0" style="border-collapse:collapse">
            ${rows
              .map(
                ([label, value]) => `
                  <tr>
                    <td style="border:1px solid #e5e5e5;font-weight:bold">${escapeHtml(
                      label
                    )}</td>
                    <td style="border:1px solid #e5e5e5">${escapeHtml(
                      value
                    )}</td>
                  </tr>
                `
              )
              .join("")}
          </table>
          <h3>Mesaj</h3>
          <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Teklif talebiniz başarıyla gönderildi.",
    });
  } catch (error) {
    console.error("Teklif talebi mail gönderimi başarısız:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Teklif talebi gönderilirken bir hata oluştu.",
      },
      { status: 500 }
    );
  }
}
