import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IWeather } from '../interfaces/IWeather';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  constructor(
    private http:HttpClient,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id')
    this.load()
  }

  weathers: IWeather[]
  
  async load(){
    this.weathers = await this.http.get<IWeather[]>(`${environment.uri}/`).toPromise()
  }

}
