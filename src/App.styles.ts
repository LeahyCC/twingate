import { css } from '@emotion/react'

export const App = css({
  maxWidth: '1200px',
  height: 'calc(100vh - 40px)',
  margin: '20px auto',
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridGap: '10px',
})

export const TextEditorContainer = css({
  maxHeight: 'calc(100vh - 40px)',
  overflow: 'auto',
})

export const GeneratedContainer = css({
  maxHeight: 'calc(100vh - 40px)',
  overflow: 'auto',
  backgroundColor: '#003268',
})
