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

export type JsonState = {
  isArray: boolean
  json: string
  error: string | null
}

function App() {
  const [jsonState, setJsonState] = useState<JsonState>({
    isArray: true,
    json: INITIAL_JSON,
    error: null,
  })

  return (
    <div css={styles.App}>
      <div css={styles.TextEditorContainer}>
        <TextEditor jsonState={jsonState} setJsonState={setJsonState} />
      </div>
      <div css={styles.GeneratedContainer}>
        <Generated jsonState={jsonState} />
      </div>
    </div>
  )
}

export default App
