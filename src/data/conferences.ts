import cpetImg from "@/assets/cpet-test.jpg";
import ecgImg from "@/assets/ecg-review.jpg";
import ergoImg from "@/assets/ergometer.jpg";
import educationConferenceImg from "@/assets/education-conference.png";
import educationTrainingImg from "@/assets/education-training.png";
import checkupImg from "@/assets/service-checkup.jpg";
import rehabImg from "@/assets/service-rehab.jpg";
import sportsImg from "@/assets/service-sports.jpg";

export type ConferenceStatus = "finished" | "active" | "planned";

export type ConferenceItem = {
  id: string;
  title: string;
  date: string;
  dateIso: string;
  status: ConferenceStatus;
  image: string;
  imageAlt: string;
};

export const CONFERENCES: ConferenceItem[] = [
  {
    id: "psychological-support-recovery-2026",
    title: "Психологічна підтримка під час відновлення",
    date: "27-28 липня 2026",
    dateIso: "2026-07-27",
    status: "active",
    image: educationConferenceImg,
    imageAlt: "Конференція про психологічну підтримку у відновленні",
  },
  {
    id: "cardio-rehab-loads-2026",
    title: "Кардіореабілітація 2026: безпечне повернення до навантажень",
    date: "21 серпня 2026",
    dateIso: "2026-08-21",
    status: "planned",
    image: cpetImg,
    imageAlt: "Кардіологічна конференція про повернення до навантажень",
  },
  {
    id: "orthopedic-rehab-after-surgery-2026",
    title: "Ортопедична реабілітація після операцій",
    date: "12 вересня 2026",
    dateIso: "2026-09-12",
    status: "planned",
    image: rehabImg,
    imageAlt: "Конференція з ортопедичної реабілітації",
  },
  {
    id: "sports-medicine-mountains-2026",
    title: "Спортивна медицина у гірському середовищі",
    date: "5 жовтня 2026",
    dateIso: "2026-10-05",
    status: "planned",
    image: sportsImg,
    imageAlt: "Конференція зі спортивної медицини",
  },
  {
    id: "cpet-clinical-practice-2026",
    title: "CPET та навантажувальне тестування у практиці лікаря",
    date: "18 листопада 2026",
    dateIso: "2026-11-18",
    status: "planned",
    image: ergoImg,
    imageAlt: "Конференція про CPET та навантажувальне тестування",
  },
  {
    id: "multidisciplinary-rehab-2026",
    title: "Мультидисциплінарний підхід у реабілітації",
    date: "25 червня 2026",
    dateIso: "2026-06-25",
    status: "finished",
    image: educationTrainingImg,
    imageAlt: "Фахова конференція про мультидисциплінарну реабілітацію",
  },
  {
    id: "neurological-rehab-2026",
    title: "Неврологічна реабілітація: сучасні протоколи",
    date: "20 червня 2026",
    dateIso: "2026-06-20",
    status: "finished",
    image: checkupImg,
    imageAlt: "Конференція з неврологічної реабілітації",
  },
  {
    id: "vertebrology-back-pain-2026",
    title: "Вертебрологія та біль у спині: від діагностики до руху",
    date: "6 червня 2026",
    dateIso: "2026-06-06",
    status: "finished",
    image: ergoImg,
    imageAlt: "Конференція з вертебрології та болю у спині",
  },
  {
    id: "rheumatology-movement-2026",
    title: "Ревматологія та рухова активність без загострень",
    date: "17 травня 2026",
    dateIso: "2026-05-17",
    status: "finished",
    image: ecgImg,
    imageAlt: "Конференція з ревматології та рухової активності",
  },
  {
    id: "checkups-prevention-2026",
    title: "Чек-апи і профілактика: як виявляти ризики раніше",
    date: "19 квітня 2026",
    dateIso: "2026-04-19",
    status: "finished",
    image: checkupImg,
    imageAlt: "Конференція про чек-апи та профілактику",
  },
  {
    id: "heart-diagnostics-2026",
    title: "Діагностика серця: ЕКГ, УЗД та CPET",
    date: "22 березня 2026",
    dateIso: "2026-03-22",
    status: "finished",
    image: cpetImg,
    imageAlt: "Конференція про діагностику серця",
  },
  {
    id: "winter-rehab-school-2026",
    title: "Зимова школа реабілітації ОСНОВА",
    date: "14 лютого 2026",
    dateIso: "2026-02-14",
    status: "finished",
    image: educationConferenceImg,
    imageAlt: "Зимова школа реабілітації ОСНОВА",
  },
];
