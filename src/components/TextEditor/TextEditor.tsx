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
      setJsonState((prev) => {
        return { ...prev, isValid: true, json: value, isArray: Array.isArray(JSON.parse(value)) }
      })
    } catch (e) {
      setJsonState((prev) => {
        return { ...prev, isValid: false, json: value }
      })
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
