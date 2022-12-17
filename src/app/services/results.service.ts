import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Result } from './result';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {
  private _url: string="/assets/data/results.json";

  constructor(private http: HttpClient) { }

  JSON: any;
  AllResults:any;
  getResults():Observable<Result[]> {
    this.JSON = JSON.stringify(this._url);
    this.AllResults = JSON.parse(this.JSON);
    return  this.AllResults;
  }
  
}
