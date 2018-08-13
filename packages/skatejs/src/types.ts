export interface CustomElement extends HTMLElement {
  renderRoot?: Node;
  attributeChangedCallback?(name: string, oldValue: string, newValue: string);
  connectedCallback?();
  disconnectedCallback?();
  render?(host: CustomElement);
  renderer?(root: HTMLElement | ShadowRoot, html: () => string);
  updated?(props?: {}, state?: {});
}

export interface CustomElementConstructor {
  new (): CustomElement;
  is?: string;
  observedAttributes?: Array<string>;
  props?: {};
  _attrToPropMap?: { [s: string]: string };
}

export type CustomElementLink = EventTarget & {
  checked?: boolean;
  name?: string;
  type?: string;
  value?: string;
};

export type CustomElementEvent = CustomEvent & {
  composed?: boolean;
  composedPath?: () => Array<Node>;
};

export interface CustomElementEventOptions {
  bubbles?: boolean;
  cancelable?: boolean;
  composed?: boolean;
  detail?: Object;
}