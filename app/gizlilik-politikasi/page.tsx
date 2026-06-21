import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";

const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "gemlikatalayturizm@gmail.com";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description:
    "Atalay Turizm web sitesi gizlilik politikası ve veri işleme bilgilendirmesi.",
};

export default function GizlilikPolitikasiPage() {
  return (
    <LegalPage
      eyebrow="Gizlilik"
      title="Gizlilik Politikası"
      description="Bu politika, web sitemizi ziyaret ettiğinizde veya iletişim formunu kullandığınızda hangi bilgilerin işlendiğini genel hatlarıyla açıklar."
      sections={[
        {
          title: "Toplanan Bilgiler",
          body: [
            "Web sitemizde iletişim formu aracılığıyla ad soyad, telefon, e-posta, hizmet seçimi ve mesaj bilgileri toplanabilir.",
            "Çerez tercihlerinize bağlı olarak analitik çerezler aracılığıyla ziyaret bilgileri işlenebilir.",
          ],
        },
        {
          title: "Kullanım Amaçları",
          body: [
            "Bilgileriniz taleplerinize yanıt vermek, teklif hazırlamak, hizmet kalitesini artırmak ve site performansını değerlendirmek amacıyla kullanılır.",
            "Açık onayınız olmadan pazarlama amaçlı ticari elektronik ileti gönderimi yapılmaz.",
          ],
        },
        {
          title: "Üçüncü Taraf Hizmetler",
          body: [
            "Site performansını ölçmek için Google Analytics kullanılabilir. Analitik çerezler yalnızca onay vermeniz halinde çalıştırılır.",
            "İletişim formu e-postalarının iletilmesi için e-posta altyapı hizmetlerinden yararlanılabilir.",
          ],
        },
        {
          title: "Güvenlik",
          body: [
            "Kişisel verilerinizin yetkisiz erişime, kayba veya kötüye kullanıma karşı korunması için makul teknik ve idari tedbirler alınır.",
            "Buna rağmen internet üzerinden yapılan hiçbir veri aktarımının mutlak güvenli olduğu garanti edilemez.",
          ],
        },
        {
          title: "İletişim",
          body: [
            `Gizlilik politikası veya kişisel verilerinizle ilgili sorularınız için ${contactEmail} adresinden bize ulaşabilirsiniz.`,
          ],
        },
      ]}
    />
  );
}
