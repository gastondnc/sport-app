import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent{

  public arr: string[] = [
    "En un rincón olvidado del universo, una estrella brillaba con intensidad, iluminando el vacío cósmico que la rodeaba. Su luz viajaba a través del espacio, contando historias de mundos lejanos y secretos perdidos.",

    "Bajo la luz de la luna llena, el bosque cobraba vida. Los árboles susurraban entre ellos, compartiendo antiguos secretos mientras las criaturas nocturnas danzaban en la penumbra. Era un espectáculo mágico, un ballet natural de la naturaleza.",

    "En la ciudad bulliciosa, entre rascacielos y luces destellantes, un músico callejero tocaba su guitarra con pasión. Su música se mezclaba con el sonido de la ciudad, creando una sinfonía urbana que resonaba en los corazones de los transeúntes.",

    "En la orilla del océano, las olas besaban la arena con suavidad, llevando consigo secretos del fondo marino. El sonido constante del vaivén del mar creaba una melodía relajante, invitando a la reflexión y al descanso.",

    "En un laboratorio futurista, científicos trabajaban incansablemente para desentrañar los misterios del tiempo. Experimentos con partículas subatómicas y paradojas temporales desafiaban las leyes conocidas, abriendo puertas a realidades alternas.",

    "En las montañas imponentes, la nieve cubría los picos como un manto blanco. A medida que el sol se ponía, el cielo se teñía de tonos cálidos, pintando un paisaje majestuoso que inspiraba humildad frente a la grandeza de la naturaleza.",

    "En un café acogedor, el aroma del café recién hecho llenaba el aire. Personas con libros y laptops compartían mesas, inmersas en sus propios mundos mientras la música suave creaba un ambiente perfecto para la introspección.",

    "En la feria de un pueblo pequeño, luces parpadeantes iluminaban las noches. Risas y gritos de emoción resonaban en el aire mientras la noria giraba, llevando a los visitantes a alturas donde los problemas cotidianos parecían desvanecerse.",

    "En la sala de clases, el profesor compartía conocimientos con entusiasmo. Los estudiantes, ávidos de aprender, absorbían cada palabra. El aula se convertía en un crisol de ideas, donde el saber se transmitía como una antorcha encendida.",

    "En la cima de una colina, una antigua ruina guardaba secretos de civilizaciones pasadas. Las piedras desgastadas contaban historias de tiempos olvidados, mientras el viento susurraba en los rincones, llevando consigo ecos del pasado."
  ];
  public randomIndex: number = 0;
  public message: string = '';
  public fraseArr: string[] = [];
  private typpingStyle: "word" | "letter" = "letter";
  private velocity: number = 47;


  constructor() {
    this.setIndex()
  }


  setIndex() {
    this.randomIndex = Math.floor(Math.random() * this.arr.length);
    console.log('ARR-INDEX', this.arr[this.randomIndex]);
    this.getText()
  }

  getText() {
    const frase: string = this.arr[this.randomIndex];
    console.log('FRASE', frase);
    if (this.typpingStyle === 'letter') {
      this.fraseArr = frase.split('');
    } else {
      this.fraseArr = frase.split(' ');
    }
    console.log(this.fraseArr)
    this.buildText(0)
    this.speak(frase)
  }

  buildText(index: number) {

    if (index < this.fraseArr.length) {
      if (this.typpingStyle === 'letter') {
        this.message = this.message + this.fraseArr[index];
      } else {
        this.message = this.message + " " + this.fraseArr[index];
      }
      setTimeout(() => {
        this.buildText(index + 1)
      }, this.velocity)
    } else {
      console.log(this.message.length, this.fraseArr.length)

    }

  }

  speak(message: string) {
    const synth = window.speechSynthesis
    const msg = new SpeechSynthesisUtterance(message);
    msg.voice = synth.getVoices()[0];
    msg.volume = 1;
    msg.pitch = 1 ;
    msg.rate = 1;
    synth.speak(msg);
  }


}


/**
 * var msg = new SpeechSynthesisUtterance();
msg.text = "Hello World";
window.speechSynthesis.speak(msg);
 */


















