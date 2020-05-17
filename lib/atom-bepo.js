'use babel'

import { CompositeDisposable } from 'atom'

const isInString = scopes => {
  return scopes.reduce((acc, val) => {
    return (
      acc ||
      val.match(/string/g) ||
      val.match(/source.gfm/) ||
      val.match(/text/)
    )
  }, false)
}

export default {
  subscriptions: null,

  activate(state) {
    this.subscriptions = new CompositeDisposable()
    this.subscriptions.add(
      atom.commands.add('atom-workspace', {
        'atom-bepo:insert-quote': () => this.insertQuote(),
      })
    )
  },

  deactivate() {
    this.subscriptions.dispose()
  },

  insertQuote() {
    const editor = atom.workspace.getActiveTextEditor()
    if (editor) {
      const position = editor.getCursorScreenPosition()
      const cursor = editor.getCursorAtScreenPosition(position)
      const scopes = cursor.getScopeDescriptor().getScopesArray()
      const { row, column } = position
      const nextCharacter = [
        [row, column],
        [row, column + 1],
      ]
      const text = editor.getTextInBufferRange(nextCharacter)
      if (isInString(scopes)) {
        if (text.charCodeAt(0) === 39) {
          editor.insertText("'")
        } else {
          editor.insertText('’')
        }
      } else {
        editor.insertText("'")
      }
    }
  },
}
