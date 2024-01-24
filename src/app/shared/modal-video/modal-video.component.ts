import { AfterViewInit, Component, Input } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'modal-video',
  templateUrl: './modal-video.component.html',
  styleUrls: ['./modal-video.component.css']
})
export class ModalVideoComponent implements AfterViewInit{
  public videoUrl: SafeUrl = ''
  public isOpen: boolean = false;
  public back: HTMLElement | null = null;

  constructor(){
  }

  ngAfterViewInit(): void {

  }


  open(videoParam: SafeUrl) {
    this.videoUrl = videoParam
    this.isOpen = true;
    setTimeout(()=>{

      this.back =  document.getElementById('back')
      console.log('MODAL-BACK',this.back);
      const self = this
      this.back?.addEventListener('click', function(e){
        console.log('CLOSE',e.target)
        self.isOpen = false;
        e.target?.removeEventListener('click', function(){

          close()
        })
      })
    },0)
  }

  close() {
    console.log('CLOSE',this.back)
  }


}
