import { Component, OnInit } from '@angular/core';
import { NewservService } from '../newserv.service';
import { Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-newscontent',
  templateUrl: './newscontent.component.html',
  styleUrls: ['./newscontent.component.css']
})
export class NewscontentComponent implements OnInit {

  constructor(private news:NewservService,private accroute:ActivatedRoute,private routes:Router) { }
  public newslist=[];
  ngOnInit(): void {
    this.news.getinterNews("us").subscribe( res => {
      this.newslist.push(res)
    } , error => console.log('user not found'));
    console.log(this.newslist)
  }
  newlist=[1,2,3]
  // newslist=this.news.getinterNews("in")
  gotoarticles(title){
    console.log(title)
    this.routes.navigate(['article'],{relativeTo:this.accroute});
  }

}
