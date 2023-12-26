import { Injectable } from '@angular/core';
import axios from 'axios';
import { LoginData } from 'src/models/login-data';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseUrl = 'http://localhost:8080/api/auth';

  constructor() { }

  public async postLogInData(loginInput: LoginData): Promise<String[]> {
    try {
      const apiResponse = await axios.post(`${this.baseUrl}/login`, loginInput);
      return apiResponse.data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
}
