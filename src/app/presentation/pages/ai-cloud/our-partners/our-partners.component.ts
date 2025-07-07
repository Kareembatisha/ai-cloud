import { Component } from '@angular/core';
import { PartnerHeroComponent } from "../../../components/ai-cloud/our-partners/partner-hero/partner-hero.component";
import { PartnerCompaniesComponent } from "../../../components/ai-cloud/our-partners/partner-companies/partner-companies.component";
import { PartnerCompaniesFeaturesComponent } from "../../../components/ai-cloud/our-partners/partner-companies-features/partner-companies-features.component";

@Component({
  selector: 'app-our-partners',
  imports: [PartnerHeroComponent, PartnerCompaniesComponent, PartnerCompaniesFeaturesComponent],
  templateUrl: './our-partners.component.html',
  styleUrl: './our-partners.component.scss'
})
export class OurPartnersComponent {

}
