import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/clean-tech/header/header.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../shared/clean-tech/footer/footer.component';
import { HeaderComponent as AiHeaderComponent } from '../../shared/ai-cloud/header/header.component';

@Component({
  selector: 'app-clean-tech-layout',
  imports: [HeaderComponent, RouterOutlet, FooterComponent, AiHeaderComponent],
  templateUrl: './clean-tech-layout.component.html',
  styleUrl: './clean-tech-layout.component.scss',
})
export class CleanTechLayoutComponent {}
