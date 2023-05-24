import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesApiService } from 'src/app/services/services-api.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  emailForm!: FormGroup;

  constructor(
    private service: ServicesApiService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createEmailForm();
  }

  createEmailForm() {
    this.emailForm = this.formBuilder.group({
      email: [
        null,
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      password: [null, [Validators.required]],
    });
  }

  login() {
    if (this.emailForm.valid) {
      console.log(this.emailForm?.value.email);
      console.log(this.emailForm?.value.password);

      this.service.login(
        this.emailForm?.value.email,
        this.emailForm?.value.password
      );

      this.router.navigate(['/cuenta']);
    }
  }
}
