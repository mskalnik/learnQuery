class Dom {
  remove(element: HTMLElement) {
    return element.remove();
  }
  append(targetElement: HTMLElement, element: HTMLElement) {
    return targetElement.append(element)
  }
  after(targetElement: HTMLElement, element: HTMLElement) {
    return targetElement.after(element);
  }
  prepend(targetElement: HTMLElement, element: HTMLElement) {
    return targetElement.prepend(element);
  }
  before(targetElement: HTMLElement, element: HTMLElement) {
    return targetElement.before(element);
  }
  val(targetElement: HTMLElement & { value: string }) {
    return targetElement.value;
  }
}

const dom = new Dom();
