export default function getInputValue(element: HTMLFormElement, name: string): string {
  const elementInput = element.querySelector(`[name='${name}']`);

  if (!elementInput) {
    return '';
  }

  return elementInput.getAttribute('value') || '';
}
