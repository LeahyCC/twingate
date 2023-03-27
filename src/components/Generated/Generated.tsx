import { useState } from 'react'
import ElementGenerator from './ElementGenerator'
import { Element } from './generated-config'
import * as styles from './Generated.styes'

import { JsonState } from '../../App'

type jsonInputProps = {
  jsonState: JsonState
}

const Generated = ({ jsonState }: jsonInputProps) => {
  const [jsonData, setJsonData] = useState('')

  return (
    <div>
      {!jsonState.isValid && (
        <div>Invalid JSON could be typing or Invalid JSON || is empty input</div>
      )}
      {jsonState.isValid &&
        (jsonState.isArray ? (
          JSON.parse(jsonState.json).map((element: Element, index: string) => {
            return (
              <div css={styles.generatedContainer} key={`${element.type}-${index}`}>
                <ElementGenerator {...element} jsonData={jsonData} setJsonData={setJsonData} />
              </div>
            )
          })
        ) : (
          <div css={styles.generatedContainer} key={`${JSON.parse(jsonState.json).type}`}>
            <ElementGenerator
              {...JSON.parse(jsonState.json)}
              jsonData={jsonData}
              setJsonData={setJsonData}
            />
          </div>
        ))}
    </div>
  )
}

export default Generated
