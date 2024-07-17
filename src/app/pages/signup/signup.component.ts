import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  
  signupForm!:FormGroup;
  
  constructor(private fb: FormBuilder) {}
  
  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }



  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');

    if (!password || !confirmPassword) {
      return null; // form alanları yüklenmemişse veya null ise, validasyonu atla
    }

    return password.value === confirmPassword.value ? null : { mismatch: true };
  }




  onSubmit(): void {
    if (this.signupForm.valid) {
      // Form geçerli, burada form verilerini işleyin
      console.log(this.signupForm.value);
    } else {
      // Form geçerli değil, hataları gösterebilirsiniz
      console.log('Form geçerli değil');
    }
  }

}
