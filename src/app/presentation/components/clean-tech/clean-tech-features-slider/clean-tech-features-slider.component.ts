import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-clean-tech-features-slider',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './clean-tech-features-slider.component.html',
  styleUrl: './clean-tech-features-slider.component.scss',
})
export class CleanTechFeaturesSliderComponent {
  carouselItems = [
    {
      id: 'multiLanguageEnglish',
      interval: 10000,
      title: 'Multi Languages',
      description:
        'Our system currently supports three languages: Arabic, English, and Urdu, to provide a seamless, multicultural user experience. We are constantly developing the system to add more languages soon, aiming to meet the needs of the largest number of users around the world.',
      lang: 'en',
    },
    {
      id: 'multiLanguageArabic',
      interval: 10000,
      title: 'متعدد اللغات',
      description:
        'يدعم نظامنا حاليًا ثلاث لغات: العربية والإنجليزية والأردية، لتوفير تجربة مستخدم سلسة ومتعددة الثقافات. نحن نطور النظام باستمرار لإضافة المزيد من اللغات قريبًا، بهدف تلبية احتياجات أكبر عدد من المستخدمين حول العالم.',
      lang: 'ar',
    },
    {
      id: 'multiLanguageUrdu',
      interval: 10000,
      title: 'کثیر اللسانی',
      description:
        'ہمارا نظام فی الحال تین زبانوں کو سپورٹ کرتا ہے: عربی، انگریزی اور اردو، تاکہ ایک ہموار، کثیرالثقافتی صارف کا تجربہ فراہم کیا جا سکے۔ ہم مسلسل نظام کو مزید زبانوں کو شامل کرنے کے لیے تیار کر رہے ہیں، جس کا مقصد دنیا بھر میں صارفین کی سب سے بڑی تعداد کی ضروریات کو پورا کرنا ہے۔',
      lang: 'ur',
    },
    {
      id: 'facilityControl',
      interval: 2000,
      titleKey: 'Complete Control oF Your Facility.',
      descriptionKey:
        'Clean Tech helps you manage all your facility operations—from cleanliness to workforce—in one smart dashboard. Get real-time updates, automated tasks, and full visibility across all departments, anytime, anywhere.',
    },
  ];
}
