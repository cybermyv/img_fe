import { Component, ElementRef, OnDestroy, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


import { ImageService } from './image.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'gallery';

  @ViewChild('labelImport', { read: ElementRef, static: false }) labelImport: ElementRef;

  formImport: FormGroup;
  fileToUpload: File = null;
  imageList: any;


  constructor(private imageService: ImageService,  private router: Router) {
    this.formImport = new FormGroup({
      importFile: new FormControl('', Validators.required)
    });
  }
  ngOnInit() {
    this.imageService.getAllImage().subscribe(data => {
      this.imageList = Object.values(data);
   });
  }

  onFileChange(files: FileList) {
    // this.labelImport.nativeElement.innerText = Array.from(files)
    //   .map(f => f.name)
    //   .join(', ');
    // this.fileToUpload = files.item(0); - это если много файлов

    this.labelImport.nativeElement.innerText = files.item(0).name; // вставляем имя файла в инпут
    this.fileToUpload = files.item(0);
  }

  import(): void {
    console.log('import ' + this.fileToUpload.name);

    const formData = new FormData();

    formData.append('importFile', this.fileToUpload );
    formData.append('path', 'Дополнительный текст' );

    this.imageService.setImage(formData).subscribe(data => console.log('upload'));

    // очищаем инпут и переменную с файлом
    this.labelImport.nativeElement.innerText = 'Выбрать файл';
    this.fileToUpload = null;

  }

  navigateToId(id: string) {


    this.router.navigate([`/img/${id}`]);
    // this.imageService.getImgById(id).subscribe();
  }
}


