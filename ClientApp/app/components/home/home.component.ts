import { Component, ViewChild } from '@angular/core';
import { uploadService } from '../../upload.service';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    providers: [uploadService]
})
export class HomeComponent {
    constructor(public service: uploadService) { }

    @ViewChild("fileInput") fileInput;

    addFile(): void {

        let fi = this.fileInput.nativeElement;
        for (var i = 0; i < fi.files.length; i++) {
            let fileToUpload = fi.files[i];
            this.service
                .upload(fileToUpload)
                .subscribe(res => {
                    console.log(res);
                });
        }

            //onChange(event) {
    //    console.log('onChange');
    //    var files = event.srcElement.files;
    //    console.log(files);
    //    this.service.makeFileRequest('http://localhost:8182/upload', [], files).subscribe(() => {
    //        console.log('sent');
    //    });
    //}
    }
}
