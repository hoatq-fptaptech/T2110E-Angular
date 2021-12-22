import {Component} from "@angular/core";
@Component({
  selector: "classroom",
  templateUrl: "./classroom.component.html"
})
export class ClassroomComponent{
  alowAddStudent: boolean = false;
  studentName: string = "";
  notification: string = "No student was created!";
  created:boolean = false;
  gender: string = "";
  sinhviens = [
    "Nguyễn Tiến Đạt",
    "Trần Thế Bôn",
    "Nguyễn Thế Huy"
  ];
  constructor() { // hàm khởi tạo - thực thi ngay tại thời điểm tạo đối tượng
      setTimeout( ()=>{
        this.alowAddStudent = true;
      },2000);
  }

  onCreateStudent(){
      if(this.studentName.length >0){
        this.sinhviens.push(this.studentName);
        this.notification = "Student "+ this.studentName +" was created!";
        this.studentName = "";
        this.created = true;
      }

  }
}
