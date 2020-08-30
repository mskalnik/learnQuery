class CssClass {
  add(htmlElement: HTMLElement, className: string) {
    return htmlElement.classList.add(className);
  }
  remove(htmlElement: HTMLElement, className: string) {
    return htmlElement.classList.remove(className);
  }
  toggle(htmlElement: HTMLElement, className: string) {
    return htmlElement.classList.toggle(className);
  }
  has(htmlElement: HTMLElement, className: string) {
    return htmlElement.classList.contains(className);
  }
}

const cssClass = new CssClass();
