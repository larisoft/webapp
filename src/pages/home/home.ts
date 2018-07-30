import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { SpinnerDialog } from '@ionic-native/spinner-dialog';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private iab: InAppBrowser, public loadingCtrl: LoadingController, public spinnerDialog: SpinnerDialog) {

          const browser = this.iab.create('http://crypstone.com/mobile.html',   '_blank',
          {
            location: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes'
          });

        browser.on('loadstart').subscribe((eve) => {
          this.spinnerDialog.show(null, null, true);
        }, err => {
          this.spinnerDialog.hide();
        })

        browser.on('loadstop').subscribe(()=>{
          this.spinnerDialog.hide();
        }, err =>{
          this.spinnerDialog.hide();
        })

        browser.on('loaderror').subscribe(()=>{
          this.spinnerDialog.hide();
        }, err =>{
          this.spinnerDialog.hide();
        })

        browser.on('exit').subscribe(()=>{
          this.spinnerDialog.hide();
        }, err =>{
          this.spinnerDialog.hide();
        })

  }

  public options : InAppBrowserOptions = {
      location : 'no',//Or 'no'
      hidden : 'no', //Or  'yes'
      clearcache : 'yes',
      clearsessioncache : 'yes',
      zoom : 'yes',//Android only ,shows browser zoom controls
      hardwareback : 'yes',
      mediaPlaybackRequiresUserAction : 'no',
      shouldPauseOnSuspend : 'no', //Android only
      closebuttoncaption : 'Close', //iOS only
      disallowoverscroll : 'no', //iOS only
      toolbar : 'yes', //iOS only
      enableViewportScale : 'no', //iOS only
      allowInlineMediaPlayback : 'no',//iOS only
      presentationstyle : 'pagesheet',//iOS only
      fullscreen : 'yes',//Windows only
  };

  presentLoadingDefault() {
  let loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });

  loading.present();

  setTimeout(() => {
    loading.dismiss();
  }, 5000);
}



}
