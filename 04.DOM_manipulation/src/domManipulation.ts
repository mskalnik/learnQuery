type HTMLElementWithValueAttribute = HTMLElement & { value: string }

class Dom {
  remove(element: HTMLElement) {
    return element.remove();
  }
  append(targetElement: HTMLElement, element: HTMLElement) {
    return targetElement.append(element);
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
  val(targetElement: HTMLElement | HTMLElementWithValueAttribute) {
    return 'value' in targetElement
      ? targetElement.value
      : targetElement.innerText;
  }
}

const dom = new Dom();
