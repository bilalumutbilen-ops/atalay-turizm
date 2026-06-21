import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Yasal Uyarı",
  description: "Atalay Turizm web sitesi kullanımına ilişkin yasal uyarı.",
};

export default function YasalUyariPage() {
  return (
    <LegalPage
      eyebrow="Yasal"
      title="Yasal Uyarı"
      description="Bu sayfa, web sitesinde yer alan içeriklerin kullanımına ve bilgilendirme niteliğine ilişkin genel açıklamaları içerir."
      sections={[
        {
          title: "Bilgilendirme Niteliği",
          body: [
            "Bu web sitesindeki bilgiler Atalay Turizm hizmetlerini tanıtmak amacıyla sunulmaktadır.",
            "Sitede yer alan bilgiler, özel teklif veya sözleşme hükmü niteliği taşımaz. Kesin hizmet koşulları ayrıca yapılacak görüşme ve mutabakatla belirlenir.",
          ],
        },
        {
          title: "İçerik Kullanımı",
          body: [
            "Web sitesindeki metin, görsel, logo ve diğer içerikler izinsiz olarak kopyalanamaz, çoğaltılamaz veya ticari amaçla kullanılamaz.",
            "Üçüncü taraf marka ve hizmet adları ilgili sahiplerine aittir.",
          ],
        },
        {
          title: "Bağlantılar",
          body: [
            "Web sitesinde harita, WhatsApp veya benzeri üçüncü taraf hizmetlere bağlantılar bulunabilir.",
            "Bu bağlantılar üzerinden erişilen üçüncü taraf hizmetlerin içerik ve politikalarından Atalay Turizm sorumlu değildir.",
          ],
        },
        {
          title: "Güncellemeler",
          body: [
            "Atalay Turizm, web sitesi içeriklerini, yasal metinleri ve hizmet bilgilerini gerektiğinde güncelleme hakkını saklı tutar.",
          ],
        },
      ]}
    />
  );
}
