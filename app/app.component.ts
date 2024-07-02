import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from "./MyComponent/todo/todo.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';
import { contact } from '../models/contact.model';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, TodoComponent, HttpClientModule, AsyncPipe, CommonModule, FormsModule, ReactiveFormsModule]
})
export class AppComponent {

  http = inject(HttpClient);
  randomNumber: number = 0;

  public contactForm = new FormGroup({
    id: new FormControl<string>(''),
    name: new FormControl<string>(''),
    email: new FormControl<string>(''),
    phone: new FormControl<string>(''),
    favorite: new FormControl<boolean>(false)
  })

  onFormSubmit() {
    // console.log(this.contactForm.value);

    const addContactRequest = {          //now we have the request obect ready
      name: this.contactForm.value.name,
      email: this.contactForm.value.email,
      phone: this.contactForm.value.phone,
      favorite: this.contactForm.value.favorite
    }

    this.http.post('https://localhost:7278/api/Contacts', addContactRequest).subscribe(
      {
        next: (value) => {
          console.log(value)
          // this.contact$ = this.getContacts();
          // this.contactForm.reset();
        }
      });
  }

  clickonUpdate(id: string) {

    this.getOneContact(id);
  }

  onDelete(id: string) {
    this.http.delete(`https://localhost:7278/api/Contacts/DeleteContact/${id}`).subscribe(
      {
        next: (value) => {
          alert("Item deleted successfully");
          console.log(value)
          this.contact$ = this.getContacts();
        }
      });
  }

  public update() {

    const addContactRequest = {          //now we have the request obect ready
      name: this.contactForm.value.name,
      email: this.contactForm.value.email,
      phone: this.contactForm.value.phone
    }

    let id_ = this.contactForm.value.id;

    console.log("Hi");

    console.log(id_);

    this.http.put(`https://localhost:7278/api/Contacts/PutContact/${id_}`, addContactRequest).subscribe({
      next: (value) => {
        console.log(value);
        this.contact$ = this.getContacts();
        this.contactForm.reset();
      }
    });

  }

  public getOneContact(id: string) {
    this.http.get<contact>(`https://localhost:7278/api/Contacts/GetContact/${id}`).subscribe({
      next: (value) => {

        this.contactForm.patchValue({
          name: value.name,
          email: value.email,
          phone: value.phone,
          id: value.id
        });
      }
    })
  }

  contact$ = this.getContacts();

  private async getContacts(): Promise<contact[]> {
    var item = await firstValueFrom(this.http.get<contact[]>('https://localhost:7278/api/Contacts'));
    return item;
  }

  generateRandomNumber() {
    console.log("Hi");
    this.http.get<any>('https://localhost:7278/api/Contacts/xyz').subscribe(
      (val) => {
        this.randomNumber = val;
      }
    );
  }
}

