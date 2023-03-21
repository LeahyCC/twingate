import { Dispatch, SetStateAction } from 'react'
import * as styles from './TextEditor.styles'

type TextEditorProps = {
  jsonInput: string
  setJsonInput: Dispatch<SetStateAction<string>>
  setIsValidJson: Dispatch<SetStateAction<boolean>>
}

const TextEditor = ({ setIsValidJson, jsonInput, setJsonInput }: TextEditorProps) => {
  const validate = (value: string) => {
    try {
      JSON.parse(value)
      setIsValidJson(true)
    } catch (e) {
      setIsValidJson(false)
    }
    setJsonInput(value)
  }

  return (
    <div>
      <textarea value={jsonInput} css={styles.Input} onChange={(e) => validate(e.target.value)} />
    </div>
  )
}

export default TextEditor
