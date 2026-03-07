import { Component } from '@angular/core';
import { PricingComponent } from '../../components/pricing/pricing.component';

@Component({
  selector: 'app-pricing-page',
  standalone: true,
  imports: [PricingComponent],
  templateUrl: './pricing.page.html',
  styleUrl: './pricing.page.css'
})
export class PricingPage {}
