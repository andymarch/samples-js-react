// polyfill TextEncoder for IE Edge
import { TextEncoder } from 'text-encoding';

/* global window */
if (window.TextEncoder === 'undefined') {
  window.TextEncoder = TextEncoder;
}
