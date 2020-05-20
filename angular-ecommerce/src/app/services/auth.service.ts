import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private baseUrl = 'http://localhost:8080/api/users';

    constructor(private httpClient: HttpClient) {
    }

    getUserDetails() {
      // post these details to API server return user info in correct
    }
}
