import { Component } from '@angular/core';
import { UploadService } from '../../app.service';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [UploadService]
})

export class AppComponent {
    constructor(private service: UploadService) {
        this.service.progress$.subscribe(
            data => {
                console.log('progress = ' + data);
            });
    }

    onChange(event) {
        console.log('onChange');
        var files = event.srcElement.files;
        console.log(files);
        this.service.makeFileRequest('http://localhost:8182/upload', [], files).subscribe(() => {
            console.log('sent');
        });
    }
}