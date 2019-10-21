import { Component, OnInit } from '@angular/core';
import {Joueur, JdrService} from "../../services/jdr.service";
import {ActivatedRoute} from "@angular/router";
import {LoadingController, NavController} from "@ionic/angular";

@Component({
  selector: 'app-jeux-jdr-home',
  templateUrl: './jeux-jdr-home.page.html',
  styleUrls: ['./jeux-jdr-home.page.scss'],
})
export class JeuxJdrHomePage implements OnInit {

  joueurs: Joueur[];

  constructor(private jdrService: JdrService, private route: ActivatedRoute,
              private loadingController: LoadingController,
              private nav: NavController) {}

  ngOnInit() {
    this.jdrService.getJoueurs().subscribe(res => {
      this.joueurs = res;
    });
  }

  remove(item) {
    this.jdrService.removeJoueur(item.id);
  }

  damaged(item) {
    item["hp"]--;
  }

  healed(item) {
    item["hp"]++;
  }

  update(item) {
    this.jdrService.updateJoueur(item, item.id)
  }


}
