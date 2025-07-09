import { Component } from '@angular/core';
import { AboutUsSectionComponent } from "../../../components/ai-cloud/home/about-us-section/about-us-section.component";
import { AboutUsSliderComponent } from "../../../components/ai-cloud/about-us/about-us-slider/about-us-slider.component";
import { OurTeamComponent } from "../../../components/ai-cloud/about-us/our-team/our-team.component";
import { OurLocationComponent } from "../../../components/ai-cloud/about-us/our-location/our-location.component";

@Component({
  selector: 'app-about-us',
  imports: [AboutUsSectionComponent, AboutUsSliderComponent, OurTeamComponent, OurLocationComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

}
