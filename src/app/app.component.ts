import { Component } from '@angular/core';
import {User} from "../model/user";
import {Car} from "../model/car";
import {Student} from "../model/student";
import { Bar } from 'src/model/bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // public year: number;
  public user: User;
  public car: Car;
  public students: Student[];
  private bar: Bar;

  constructor() {
    const piou = 'Jhon';
    this.user = {
      name: piou,
      firstName: 'Doe',
    };
    this.user.name = 'Johny';
    const user = {
      name: 'Tourret',
      firstName: 'Kevin',
    };
    this.user = user;
    this.car = new Car();
    this.car.brand = 'Audi';

    // Exo 1 :
    this.exoUn(42);

    // Exo 2 :
    this.exoDeux([ 12, 15, 19, 2]);

    // Exo 3 :
    this.exoTrois(20, 3);

    // Exo 4 :
    this.exoQuatre(-10);

    // Exo 5 :
    this.students = [
      {
        name: 'Albert',
        notes: new Array<number>(12, 8, 9, 7, 13),
      },
      {
        name: 'Michel',
        notes: new Array<number>(14, 13, 12, 11, 10),
      },
      {
        name: 'Vincent',
        notes: new Array<number>(17, 16, 15, 18, 13),
      },
    ];
    this.exoCinq();

    // Exo 6 :
    this.exoSix();
    // Exo 10 :
    this.checkPassword("Bienvenueici@");

    this.exoSept([1, 2, 2, 3, 3, 3, 4, 5, 5]);

    
    
    console.log(this.time(225000)); // "4:59"
    this.time(60999);

    this.voy('chaat');

    this.bar = new Bar ("Chez Biduule");

  }

  private exoUn(age: number): void {
    const currentDate = new Date();
    const birthYear = currentDate.getFullYear() - age;
    console.log('Résultat exo 1 pour l age : ' + age + ' est ' + birthYear);
    // console.log('Résultat exo 1 pour l age : ' + age + ' est ' + (new Date()).getFullYear() - age);
  }

  private exoDeux(numbers: number[]): void {
    console.log('Résultat exo 2, la moyenne est de : ' +
      this.calculateAverage(numbers))
    ;
  }

  private calculateAverage(notes: number[]): number {
    let sumNotes = 0;
    for (const note of notes) {
      sumNotes += note;
    }
    // numbers.forEach((note) => {
    //   sumNotes += note;
    // });
    return sumNotes/notes.length;
  }

  private exoTrois(price: number, quantity: number) {
    console.log('Résultat exo 3, prix TTC : ' +
      this.calculateTTCPrice(price, quantity)+ '€')
    ;
  }

  private calculateTTCPrice(price: number, quantity: number): number {
    return (price * quantity) * 1.2;
  }

  private exoQuatre(temperature: number): void {
    let result = temperature >= 0 ? 'liquide' : 'solide';
    if (temperature >= 70) {
      result = 'gaz';
    }
    console.log('Résultat exo 4, information de la température ' + temperature + ' : ' + result);
  }

  private exoCinq(): void {
    console.log('Résultat exo 5 : ');
    for (const student of this.students) {
      console.log('La moyenne de : ' + student.name + ' est de ' +
        this.calculateAverage(student.notes))
      ;
    }
  }

  private exoSix() {
    console.log('Résultat exo 6, le prix augmenté est de : ' +
      this.increasePrice(50, 25) + '€')
    ;
  }

  private increasePrice(price: number, percent: number): number {
    return Math.round(price * (1 + percent/100) * 100)/100;
  }


  ///7. Écrivez une fonction pour supprimer les doublons d’un tableau : Exemple : [1, 2, 2, 3, 3, 3, 4, 5, 5] Résultat attendu : [1, 2, 3, 4, 5]
  exoSept(chiffres: number[]): void {
  const uniquechiffres = this.removeDuplicates(chiffres)
  console.log(uniquechiffres);
  }
  removeDuplicates(chiffres: number[]): number[] {
    let unique: number[] = [];
    chiffres.forEach(function(i) {
      if(!unique.includes(i)) {
        unique.push(i);
      }
    });
    return unique;
  }

///8. Avec le moins de lignes de code possible, proposez moi un algorithme qui, pour un nombre donné, affiche la table de multiplication liée. Par exemple : Si je demande 1, je veux voir :

  ///1x1 = 1
  ///1x2 = 2
  ///etc Et ce jusqu'à 12
  exoHuit(): void {
    console.log('Résultat exo 8')
    for(let i=0;i<13;i++){
      console.log('1x${i} = ${i*1}');
    }
  }

  ///9. Faites une fonction qui prend en argument une chaîne de caractères (LONGUE) Cette fonction doit afficher les 15 premiers caractères puis '...' Par exemple :
  ///Je passe la chaîne : 'Lorem quisque class vestibulum'
  ///La fonction doit afficher 'Lorem quisque c...'
  stringSub(firstChaine: string): string {
    let newChaine: string = '';
    // on assigne à newChaine la valeur de la chaine passée en paramètre
    newChaine = firstChaine;
    // si la valeur de la chaine passée en paramètre est > 15
    if (firstChaine.length > 15) {
      // alors on substring firstChaine
      newChaine = firstChaine.substring(0, 15);
      // Puis on lui ajoute les '...'
      newChaine += '...';
    }
    // on renvoit newChaine quoiqu'il arrive
    return newChaine;
  }

  /// 10. Faites une fonction checkPassword, dont le but est de vérifier la validité d'un mot de passe, qui sera pris en argument Un mot de passe est considéré valide lorsqu'il fait plus de 9 caractères, et qu'il contient au moins le caratère '@' La fonction renverra un booléen pour indiquer la validité du mot de passe
  checkPassword(firstMp: string): void {
    if (firstMp.length > 9 && firstMp.includes('@')) {
      console.log('Ce mot de passe est valide');
    } else {
      console.log('Ce mot de passe est invalide')
    }
  }

  /// 11. Faire une fonction qui prend en paramètre une durée, en miilisecondes
  /// Et l'afficher sous forme de chaîne de caratères
  /// Exemple :
  /// Param : 225000
  /// Affichage : 03:45"00

  time(firstTime: number): string {
      let minutes = Math.floor(firstTime / 60000);
      let seconds = ((firstTime % 60000) / 1000);
      return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }


  ///Faire une fonction qui ajoute derrière chaque voyelle d'une chaine de caractères 'fe' et répète ensuite la voyelle
  ///Par exemple :
  ///Chat donne "chafeat"

  voy(firstC: string) {
    let result: string = '';
    // Pour chaque letter de firstC
    for (const letter of firstC) {
      // On met dans notre varaible temporaire notre letter
      result += letter;
      // Est-ce que letter est une voyelle?
      if (letter.match(/[aeiouy]/)) {
        // On ajoute 'fe' puis on répète letter
        result += 'fe' + letter;
      }
    
    console.log(result);
  }
}

  ///Créer une interface Boisson, elle est caractérisée par :
  ///- name
  ///- alcohol : oui ou non
  ///- price
  ///Créer une classe Bar, elle est caractérisée par un tableau de boisson, qui représente la carte du bar
  ///Un bar a aussi un nom
  ///Faites une fonction, dans la classe Bar, qui permet d'afficher la "carte" du bar en console.log

















































}