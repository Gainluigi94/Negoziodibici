import { Injectable } from "@angular/core";
import { Observable, from, of } from "rxjs";
import { HttpClient, HttpBackend } from "@angular/common/http";
import { shareReplay, map } from "rxjs/operators";
import Config from  'src/assets/config.json';



export interface Environment {
  production :string,
  apiEndpoint: string,
 
}

export interface Configuration {
  apiUrl: string;
  environementData: Environment;
}
@Injectable({
  providedIn: "root",
})
export class EnvConfigurationService {
  private readonly configUrl = "assets/config.json?v=" + Math.random();
  private configuration$: Observable<Configuration>;
  configuration:  any  = (Config  as  any).default;
  json:any = Config;

  private http: HttpClient;

  constructor( handler: HttpBackend) {
     this.http = new HttpClient(handler);
  }

  public load(): Observable<Configuration> {
    if (!this.configuration$) {
      this.configuration$ = this.http
        .get<Configuration>(`${this.configUrl}`)
        .pipe(shareReplay(1));
    }


    return this.configuration$;
  }


}
