import { useEffect } from 'react'
import { jsonElement } from './generated-config'

// note: ideally separate styles into their own file
import * as styles from './Generated.styes'

type ElementGeneratorProps = jsonElement & {
  jsonData: string
  setJsonData: (data: string) => void
}

const ElementGenerator = (props: ElementGeneratorProps) => {
  const { jsonData, setJsonData } = props
  switch (props.type) {
    case 'hero':
      return (
        <div css={styles.HeroImage}>
          <img src={props.imageURI} alt="Hero Image" />
        </div>
      )
    case 'image-text':
      const flexDirection = props.leftToRight ? 'row' : 'row-reverse'
      return (
        <div css={[styles.ImageText, { flexDirection }]}>
          {props.imageURI && <img src={props.imageURI} alt="Image" />}
          <div>
            {props.title && <h3>{props.title}</h3>}
            <p>{props.text}</p>
          </div>
        </div>
      )
    case 'data':
      /**
       * Depending on AC, `.slice(0, 100) + '...')` could be removed.
       * I'd allow the user to view the entire contents of the JSON
       * with a 'view more' button or something similar
       * like a 'copy to clipboard' button.
       */
      useEffect(() => {
        fetch(props.url)
          .then((response) => response.json())
          .then((data) => setJsonData(JSON.stringify(data).slice(0, 100) + '...'))
      }, [props.url])

      return <pre css={styles.pre}>{jsonData}</pre>
    default:
      return <div>Something went wrong, please check the JSON</div>
  }
}

export default ElementGenerator
