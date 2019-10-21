import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jeux-picolo',
  templateUrl: './jeux-picolo.page.html',
  styleUrls: ['./jeux-picolo.page.scss'],
})
export class JeuxPicoloPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  id=null;

  phrases = ['Quel est le plus beau cadeau que tes amis t’aient offert ?',
    'Quel est le pire cadeau que tes amis t’aient offert ?',
    'As-tu déjà embrassé une amie sur la bouche ?',
    'Quel est ton plus beau souvenir entre amis ?',
    'Quelle est la remarque la plus vexante qu’un ami t’aies faite ?',
    'As tu déjà menti à tes amis ?',
    'Quelle est ta dernière grande fiesta entre amis ?',
    'Quelle est la pire chose que puisse te faire un ami ?',
    'Quelles sont les qualités indispensables pour être ton ami ?',
    'As-tu déjà été jaloux/jalouse de ton meilleur ami ?',
    'As-tu un meilleur ami ?',
    'Quelles sont les meilleures vacances que tu aies passé entre amis ?',
    'Comment réagis-tu si tu ne peux pas supporter la petite amie de ton meilleur ami ?',
    'Comment réagis-tu si tu apprends que la petite amie de ton meilleure ami le/la trompe ?',
    'Aimes-tu les amis de ta chérie ?',
    'Quelle est le principal point commun entre ton meilleur ami et toi ?',
    'As-tu une chanson fétiche avec ton meilleur ami ?',
    'As-tu un film fétiche avec ton meilleur ami ?',
    'As-tu déjà mélangé ton sang avec ton meilleur ami ?',
    'Aimes-tu les amis de ton meilleur ami ?',
    'Si tu était une femme, serais-tu en couple avec ton meilleur ami ?',
    'As-tu déjà fantasmé sur une de tes amies ?',
    'Avec combien d’amis Facebook as-tu déjà couché ?',
    'As-tu déjà couché avec ta meilleure amie ?',
    'Quelle est la pire crasse que tu aies faite à un ou une amie ?',
    'Quelle est la pire crasse que l’on t’ait faite ?',
    'Quelle est la plus belle preuve d’amitié que lvon tvait faite ?',
    'Penses-tu que l’amitié entre homme et femme soit possible ?',
    'Quelle est ta plus grosse engueulade avec un ami ?',
    'Es-tu ami pour la vie ou ami d’un jour ?',
    'Pour la vie de famille, tu es plutôt ville ou campagne ?',
    'Quelle est la personne que tu aimes le plus dans ta famille ?',
    'Tes parents t’ont-ils déjà surpris au lit avec une fille ?',
    'Combien aimerais-tu avoir d’enfants ?',
    'Quels sont les prénoms que tu aimerais donner à tes enfants ?',
    'Connais-tu certains secrets de famille ?',
    'Quel est le plus gros défaut de ta belle mère ?',
    'Est-ce que tu apprécies tes beaux parents ?',
    'As-tu déjà joué au docteur avec des personnes de ta famille ?',
    'Quelles sont les pires vacances en famille que tu aies passées ?',
    'As-tu déjà entendu tes parents faire l’amour ?',
    'Aimes-tu les grandes fêtes de famille ?',
    'Quelle est la plus rosse vacherie que t’ai faite un membre de ta famille ?',
    'Décris-toi en tant que futur papa',
    'Aimerais-tu avoir un jumeaux ?',
    'As-tu déjà fait l’amour dans le lit de tes parents ?',
    'Quel est ton plus beau souvenir d’enfance ?',
    'Préfères-tu ton père ou ta mère ?',
    'Dans quel pays aimerais-tu vivre avec ta famille ?',
    'Que reproches-tu à l’éducation de tes parents ?',
    'Comment réagirais-tu si ton enfant se droguait ?',
    'Comment réagirais-tu si ton enfant t’annonce qu’il est homosexuel ?',
    'As-tu reçu une éducation religieuse ?',
    'Envisages-tu d’adopter un enfant ?',
    'Tu préfères avoir un fils ou une fille ?',
    'Aimerais-tu que tes enfants portent ton nom ?',
    'Aimerais-tu être père au foyer ?',
    'Quel surnom te donnent tes parents ?',
    'Quel métier aimerais-tu que tes enfants fassent ?',
    'As-tu déjà fantasmé sur un membre de ta famille ?',
    'Couches-tu le premier soir ?',
    'Couches-tu le deuxième soir ? :)',
    'Préfères-tu les femmes dominatrices ou soumises ?',
    'Si ta copine te trompe, tu préfères qu’elle te l’avoue ?',
    'L’amour passion dure 3 ans, es-tu d’accord ?',
    'Qu’est-ce qui est rédhibitoire chez une fille pour toi ?',
    'As-tu déjà reçu des messages coquins ?',
    'Qu’as-tu fait de plus fou par amour ?',
    'Quel est le plus gros râteau que tu te sois pris ?',
    'Quelle est la fille la plus moche avec qui tu sois sortie ?',
    'S t’avais une baguette magique, tu changerais quoi chez ta copine ?',
    'Crois-tu à la fidélité ?',
    'Es-tu un coeur d’artichaut ou un coeur en peine ?',
    'Es-tu plutôt je drague ou je me fais draguer ?',
    'Comment s’est passé ta rencontre avec ta copine ?',
    'Décris ta femme idéale.',
    'Quel est ton plus gros chagrin d’amour ?',
    'As-tu déjà fouillé dans le portable de ta copine ?',
    'Es-tu jaloux ?',
    'Embrasser c’est tromper ?',
    'Quel est selon toi le détail tue-l’amour ?',
    'L’age a-t-il de l’importance ?',
    'Pourrais-tu tomber amoureux d’une femme mariée ?',
    'Es-tu romantique ?',
    'As-tu déjà tromper ta copine ? (ça marche avec les ex évidemment)',
    'Quelle est la plus belle déclaration d’amour que l’on t’ait faite ?',
    'Combien de fois es-tu tombé amoureux ?',
    'Qui t’a offert ton plus beau baiser ?',
    'Quel est la qualité que tu préfères chez une femme ?',
    'Quel est le défaut que tu détestes chez une femme ?',
    '30 questions indiscrètes sur le travail',
    'Est-ce que certains de tes collègues sont jaloux de toi ?'
  ];

  phrases_tempo=[];

  length=null;


  refresh(){
    if (this.phrases_tempo.length == 93) {
      this.phrases_tempo = [];
    }
      do {
        this.id = Math.floor(Math.random() * 93);
      } while (this.phrases_tempo.includes(this.id));
    
    
    this.phrases_tempo.push(this.id);

    this.length=this.phrases_tempo.length;
  }

}
