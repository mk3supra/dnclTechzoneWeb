import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParamsOptions } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SellbriteService {

  private sellbriteResource: any;
  private apiUrl: string = "";
  private http: HttpClient;
  public inventory: any[] = [];
  public token: string = "";

  constructor(private Http: HttpClient) {
    this.http = Http;

    this.getJSON().subscribe(data => {
      this.sellbriteResource = data["services"].sellbrite;
      this.apiUrl = data["services"].sellbrite.url;
    });

  }


  public async GetInvetory(): Promise<any> {

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Authorization', `Basic ${btoa(`${this.sellbriteResource.user}:${this.sellbriteResource.secret}`)}`);

      let results = await this.http.get('https://api.sellbrite.com/v1/channels', { headers: headers }).toPromise();
    //let results = await this.http.get(this.apiUrl, { headers: headers }).toPromise();
    //https://api.sellbrite.com/v1/channels

    console.log("sellbreite API results");
    console.log(results);
  }


  private getJSON(): Observable<any> {
    return this.http.get('../../assets/resource.json');
  }





}
