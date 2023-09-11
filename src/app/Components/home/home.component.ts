import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  subcat: Category[] = [];
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get<Category[]>("https://localhost:44377/api/Category_Master")
      .subscribe(result => {
        this.subcat = result;
        console.log(result)
      });
  }
}
interface Category {
  Cat_img_path: string;
  Cat_Name: string;
  cat_id: number;
}
