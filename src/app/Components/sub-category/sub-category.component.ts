import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent {
  subcat: any[] = [];
  

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      fetch('https://localhost:44377/api/Category_Master/' + id)
        .then(res => res.json())
        .then(result => {
          this.subcat = result;
        });
    });
  }
}
