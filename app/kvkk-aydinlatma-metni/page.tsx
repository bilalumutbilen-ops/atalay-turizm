import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";

const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "gemlikatalayturizm@gmail.com";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  description:
    "Atalay Turizm iletişim formu kapsamında işlenen kişisel verilere ilişkin aydınlatma metni.",
};

export default function KvkkAydinlatmaMetniPage() {
  return (
    <LegalPage
      eyebrow="KVKK"
      title="KVKK Aydınlatma Metni"
      description="Bu metin, web sitemizdeki iletişim ve teklif talep formu üzerinden paylaşılan kişisel verilerin hangi amaçlarla işlendiğini açıklamak için hazırlanmıştır."
      sections={[
        {
          title: "Veri Sorumlusu",
          body: [
            "Kişisel verileriniz, Atalay Turizm tarafından 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında veri sorumlusu sıfatıyla işlenmektedir.",
            `İletişim için ${contactEmail} adresini veya sitede yer alan telefon numaralarını kullanabilirsiniz.`,
          ],
        },
        {
          title: "İşlenen Kişisel Veriler",
          body: [
            "İletişim formu aracılığıyla ad soyad, telefon numarası, e-posta adresi, talep edilen hizmet türü ve mesaj içeriği işlenebilir.",
            "Form gönderimi sırasında teknik güvenlik ve işlem kayıtları da sınırlı olarak işlenebilir.",
          ],
        },
        {
          title: "İşleme Amaçları",
          body: [
            "Kişisel verileriniz teklif talebinizi değerlendirmek, sizinle iletişime geçmek, hizmet ihtiyacınızı anlamak ve talebinize dönüş yapmak amacıyla işlenir.",
            "Ayrıca hukuki yükümlülüklerin yerine getirilmesi ve olası uyuşmazlıklarda hakların korunması amaçlarıyla sınırlı işleme yapılabilir.",
          ],
        },
        {
          title: "Hukuki Sebep",
          body: [
            "Verileriniz, KVKK madde 5 kapsamında bir sözleşmenin kurulması veya ifasıyla doğrudan ilgili olması, veri sorumlusunun meşru menfaati ve ilgili kişinin kendisi tarafından alenileştirilmiş olması hukuki sebeplerine dayanılarak işlenebilir.",
            "Ticari elektronik ileti gönderimi gibi ayrıca onay gerektiren işlemler için açık onayınız alınır.",
          ],
        },
        {
          title: "Aktarım ve Saklama",
          body: [
            "Verileriniz, talebin yanıtlanması için e-posta hizmet sağlayıcıları ve teknik altyapı hizmet sağlayıcılarıyla sınırlı olarak paylaşılabilir.",
            "Kişisel verileriniz işleme amacı için gerekli süre boyunca ve yasal saklama süreleriyle sınırlı olarak saklanır.",
          ],
        },
        {
          title: "Haklarınız",
          body: [
            "KVKK madde 11 kapsamında kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, eksik veya yanlış işlenmişse düzeltilmesini isteme, silinmesini veya yok edilmesini talep etme haklarına sahipsiniz.",
            `Taleplerinizi ${contactEmail} adresi üzerinden bize iletebilirsiniz.`,
          ],
        },
      ]}
    />
  );
}
