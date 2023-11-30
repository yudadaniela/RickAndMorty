import { Component, OnInit } from '@angular/core';
import { ApiRickyService } from 'src/app/services/api-ricky.service';
import { Result } from '../../interfaces/card-ricky';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css'],
})
export class DescriptionComponent implements OnInit {
  data: Result | undefined;
  constructor(
    private apiRickyMorty: ApiRickyService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const id: number | undefined = Number(
      this.route.snapshot.paramMap.get('id')
    );
    this.apiRickyMorty.getDataId(id).subscribe((response) => {
      this.data = response;
      console.log(this.data);
    });
  }
}
//manejo de recursos, pipe = take() liberacion   