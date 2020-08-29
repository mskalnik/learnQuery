interface ICssProperty {
  [key: string]: string;
}

function cssProp(
  htmlElement: HTMLElement,
  cssProperty: string,
  value: string,
): HTMLElement;

function cssProp(
  htmlElement: HTMLElement,
  cssProperty: string,
): string;

function cssProp(
  htmlElement: HTMLElement,
  cssProperty: ICssProperty,
): void;

function cssProp(
  htmlElement: HTMLElement,
  cssProperty: string | ICssProperty,
  value?: string
 ) {
  if (typeof cssProperty === 'object') {
    for (const [key, value] of Object.entries(cssProperty)) {
      htmlElement.style.setProperty(key, value);
    }
    return htmlElement;
  } else {
    return value
      ? htmlElement.style.setProperty(cssProperty, value)
      : htmlElement.style.getPropertyValue(cssProperty);
  }
}
