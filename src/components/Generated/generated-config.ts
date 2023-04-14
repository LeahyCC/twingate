export type HeroElementProps = {
  type: 'hero'
  imageURI: string
}

export type ImageTextElementProps = {
  type: 'image-text'
  imageURI: string
  text: string
  title?: string
  leftToRight?: boolean
}

export type DataElementProps = {
  type: 'data'
  url: string
  setJsonData: (data: string) => void
  jsonData: string
}

export type ElementTypes = 'hero' | 'image-text' | 'data'

export type ElementsProps = HeroElementProps | ImageTextElementProps | DataElementProps

export type ElementGeneratorsProps = (elementProps: ElementsProps) => JSX.Element
