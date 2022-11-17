import { renderToString } from 'react-dom/server';
import { TestComponent } from './test';

console.log(renderToString(<TestComponent />));

export {};
