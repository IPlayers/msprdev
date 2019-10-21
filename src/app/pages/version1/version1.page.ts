import { Component } from '@angular/core';


@Component({
  selector: 'app-version1',
  templateUrl: 'version1.page.html',
  styleUrls: ['version1.page.scss'],
})


export class Version1Page {



  public tremise: number ;
  public pachatBrutTR: number ;
  public pachatNetTR: number ;

  public pachatBrutACN: number ;
  public tauxRemisePAN: number ;
  public achatnetNET: number ;

  public prixAchatnetPV: number;
  public coeffMultiPV: number ;
  public prixVenteNet: number;

  public prixNetnetCo: number;
  public prixAchatnetCo: number;
  public coeffMulti: number;
  constructor( ) {}



  logForm1() {

    this.tremise = (1 - this.pachatNetTR / this.pachatBrutTR);
    console.log('this.prixvente', this.prixVenteNet);
  }

  logForm2() {

    this.achatnetNET = this.pachatBrutACN * (1 - this.tauxRemisePAN) ;
    console.log('this.prixvente', this.prixVenteNet);
  }

  logForm3() {

    this.prixVenteNet = this.prixAchatnetPV * this.coeffMultiPV ;
    console.log('this.prixvente', this.prixVenteNet);
  }

  logForm4() {

    this.coeffMulti = this.prixNetnetCo / this.prixNetnetCo;
    console.log('this.prixvente', this.prixVenteNet);
  }

}
