import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-hotel-search',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './hotel-search.component.html',
  styleUrl: './hotel-search.component.css'
})
export class HotelSearchComponent implements OnInit {

  aramaForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

ngOnInit(): void {
  this.aramaForm = this.fb.group({
    gidilecekYer: ['', Validators.required],
      girisTarihi: ['', Validators.required],
      cikisTarihi: ['', Validators.required],
      kisiSayisi: ['', [Validators.required, Validators.min(1)]]
  });
}

onSubmit() {
  if (this.aramaForm.valid) {
    console.log(this.aramaForm.value);
    }
  }
}
