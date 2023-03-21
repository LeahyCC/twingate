import { css } from '@emotion/react'

export const generatedContainer = css({
  backgroundColor: '#0E0E1A',
  padding: '20px',
  margin: '10px',
  borderRadius: '10px',
})

export const HeroImage = css({
  width: '100%',
  textAlign: 'left',

  img: {
    width: '100%',
    maxWidth: '200px',
  },
})

export const ImageText = css({
  display: 'flex',
  width: '100%',

  img: {
    width: '100%',
    maxWidth: '200px',
  },

  div: {
    width: '100%',
  },
})

export const pre = css({
  wordBreak: 'break-word',
  whiteSpace: 'pre-wrap',
  margin: '0',
  padding: '0',
  fontFamily: 'monospace',
  fontSize: '1rem',
  lineHeight: '1.5',
  color: '#212529',
  backgroundColor: '#f8f9fa',
  border: '1px solid #e9ecef',
  borderRadius: '0.25rem',
  overflow: 'auto',
})
