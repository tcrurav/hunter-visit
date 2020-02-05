import { Component, OnInit } from '@angular/core';

import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.page.html',
  styleUrls: ['./youtube.page.scss'],
})
export class YoutubePage implements OnInit {

  constructor(private youtube: YoutubeVideoPlayer) { }

  ngOnInit() {
  }

  openMyVideo(id){
    this.youtube.openVideo(id);
  }

}
