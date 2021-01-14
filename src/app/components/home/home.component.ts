import { Component, OnInit } from '@angular/core';
import { RestService } from '../../service/rest.service'
// import { Product } from '../employee';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // empList: Product[] = [];
  Productobj={
    name: '',
    description: '',
    price: '',
    quantity: '',
    id: ''
  };
  currentproduct = null;

  constructor(public restService: RestService) { }

  ngOnInit() {
    //  this.getAllEmpList()
  }

  // getAllEmpList(){
  //   this.restService.getAll().subscribe((data: Product[])=>{
  //     console.log(data);
  //     this.empList = data;
  //   })
  // }

  // deleteUser(employees){
  //   this.restService.delete(employees).subscribe(()=>{
  //     this.getAllEmpList()
  //   })
  // }

  edituser(user){
    this.Productobj = user;
  }
}
