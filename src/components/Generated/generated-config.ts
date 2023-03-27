export type heroElement = {
  type: 'hero'
  imageURI: string
}
export type imageTextElement = {
  type: 'image-text'
  imageURI: string
  text: string
  title?: string
  leftToRight?: boolean
}
export type dataElement = {
  type: 'data'
  url: string
}

export type Element = heroElement | imageTextElement | dataElement
export type ElementTypes = 'hero' | 'image-text' | 'data'
