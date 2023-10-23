import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MoviePage } from '../movie/movie.page';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  movieData = {
    title: '',
    description: '',
    duree: '',
    annee: '',
    genre: '',
    imageUrl: ''
  } ;

  constructor(
    public modalController: ModalController,
    private http: HttpClient
    ) {   

    }

    readAPI(URL: string) {
      return this.http.get(URL);
    }

  async openMovie(id: string) {
    this.readAPI('http://www.omdbapi.com/?i='+id+'&apikey=59af864d')
    .subscribe((data: any) => {
    console.log(data);
    this.movieData.title = data['Title'];
    this.movieData.description = data['Plot'];
    this.movieData.annee = data['Year'];
    this.movieData.genre = data['Genre'];
    this.movieData.duree = data['Runtime'];
    this.movieData.imageUrl =  data['Poster'];
    });

    const modal = await this.modalController.create({
      component: MoviePage,
      componentProps: {
        myData: this.movieData
      }
    });
    return await modal.present();
  }

}
