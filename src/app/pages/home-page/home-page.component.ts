import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { ServicesApiService } from 'src/app/services/services-api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {


  listInstitutionData:any[]=[]
  constructor(private service: ServicesApiService,private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.allInstitution();
  }

  async allInstitution() {
    let res: any = await firstValueFrom(this.service.getInstitution());
      this.listInstitutionData =res;

      console.log(this.listInstitutionData);


  }

  
}
