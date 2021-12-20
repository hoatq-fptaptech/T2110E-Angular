import {Component} from "@angular/core";
@Component({
  selector: "classroom",
  templateUrl: "./classroom.component.html"
})
export class ClassroomComponent{
  alowAddStudent: boolean = false;
  notification: string = "No student was created!";
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
      this.notification = "Student was created!";
  }
}
