import { Component } from '@angular/core';
import { ServicesComponent } from '../../components/services/services.component';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [ServicesComponent],
  templateUrl: './services.page.html',
  styleUrl: './services.page.css'
})
export class ServicesPage {}
