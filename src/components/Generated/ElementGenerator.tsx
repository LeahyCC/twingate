import { useEffect } from 'react'
import { ElementTypes, heroElement, dataElement, imageTextElement } from './generated-config'

// note: ideally separate styles into their own file
import * as styles from './Generated.styes'

type ElementProps = heroElement | imageTextElement | dataElement

type ElementGeneratorProps = (heroElement | imageTextElement | dataElement) & {
  jsonData: string
  setJsonData: (data: string) => void
}

const ElementGenerator = (props: ElementGeneratorProps) => {
  const Hero = ({ imageURI }: heroElement) => {
    return (
      <div css={styles.HeroImage}>
        <img src={imageURI} alt="Hero Image" />
      </div>
    )
  }

  const ImageText = ({ leftToRight = true, imageURI, title, text }: imageTextElement) => {
    const flexDirection = leftToRight ? 'row' : 'row-reverse'
    return (
      <div css={[styles.ImageText, { flexDirection }]}>
        {imageURI && <img src={imageURI} alt="Image" />}
        <div>
          {title && <h3>{title}</h3>}
          <p>{text}</p>
        </div>
      </div>
    )
  }

  const DataElement = ({ url }: dataElement) => {
    useEffect(() => {
      refreshData()
    }, [url])

    const refreshData = () => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => props.setJsonData(JSON.stringify(data).slice(0, 100) + '...'))
    }

    return (
      <div>
        <pre css={styles.pre}>{props.jsonData}</pre>
        <br />
        <button onClick={refreshData}>refresh</button>
      </div>
    )
  }

  const elementGenerators: Record<ElementTypes, (elementProps: ElementProps) => JSX.Element> = {
    hero: (elementProps: ElementProps) => <Hero {...(elementProps as heroElement)} />,
    'image-text': (elementProps: ElementProps) => (
      <ImageText {...(elementProps as imageTextElement)} />
    ),
    data: (elementProps: ElementProps) => <DataElement {...(elementProps as dataElement)} />,
  }

  const ElementComponent = elementGenerators[props.type]

  if (!ElementComponent) {
    return <div>Something went wrong with this element, please check the JSON</div>
  }

  return <ElementComponent {...props} />
}

export default ElementGenerator
