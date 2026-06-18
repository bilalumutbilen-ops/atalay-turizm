import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body.name || "").trim();
    const phone = String(body.phone || "").trim();
    const email = String(body.email || "").trim();
    const service = String(body.service || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !phone || !message) {
      return NextResponse.json(
        { success: false, message: "Ad soyad, telefon ve mesaj alanları zorunludur." },
        { status: 400 }
      );
    }

    const contactRequest = {
      name,
      phone,
      email,
      service,
      message,
      createdAt: new Date().toISOString(),
    };

    console.log("Yeni teklif talebi:", contactRequest);

    return NextResponse.json({
      success: true,
      message: "Teklif talebiniz başarıyla alındı.",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Teklif talebi işlenirken bir hata oluştu." },
      { status: 500 }
    );
  }
}