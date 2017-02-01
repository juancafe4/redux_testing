import jsdom from 'jsdom'
import _$ from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';

// Set up testing enviroment to run like a browser in the command line
// window -> global
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
const $ = _$(global.window); // we want to make responsable of this fake DOM

// Build 'renderComponent' helper that should render a given React class
function renderComponent(ComponentClass) {
  const componentInstance = TestUtils.renderDocument(<ComponentClass/>);
  return $(ReactDOM.findDOMNode(componentInstance)) // produces HTML

}
// Build helper for simulating events

// Set up chai-jquery