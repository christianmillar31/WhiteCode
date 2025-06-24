import { createSystem, defaultConfig } from '@chakra-ui/react'
import { tokens } from './design-tokens'

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        primary: { value: tokens.colors.primary },
        accent: { value: tokens.colors.accent },
        background: { value: tokens.colors.background },
        text: { value: tokens.colors.text },
      },
      fonts: {
        heading: { value: tokens.typography.fontFamily },
        body: { value: tokens.typography.fontFamily },
      },
      fontSizes: {
        '2xl': { value: tokens.typography.h1.size },
        xl: { value: tokens.typography.h2.size },
        md: { value: tokens.typography.body.size },
      },
      fontWeights: {
        heading: { value: tokens.typography.h1.weight },
        body: { value: tokens.typography.body.weight },
      },
      radii: {
        sm: { value: tokens.radii.sm },
        md: { value: tokens.radii.md },
        lg: { value: tokens.radii.lg },
        full: { value: tokens.radii.full },
      },
    },
  },
}) 