export interface Story {
    id: number;
    category: string;
    name: string;
    audio: Blob;
    text: string[];
    backgroundMusic: string;
  }