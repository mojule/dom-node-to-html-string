import * as predicates from '@mojule/dom-node-predicates'
import * as Mapper from '@mojule/mapper'

const childNodes = ( node: Document | DocumentFragment ) : string =>
  Array.from( node.childNodes ).map( node => HtmlString( node ) ).join( '' )

const map = {
  element: ( node: Element ) => node.outerHTML,
  text: ( node: Text ) => node.nodeValue,
  comment: ( node: Comment ) => `<!--${ node.nodeValue }-->`,
  document: ( node: Document ) => childNodes( node ),
  documentType: ( node: DocumentType ) => '<!doctype html>',
  documentFragment: ( node: DocumentFragment ) => childNodes( node ),
  processingInstruction: ( node: ProcessingInstruction ) => `<?${ node.target } ${ node.data }?>`
}

const HtmlString : ( node: Node ) => string = Mapper({ predicates, map })

export = HtmlString
