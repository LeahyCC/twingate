type heroElement = {
  type: 'hero'
  imageURI: string
}
type imageTextElement = {
  type: 'image-text'
  imageURI: string
  text: string
  title?: string
  leftToRight?: boolean
}
type dataElement = {
  type: 'data'
  url: string
}
export type jsonElement = heroElement | imageTextElement | dataElement
