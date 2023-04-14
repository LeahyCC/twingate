import { Dispatch, SetStateAction } from 'react'
import * as styles from './TextEditor.styles'

import { JsonState } from '../../App'

type TextEditorProps = {
  jsonState: JsonState
  setJsonState: Dispatch<SetStateAction<JsonState>>
}

const TextEditor = ({ jsonState, setJsonState }: TextEditorProps) => {
  const validate = (value: string) => {
    try {
      JSON.parse(value)
      setJsonState((prev) => ({
        ...prev,
        json: value,
        isArray: Array.isArray(JSON.parse(value)),
        error: null,
      }))
    } catch (error) {
      if (error instanceof SyntaxError) {
        const errorTyped: SyntaxError = error
        setJsonState((prev) => ({
          ...prev,
          json: value,
          error: errorTyped.message,
        }))
      } else {
        setJsonState((prev) => ({
          ...prev,
          json: value,
          error: 'Invalid JSON',
        }))
      }
    }
  }

  return (
    <div>
      <textarea
        value={jsonState.json}
        css={styles.Input}
        onChange={(e) => validate(e.target.value)}
      />
    </div>
  )
}

export default TextEditor
