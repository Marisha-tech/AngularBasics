import {Component, Input, OnInit} from '@angular/core'

// templateUrl: './card.component.html',
// styleUrls: ['./card.component.scss']

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @Input() card
  @Input() index

  title = 'My Card Title'
  text: string = 'My Sample Text'

  cardDate: Date = new Date()

  textColor = ''

  ngOnInit() { }

  changeTitle() {
    this.card.title = 'Title has been changed'
  }

  inputHandler(value: any) {
    // const value = event.target.value
    this.title = value
  }

  changeHandler() {
    console.log(this.title)
  }

}
