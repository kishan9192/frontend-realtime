import { Component, OnInit } from '@angular/core';
import  { Item } from './items';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  public cart : Item[] = [];

    itemlist = [{
      id : 1,
      name: " Xbox One, PS4, PC",
      price : 80000
    },
    {
      id : 2,
      name: "Reebok Shoes",
      price : 6000
    },
    {
      id : 3,
      name: "Flexracer DP Puma",
      price : 5000
    },
    {
      id: 4,
      name: "PS4",
      price : 70000
    }]

    addtocart(item: Item) {
      
        //   this.itemlist.forEach((data, index) => {
        //   if (item.id == this.data.id) {
        //     this.sessionItems[index].sessionName = item.sessionName;
        //     this.sessionItems[index].date = session.date;
        //     this.sessionItems[index].description = session.description;
        //     this.sessionItems[index].instructorName = session.instructorName;
        //   }
        // });

      console.log("Item added");
       
        this.cart.push(item);
        console.log(this.cart);
      
      }
    
    };
  



