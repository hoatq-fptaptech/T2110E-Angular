import {Component,Input} from "@angular/core";

@Component({
  selector:"student",
  templateUrl:"./student.component.html"
})
export class StudentComponent{
  @Input() name: string | undefined;
  m1: number = 7;
  m2:number = 8;
  m3:number = 8.5;
  m4:number = 5;

  tbDiemThi(){
    return (this.m1+this.m2+this.m3+this.m4)/4;
  }
}
