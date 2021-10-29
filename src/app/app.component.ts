import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'firstApp';
  public participants = {
    actors: [
      {
        img: "/assets/CarryCoon.png",
        name: "Кэрри Кун",
        enName: "Carrie Coon",
        bio: "https://ru.wikipedia.org/wiki/Кун,_Кэрри",
      },
      {
        img: "/assets/CarryCoon.png",
        name: "Кэрри Кун",
        enName: "Carrie Coon",
        bio: "https://ru.wikipedia.org/wiki/Кун,_Кэрри",
      },
      {
        img: "/assets/CarryCoon.png",
        name: "Кэрри Кун",
        enName: "Carrie Coon",
        bio: "https://ru.wikipedia.org/wiki/Кун,_Кэрри",
      },
      {
        img: "/assets/CarryCoon.png",
        name: "Кэрри Кун",
        enName: "Carrie Coon",
        bio: "https://ru.wikipedia.org/wiki/Кун,_Кэрри",
      },
      {
        img: "/assets/CarryCoon.png",
        name: "Кэрри Кун",
        enName: "Carrie Coon",
        bio: "https://ru.wikipedia.org/wiki/Кун,_Кэрри",
      },
    ],
    creators: [
      {
        img: "/assets/Bill Murray.png",
        name: "Билл Мюррей",
        enName: "Bill Murray",
        bio: "https://ru.wikipedia.org/wiki/Мюррей,_Билл",
      },
      {
        img: "/assets/Bill Murray.png",
        name: "Билл Мюррей",
        enName: "Bill Murray",
        bio: "https://ru.wikipedia.org/wiki/Мюррей,_Билл",
      },
      {
        img: "/assets/Bill Murray.png",
        name: "Билл Мюррей",
        enName: "Bill Murray",
        bio: "https://ru.wikipedia.org/wiki/Мюррей,_Билл",
      },
      {
        img: "/assets/Bill Murray.png",
        name: "Билл Мюррей",
        enName: "Bill Murray",
        bio: "https://ru.wikipedia.org/wiki/Мюррей,_Билл",
      },
      {
        img: "/assets/Bill Murray.png",
        name: "Билл Мюррей",
        enName: "Bill Murray",
        bio: "https://ru.wikipedia.org/wiki/Мюррей,_Билл",
      },
    ],
  };
  public showCreators = false;
  public toggleParticipants(creators: boolean) {
    this.showCreators = creators

  }

}
