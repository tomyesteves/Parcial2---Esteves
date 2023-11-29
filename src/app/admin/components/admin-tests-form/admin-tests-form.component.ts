import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminTestsService } from '../../services/admin-tests.service';

@Component({
  selector: 'app-admin-tests-form',
  templateUrl: './admin-tests-form.component.html',
  styleUrls: ['./admin-tests-form.component.css']
})
export class AdminTestsFormComponent {
  public title: string = "Crea un test"
  public name: string = "";
  public testForm!: FormGroup;

  private formBuilder: FormBuilder = inject(FormBuilder);
  private adminTestsService: AdminTestsService = inject(AdminTestsService);
  private router: Router = inject(Router);

  constructor() { }

  ngOnInit(): void {
    this.testForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      initials: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  onAdd(): void {
    if (this.testForm.valid) {
      const gradePayload = this.testForm.value;
      this.adminTestsService.addTest(gradePayload)
        .subscribe({
          next: (res) => {
            this.router.navigate(['/admin/tests']);
          },
          error: (err) => {
            alert('Ocurrió un error al agregar el test')
          },
          complete: () => {
            alert('El test se agregó correctamente')
          }
        })
    }
    else {
      Object.keys(this.testForm.controls).forEach(field => {
        const control = this.testForm.get(field);
        control?.markAsTouched({ onlySelf: true });
      });
    }
  }
}
