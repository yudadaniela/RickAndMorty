import { Component, OnInit } from '@angular/core';
import { ApiRickyService } from '../../services/api-ricky.service';
import { Result, RickAndMorty } from '../../interfaces/card-ricky';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  data: Result[] = [];
  currentPage=1;
  totalPages=42;

  constructor(private apiRickMorty: ApiRickyService) {}

  ngOnInit(): void {
    this.getDataApi(this.currentPage);
  }
  getDataApi(page: number) {
    this.apiRickMorty.getData(page).subscribe((respond: RickAndMorty) => {
      console.log(respond.results);
      this.data = respond.results;
      console.log(this.data);
    });
  }
    onPageChange(page:number):void{
      this.currentPage=page
      this.getDataApi(this.currentPage)
    }
    
  }


  // getDataApi(page: number) {
  //   this.apiRickMorty.getData(page).subscribe((respond: RickAndMorty) => {
  //     console.log(respond.results);
  //     this.data = this.data.concat(respond.results);
  //     console.log(this.data);
  //   });
  //   if (page < 3) {
  //     this.getDataApi(page + 1);
  //   }
  // }
  

