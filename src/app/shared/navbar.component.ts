import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  imports: [RouterModule, CommonModule, FormsModule],
  styles: []
})
export class NavbarComponent {

  menuOpen = false;

  isModalOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  openModal() {
    console.log('Modal opened');
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  bookAppointment() {
    alert('Appointment booked successfully!');
    this.closeModal();
  }
}