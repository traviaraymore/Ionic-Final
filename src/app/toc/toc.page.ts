import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.page.html',
  styleUrls: ['./toc.page.scss'],
})
export class TOCPage implements OnInit {
public chapters = [
  {
    title: "Chapter 1 | The Beginning",
    url: "/chapter1"
  },

  {
    title: "Chapter 2 | The Plot",
    url: "/chapter2"
  },

  {
    title: "Chapter 3 | The Conclusion",
    url: "/chapter3"
  },

  {
    title: "Chapter 4 | The Acknowledgements",
    url: "/chapter4"
  },
 
  {
    title: "Chapter 5 | The Special Thank You",
    url: "/chapter5"
  }
 
]
  constructor() { }

  ngOnInit() {
  }

}
