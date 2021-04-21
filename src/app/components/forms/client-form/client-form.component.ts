import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client/client.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.sass','./client-form.css']
})
export class ClientFormComponent implements OnInit {

  constructor(
    private clientservice:ClientService,
  ) { }

  ngOnInit(): void {
  }
  clientSubmit(value){
    console.log(value);
    this.clientservice.clientCreate(value).subscribe(result =>{
      console.log(result);
      
    })

    
  }
}
