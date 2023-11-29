import { Component, Input, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminTestsService } from '../../services/admin-tests.service';
import { ITest } from 'src/interfaces/ITest';

@Component({
  selector: 'app-admin-tests-edit-form',
  templateUrl: './admin-tests-edit-form.component.html',
  styleUrls: ['./admin-tests-edit-form.component.css']
})
export class AdminTestsEditFormComponent {
  @Input()
  public test!: ITest;

  public title: string = "Edita un test"
  public name: string = "";
  public editTestForm!: FormGroup;

  private formBuilder: FormBuilder = inject(FormBuilder);
  private adminTestsService: AdminTestsService = inject(AdminTestsService);
  private router: Router = inject(Router);

  constructor() {
  };

  ngOnInit(): void {
    this.editTestForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      initials: ['', [Validators.required]],
      description: ['', [Validators.required]],
      partCount: ['1'],
      id: ['']
    });
  }

  onEdit(): void {
    if (this.editTestForm.valid) {
      const testPayload = this.editTestForm.value;
      console.log("voy a editare sto", testPayload);

      this.adminTestsService.updatetest(testPayload)
        .subscribe({
          next: (res) => {
            this.router.navigate(['/admin/tests']);
          },
          error: (err) => {
            alert('Ocurrió un error al actualizar el test')
          },
          complete: () => {
            alert('El test se actualizó correctamente')
          }
        })
    }
    else {
      Object.keys(this.editTestForm.controls).forEach(field => {
        const control = this.editTestForm.get(field);
        control?.markAsTouched({ onlySelf: true });
      });
    }
  }
}
