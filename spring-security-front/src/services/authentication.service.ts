import { Injectable } from '@angular/core';
import axios from 'axios';
import { LoginData } from 'src/models/login-data';
import { SignUpData } from 'src/models/signup-data';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseUrl = 'http://localhost:8080/api/auth';

  constructor() { }

  public async postLogInData(loginInput: LoginData): Promise<any> {
    try {
      const apiResponse = await axios.post(`${this.baseUrl}/login`, loginInput);
      const authToken = apiResponse.data.token;

      this.setAuthToken(authToken);
      return apiResponse.data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  public getAuthToken(): string | null {
    return window.localStorage.getItem("auth_token");
  }

  public setAuthToken(token: string | null) {
    if (token !== null) {
      window.localStorage.setItem("auth_token", token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      window.localStorage.removeItem("auth_token");
      delete axios.defaults.headers.common['Authorization'];
    }
    
  }

  public async postSignUpData(signUpInput: SignUpData): Promise<String[]> {
    try {
      const apiResponse = await axios.post(`${this.baseUrl}/signup`, signUpInput);
      return apiResponse.data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
}
