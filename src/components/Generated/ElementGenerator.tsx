import { useRef, useEffect, useCallback, memo, useState } from 'react'
import {
  ElementTypes,
  ElementsProps,
  ElementGeneratorsProps,
  HeroElementProps,
  DataElementProps,
  ImageTextElementProps,
} from './generated-config'

// note: ideally separate styles into their own file
import * as styles from './Generated.styes'

const Hero = memo(function Hero({ imageURI }: HeroElementProps) {
  return (
    <div css={styles.HeroImage}>
      <img src={imageURI} alt="Hero Image" />
    </div>
  )
})

const ImageText = memo(function ImageText({
  leftToRight = true,
  imageURI,
  title,
  text,
}: ImageTextElementProps) {
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
})

const DataElement = memo(function DataElement({ url }: DataElementProps & ElementsProps) {
  const [jsonData, setJsonData] = useState('')
  let didInit = false

  useEffect(() => {
    if (!didInit) {
      didInit = true
      fetch(url)
        .then((response) => response.json())
        .then((data) => setJsonData(JSON.stringify(data).slice(0, 100) + '...'))
    }
  }, [])

  const refreshData = useCallback(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setJsonData(JSON.stringify(data).slice(0, 100) + '...'))
  }, [url])

  return (
    <div>
      <pre css={styles.pre}>{jsonData}</pre>
      <br />
      <button onClick={refreshData}>refresh</button>
    </div>
  )
})

const elementGenerators: Record<ElementTypes, ElementGeneratorsProps> = {
  hero: (elementProps: ElementsProps) => <Hero {...(elementProps as HeroElementProps)} />,
  'image-text': (elementProps: ElementsProps) => (
    <ImageText {...(elementProps as ImageTextElementProps)} />
  ),
  data: (elementProps: ElementsProps) => <DataElement {...(elementProps as DataElementProps)} />,
}

const ElementGenerator = (props: ElementsProps) => {
  const ElementComponent = elementGenerators[props.type]

  if (!ElementComponent) {
    return <div>Something went wrong with this element, please check the JSON</div>
  }

  return <ElementComponent {...props} />
}

export default memo(ElementGenerator)
