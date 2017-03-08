import { Component, ViewEncapsulation } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html',
  styleUrls: ['documents.components.css']
})
export class DocumentsComponent {
  pageTitle: string = "Document Dashboard"
  
  documents: Document[] = [
    {
      title: "My First Doc",
      description: 'asdfsdgf asdfgasdg asdgfsad asd',
      file_url: 'http://google.com',
      updated_at: '03/02/2016',
      image_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg',
    },
    {
      title: "My Second Doc",
      description: 'asdfsdgf asdfgasdg asdgfsad asd',
      file_url: 'http://google.com',
      updated_at: '03/02/2016',
      image_url: 'http://maxpixel.freegreatpicture.com/static/photo/1x/Library-Desk-Notebook-Workplace-Iphone-Study-336634.jpg',
    },
    {
      title: "My Last Doc",
      description: 'asdfsdgf asdfgasdg asdgfsad asd',
      file_url: 'http://google.com',
      updated_at: '03/02/2016',
      image_url: 'http://youngtopublishing.com/wp-content/uploads/2017/02/Freelancer-Fair-couple.jpg',
    }
  ]
}