import { Component, ViewChild } from '@angular/core';

import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { StudentService } from '../student.service'; 
import { IAddStud } from 'src/interfaces/IAddStud';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {

  constructor(private fb: FormBuilder, private router: Router, private studServe: StudentService){}

  registerStud!: FormGroup;

  ngOnInit(){
    
    this.registerStud = this.fb.group({
      studName: ['', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(10)]],
      email: ['', 
      [
        Validators.required,
        Validators.minLength(8)
      ]],
      // roll: ['', [
      //   Validators.required,
      // ]], 
    })

  }

  /**
   * 
   * @param event Mouse click event on Submit button
   * @description redirects to users page on succesfuly submission of Form
   */
  onSubmit(event: MouseEvent){
    
    let name: string = this.registerStud.get('studName')!.value;
    let email: string = this.registerStud.get('email')!.value;
    // let roll: number = this.registerStud.get('roll')!.value;

    // make POST request to /student endpoint

    let obj: IAddStud = {
      // roll: roll,
      name: name,
      email: email
    }

    this.studServe.addStud(obj);



    // if (this.auth.checkUname(uName)){
    //   alert('Username already exists!! Try another Username or Login with associated Username')
    // } else {
    //   this.auth.createUser(uName, pwd)
    //   alert('User Account Created')
    //   this.router.navigate(['/'])
    // }
  }
 

}
