import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cooming-soon',
  templateUrl: './cooming-soon.component.html',
  styleUrls: ['./cooming-soon.component.css']
})
export class CoomingSoonComponent implements OnInit {
  parametro!: string | null;
  constructor(private router: Router,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('parametro'));
      this.parametro = params.get('parametro');
    });
  }

}
