class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;

  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  mandayInputElement: HTMLInputElement;

  constructor() {
    this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
    this.hostElement = document.getElementById('app')! as HTMLDivElement; 

    const importedNode = document.importNode(this.templateElement.content, true);
    this.element = importedNode.firstElementChild as HTMLFormElement;  // #project-input 直下のフォーム要素
    this.element.id = 'user-input';

    // 入力を取得
    this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement;
    this.descriptionInputElement = this.element.querySelector('#description') as HTMLInputElement;
    this.mandayInputElement = this.element.querySelector('#manday') as HTMLInputElement;

    this.configure();
    this.attach();
  }

  private submitHandler(event: Event) {
    event.preventDefault(); // このフォームからHTMLイベントが送られないように設定
    console.log(this.titleInputElement.value);
  }

  private configure() {
    console.log(this)
    this.element.addEventListener('submit', this.submitHandler.bind(this)); // 関数が実行されたとき、thisが参照するべきオブジェクトを渡す
                                                                            // configureメソッドはコンストラクタで実行されるので、bindのthisはProjectInputクラスのオブジェクトを参照する。
  } 

  private attach() {
    this.hostElement.insertAdjacentElement('afterbegin', this.element);
  }
}

const prjInput = new ProjectInput();