import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { APP_CONFIG, IAppConfig } from './../app.config'
import { Component, Inject } from '@angular/core';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class DataService {
    constructor(private http: Http, @Inject(APP_CONFIG) private config: IAppConfig) { }

    public GetAll = (): Observable<any> => {
        return this.http.get(this.config.apiEndpoint + 'values')
            .map((response: Response) => <any>response.json())
            .do(x => console.log(x))
    }
}

interface Net {
    Id: number;
    Description: string;
}