'use strict'

const assert = require( 'assert' )
const doc = require( '@mojule/document' )
const HtmlString = require( '../' )

describe( 'dom-node-to-html-string', () => {
  it( 'element', () => {
    const div = doc.createElement( 'div' )
    assert.strictEqual( HtmlString( div ), '<div></div>' )
  })
  it( 'text', () => {
    const text = doc.createTextNode( 'hello' )
    assert.strictEqual( HtmlString( text ), 'hello' )
  })
  it( 'comment', () => {
    const comment = doc.createComment( 'hello' )
    assert.strictEqual( HtmlString( comment ), '<!--hello-->' )
  })
  it( 'document', () => {
    assert.strictEqual( HtmlString( doc ), '<!doctype html><html><head></head><body></body></html>' )
  })
  it( 'fragment', () => {
    const fragment = doc.createDocumentFragment()
    const div = doc.createElement( 'div' )
    const text = doc.createTextNode( 'hello' )
    fragment.appendChild( div )
    fragment.appendChild( text )
    assert.strictEqual( HtmlString( fragment ), '<div></div>hello' )
  })
  it( 'processingInstruction', () => {
    const pi = doc.createProcessingInstruction( 'target', 'data' )
    assert.strictEqual( HtmlString( pi ), '<?target data?>' )
  })
})
