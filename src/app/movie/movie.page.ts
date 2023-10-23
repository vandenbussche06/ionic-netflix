import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})

export class MoviePage implements OnInit {

  myData: any;

  constructor(
    public modalController: ModalController,
    private navParams: NavParams
  ) { 
    this.myData = this.navParams.get('myData');
    console.log(this.myData);
  }

  ngOnInit() {
  }

  close() {
    console.log(this.myData);
    this.myData.title = '';
    this.myData.description = '';
    this.myData.annee = '';
    this.myData.genre = '';
    this.myData.duree = '';
    this.myData.imageUrl = '';
    this.modalController.dismiss();
  }
}
