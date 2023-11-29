import { ITest } from './../../../interfaces/ITest';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, of, tap } from 'rxjs';
import { environment } from 'src/environment/env';

@Injectable({
  providedIn: 'root'
})
export class AdminTestsService {

  private apiEndpoint = 'admin/tests'
  private router: Router = inject(Router);
  private httpClient: HttpClient = inject(HttpClient);

  constructor() { }

  ngOnInit() {

  }

  getTests(): Observable<ITest[]> {
    return this.httpClient.get<ITest[]>(`${environment.apiUrl}/${this.apiEndpoint}`)
      .pipe(
        tap(_ => console.log('Tests obtenidos'))
      );
  }

  addTest(test: ITest): Observable<ITest> {
    test.isActive = false;
    test.partCount = 1;

    return this.httpClient.post<ITest>(`${environment.apiUrl}/${this.apiEndpoint}`, test)
      .pipe(
        tap(_ => console.log('Test agregado'))
      );
  }

  updatetest(test: ITest): Observable<ITest> {
    test.isActive = true;
    console.log("id", test.id);

    return this.httpClient.put<ITest>(`${environment.apiUrl}/${this.apiEndpoint}/${test.id}`, test)
      .pipe(
        tap(_ => console.log('Test actualizado'))
      );
  }
}
