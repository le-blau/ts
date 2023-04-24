namespace App {
  // ドラッグ & ドロップ
  // ドラッグしたもの
  export interface Draggable {
    dragStartHandler(event: DragEvent): void; // DragEventはTSに組み込まれている
    dragEndHandler(event: DragEvent): void;
  }
  
  // ドラッグ先
  export interface DragTarget {
    dragOverHandler(event: DragEvent): void; // ドロップしようとした場所がドロップできるかを処理
    dropHandler(event: DragEvent): void;
    dragLeaveHandler(event: DragEvent): void;
  }
}