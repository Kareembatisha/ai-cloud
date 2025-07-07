import { Component, OnInit } from '@angular/core';
import {
  Router,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
  RouterOutlet,
} from '@angular/router';
import { HeaderComponent } from '../../shared/ai-cloud/header/header.component';
import { FooterComponent } from '../../shared/ai-cloud/footer/footer.component';
import { LoaderService } from '../../../core/services/loader.service';
import { LoaderComponent } from '../../shared/loader/loader.component';

@Component({
  selector: 'app-ai-cloud-layout',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, LoaderComponent],
  templateUrl: './ai-cloud-layout.component.html',
  styleUrls: ['./ai-cloud-layout.component.scss'], // fixed from 'styleUrl'
  standalone: true,
})
export class AiCloudLayoutComponent implements OnInit {
  loading = false;

  constructor(private router: Router, private loaderService: LoaderService) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.loaderService.show();
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.loaderService.hide();
      }
    });

    this.loaderService.loading$.subscribe((isLoading) => {
      this.loading = isLoading;
    });
  }
}
