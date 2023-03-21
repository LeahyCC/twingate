import { useState } from 'react'
import ElementGenerator from './ElementGenerator'
import { jsonElement } from './generated-config'
import * as styles from './Generated.styes'

type jsonInputProps = {
  jsonInput: string
}

const Generated = ({ jsonInput }: jsonInputProps) => {
  const parsedJson = JSON.parse(jsonInput)
  const [jsonData, setJsonData] = useState('')

  return (
    <div>
      {/* Check if it's array of obj or a single obj */}
      {parsedJson?.length > 0 ? (
        parsedJson.map((element: jsonElement, index: string) => {
          return (
            <div css={styles.generatedContainer} key={`${element.type}-${index}`}>
              <ElementGenerator {...element} jsonData={jsonData} setJsonData={setJsonData} />
            </div>
          )
        })
      ) : jsonInput ? (
        <div css={styles.generatedContainer} key={`${parsedJson.type}`}>
          <ElementGenerator {...parsedJson} jsonData={jsonData} setJsonData={setJsonData} />
        </div>
      ) : (
        <div>Something when wrong, please check your JSON</div>
      )}
    </div>
  )
}

export default Generated
