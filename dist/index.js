"use strict";
const predicates = require("@mojule/dom-node-predicates");
const Mapper = require("@mojule/mapper");
const childNodes = (node) => Array.from(node.childNodes).map(node => HtmlString(node)).join('');
const map = {
    element: (node) => node.outerHTML,
    text: (node) => node.nodeValue,
    comment: (node) => `<!--${node.nodeValue}-->`,
    document: (node) => childNodes(node),
    documentType: (node) => '<!doctype html>',
    documentFragment: (node) => childNodes(node),
    processingInstruction: (node) => `<?${node.target} ${node.data}?>`
};
const HtmlString = Mapper({ predicates, map });
module.exports = HtmlString;
//# sourceMappingURL=index.js.map