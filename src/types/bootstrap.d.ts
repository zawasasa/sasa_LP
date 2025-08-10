declare module 'bootstrap/dist/js/bootstrap.bundle.min.js';

type BootstrapScrollSpy = {
  dispose: () => void;
};

declare global {
  interface Window {
    bootstrap: {
      ScrollSpy: {
        new (element: Element, options?: { target?: string; offset?: number }): BootstrapScrollSpy;
        getInstance: (element: Element) => BootstrapScrollSpy | null;
      };
    };
  }
}

export {};


