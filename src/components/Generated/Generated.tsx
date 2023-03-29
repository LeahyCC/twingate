import ElementGenerator from './ElementGenerator'
import { ElementsProps } from './generated-config'
import * as styles from './Generated.styes'

import { JsonState } from '../../App'

type jsonInputProps = {
  jsonState: JsonState
}

const Generated = ({ jsonState }: jsonInputProps) => {
  return (
    <div>
      {jsonState.error && <pre>{jsonState.error}</pre>}
      {!jsonState.error &&
        (jsonState.isArray ? (
          JSON.parse(jsonState.json).map((element: ElementsProps, index: string) => {
            return (
              <div css={styles.generatedContainer} key={`${element.type}-${index}`}>
                <ElementGenerator {...element} />
              </div>
            )
          })
        ) : (
          <div css={styles.generatedContainer} key={`${JSON.parse(jsonState.json).type}`}>
            <ElementGenerator {...JSON.parse(jsonState.json)} />
          </div>
        ))}
    </div>
  )
}

export default Generated
