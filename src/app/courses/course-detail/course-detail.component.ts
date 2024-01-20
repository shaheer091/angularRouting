import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/Models/course';
import { CourseService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css'],
})
export class CourseDetailComponent implements OnInit,OnDestroy {
  selectedCourse!: any;
  courseId: any;

  courseService: CourseService = inject(CourseService);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  paramMapObs:any;

  ngOnInit(): void {
    // this.courseId = this.activeRoute.snapshot.params['id'];
    // this.courseId = Number(this.activeRoute.snapshot.paramMap.get('id'));
    // console.log(this.courseId);

    // this.activeRoute.params.subscribe((data) => {
    //   this.courseId = +data['id'];
    //   this.selectedCourse = this.courseService.courses.find(
    //     (course) => course.id === this.courseId
    //   );
    // });

    this.paramMapObs= this.activeRoute.paramMap.subscribe((data) => {
      this.courseId = Number(data.get('id'));
      this.selectedCourse = this.courseService.courses.find(
        (course) => course.id === this.courseId
      );
    });

    // console.log(this.selectedCourse);
  }

  ngOnDestroy(): void {
    this.paramMapObs.unsubscribe()
  }
}
