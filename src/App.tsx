import { useState } from 'react'

import TextEditor from './components/TextEditor/TextEditor'
import Generated from './components/Generated/Generated'

import './reset.css'
import * as styles from './App.styles'

const DUMMY_JSON = `
{
  "type": "hero",
  "imageURI": "https://images.unsplash.com/photo-1579963333765-b4129b3250fc"
},
{
  "type": "image-text",
  "imageURI": "https://images.unsplash.com/photo-1579963333765-b4129b3250fc",
  "text": "Sunset from the sky......",
  "title": "Airplane",
  "leftToRight": false
},
{
  "type": "image-text",
  "imageURI": "https://images.unsplash.com/photo-1579963333765-b4129b3250fc",
  "text": "Sunset from the sky......",
  "title": "Airplane",
  "leftToRight": true
},
{
  "type": "image-text",
  "imageURI": "https://images.unsplash.com/photo-1579963333765-b4129b3250fc",
  "text": "Sunset from the sky......",
  "title": "Airplane"
},
{
  "type": "data",
  "url": "https://api.publicapis.org/entries"
}
`

const INITIAL_JSON = `[${DUMMY_JSON}]`
// const INITIAL_JSON = `[]`

function App() {
  const [jsonInput, setJsonInput] = useState(INITIAL_JSON)
  const [isValidJson, setIsValidJson] = useState(true)

  return (
    <div css={styles.App}>
      <div css={styles.TextEditorContainer}>
        <TextEditor
          jsonInput={jsonInput}
          setJsonInput={setJsonInput}
          setIsValidJson={setIsValidJson}
        />
      </div>
      <div css={styles.GeneratedContainer}>
        {isValidJson && <Generated jsonInput={jsonInput} />}
        {!isValidJson && <div>Invalid JSON or empty input field</div>}
      </div>
    </div>
  )
}

export default App
