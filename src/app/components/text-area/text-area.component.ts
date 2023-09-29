import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css']
})
export class TextAreaComponent {
  @ViewChild('editor') editor: any;
  editorContent = '';

  applyIndent() {
    const content = this.editorContent;

    const indentedContent = ' '.repeat(9) + content;

    this.editorContent = indentedContent;
  }
}
