import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class RestApiService {

    constructor(private http: HttpClient) { }

    getHeaders () {
        const token = localStorage.getItem('token');
        return token ? new HttpHeaders().set('Authorization', token) : null;
    }

    get (link: string) {
        return this.http.get(link, { headers: this.getHeaders() }).toPromise();
    }

    post (link: string, body: any) {
        return this.http.post(link, body, { headers: this.getHeaders() }).toPromise();
    }
    patch (link: string, body: any) {
        return this.http.patch(link, body, { headers: this.getHeaders() }).toPromise();
    }

    delete (link: string) {
        return this.http.delete(link, { headers: this.getHeaders() }).toPromise();
    }


}
