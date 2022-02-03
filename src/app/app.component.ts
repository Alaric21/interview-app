import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CollectionItemService } from './collection-item.service';
import { CollectionItem } from './interface/collection-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'interview-app';
  constructor(private collectionService: CollectionItemService){}


  ngOnInit(): void {
    this.onGetCollectionItem();
  }

  onGetCollectionItem(): void {
    this.collectionService
      .getCollectionItems()
      .subscribe(
        (response)=> console.log(response),
        (error:any)=> console.log(error),
        ()=> console.log('done')
      )
  }
}
