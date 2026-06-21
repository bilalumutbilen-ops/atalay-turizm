import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Çerez Politikası",
  description:
    "Atalay Turizm web sitesinde kullanılan çerezlere ilişkin bilgilendirme.",
};

export default function CerezPolitikasiPage() {
  return (
    <LegalPage
      eyebrow="Çerezler"
      title="Çerez Politikası"
      description="Bu politika, web sitemizde kullanılan çerez türlerini ve çerez tercihlerinizi nasıl yönetebileceğinizi açıklar."
      sections={[
        {
          title: "Çerez Nedir?",
          body: [
            "Çerezler, web sitesini ziyaret ettiğinizde tarayıcınızda saklanabilen küçük metin dosyalarıdır.",
            "Çerezler site tercihlerinizi hatırlamak, güvenli ve düzgün çalışmayı sağlamak veya site kullanımını analiz etmek için kullanılabilir.",
          ],
        },
        {
          title: "Zorunlu Çerezler",
          body: [
            "Zorunlu çerezler sitenin güvenli ve temel işlevleriyle çalışması için gereklidir. Bu çerezler için ayrıca onay aranmayabilir.",
            "Çerez tercihlerinizi hatırlamak için kullanılan tercih kaydı bu kapsamdadır.",
          ],
        },
        {
          title: "Analitik Çerezler",
          body: [
            "Google Analytics gibi analitik araçlar, ziyaretçilerin siteyi nasıl kullandığını anlamaya yardımcı olur.",
            "Analitik çerezler yalnızca açık onay vermeniz halinde çalıştırılır.",
          ],
        },
        {
          title: "Tercihlerinizi Yönetme",
          body: [
            "Siteye ilk girişinizde çerez tercih bannerı üzerinden analitik çerezleri kabul edebilir veya reddedebilirsiniz.",
            "Tarayıcı ayarlarınız üzerinden çerezleri silebilir veya engelleyebilirsiniz. Bu işlem bazı site özelliklerinin çalışma şeklini etkileyebilir.",
          ],
        },
      ]}
    />
  );
}
