import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseUrl = 'http://localhost:8080/api/data';

  constructor() { }

  public async getImportantData(): Promise<String[]> {
    try {
      const apiResponse = await axios.get(`${this.baseUrl}/important-data`);
      return apiResponse.data;
    } catch (err) {
      console.error(err);
      throw err
    }
  }
}
