# dom-node-to-html-string

Small utility to get an HTML string from any DOM node, because different node
types have different ways of turning themselves into HTML strings, eg there is
no innerHTML on DocumentFragment, Text and Comment nodes use `.nodeValue` etc

`npm install @mojule/dom-node-to-html-string`

```javascript
const HtmlString = require( '@mojule/dom-node-to-html-string' )

// ... code to get node here

console.log( HtmlString( node ) )
```