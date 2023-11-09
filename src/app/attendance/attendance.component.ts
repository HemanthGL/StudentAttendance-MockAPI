import { Component } from '@angular/core';
import { Validators, FormBuilder, AbstractControl,FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { AttendanceService } from '../attendance.service';
import { StudentService } from '../student.service';
import { IStudent } from 'src/interfaces/student';
import { IPost } from 'src/interfaces/IPost';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent {

    
  constructor(private attdServe: AttendanceService,private fb: FormBuilder, private router: Router, private attdService: AttendanceService, private stdServe: StudentService){}

  /**
   * 
   * @returns Validator Function for Registration form
   * @description Custom Validator Fn for Validating password, confirm password form controls
   */
  passwordConfirm(): ValidatorFn {
    return (ctrl: AbstractControl): ValidationErrors | null => {
      let pwd = ctrl.get('password');
      let confirmPwd = ctrl.get('confirmPwd')

      return pwd && confirmPwd && pwd.value !== confirmPwd.value ? { confirm: true } : null;
    }
  }

  registerF!: FormGroup;

  ngOnInit(){
    
    this.registerF = this.fb.group({
      id: ['', [
      Validators.required,
      ]],
      date: ['', 
      [
        Validators.required
      ]],
      status: ['', [
        Validators.required,
      ]], 
    }, {
      validators: this.passwordConfirm()
    })

    this.stdServe.studStatus.subscribe(data => {
      this.students = data;
      console.log('data is: ', data)
      if (data.length == 0)
        this.stdServe.fetchStudentData()
    })

  }

  students!: Array<IStudent>

  /**
   * 
   * @param event Mouse click event on Submit button
   * @description redirects to users page on succesfuly submission of Form
   */
  onSubmit(event: MouseEvent){
    // this.router.navigate(['/users'])
    // if (this.auth.checkUname())
    
    let roll: string = this.registerF.get('id')!.value;

    let date: Date = this.registerF.get('date')!.value;
    let status: boolean = this.registerF.get('status')!.value;

    console.log('here ')
    console.log(roll)
    console.log(date)
    console.log(status)

   

    let obj: any = {
      id : parseInt(roll),
      date: date,
      status: status,
    };

    // obj.id = id;


    this.attdServe.postAttd(this.registerF.value).subscribe(res => {
      console.log(res);
    })
    // if (this.auth.checkUname(uName)){
    //   alert('Username already exists!! Try another Username or Login with associated Username')
    // } else {
    //   this.auth.createUser(uName, pwd)
    //   alert('User Account Created')
    //   this.router.navigate(['/'])
    // }
  }


}
