
import { Component } from '../components/base-component.js'
import { Project } from '../models/project.js';
import { autobind } from '../decorators/autobind.js';
import { Draggable } from '../models/drag-drop.js';

  // プロジェクトアイテム
  export class ProjectItem
    extends Component<HTMLUListElement, HTMLLIElement>
    implements Draggable
  {
    private project: Project;

    get manday() {
      if (this.project.manday < 20) {
        return this.project.manday.toString() + "日";
      } else {
        return (this.project.manday / 20).toString() + "月";
      }
    }

    constructor(hostId: string, project: Project) {
      super("single-project", hostId, false, project.id);
      this.project = project;

      this.configure();
      this.renderContent();
    }

    @autobind
    dragStartHandler(event: DragEvent) {
      event.dataTransfer!.setData("text/plain", this.project.id);
      event.dataTransfer!.effectAllowed = "move";
    }

    dragEndHandler(_: DragEvent) {
      console.log("Drag終了");
    }

    configure() {
      // 画面上でユーザーアクション（イベント）が起きたとき、対応するメソッドが呼び出されるように設定
      this.element.addEventListener("dragstart", this.dragStartHandler);
      this.element.addEventListener("dragend", this.dragEndHandler);
    }

    renderContent() {
      // 指定タグへテキストを設定
      this.element.querySelector("h2")!.textContent = this.project.title; // this.elementは"single-project"のli要素
      this.element.querySelector("h3")!.textContent = this.manday;
      this.element.querySelector("p")!.textContent = this.project.description;
    }
  }

