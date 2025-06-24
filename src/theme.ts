import { createSystem, defaultConfig } from '@chakra-ui/react'
import { colors, typography, radii } from './design-tokens'

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        primary: { value: colors.primary },
        primaryDark: { value: colors.primaryDark },
        secondary: { value: colors.secondary },
        secondaryDark: { value: colors.secondaryDark },
        background: { value: colors.background },
        surface: { value: colors.surface },
        error: { value: colors.error },
        warning: { value: colors.warning },
        success: { value: colors.success },
        text: { value: colors.text },
        textSecondary: { value: colors.textSecondary },
        border: { value: colors.border },
      },
      fonts: {
        heading: { value: typography.fontFamily },
        body: { value: typography.fontFamily },
      },
      fontSizes: {
        xs: { value: typography.fontSize.xs },
        sm: { value: typography.fontSize.sm },
        base: { value: typography.fontSize.base },
        lg: { value: typography.fontSize.lg },
        xl: { value: typography.fontSize.xl },
        '2xl': { value: typography.fontSize['2xl'] },
        '3xl': { value: typography.fontSize['3xl'] },
        '4xl': { value: typography.fontSize['4xl'] },
        '5xl': { value: typography.fontSize['5xl'] },
      },
      fontWeights: {
        normal: { value: typography.fontWeight.normal },
        medium: { value: typography.fontWeight.medium },
        semibold: { value: typography.fontWeight.semibold },
        bold: { value: typography.fontWeight.bold },
      },
      radii: {
        sm: { value: radii.sm },
        md: { value: radii.md },
        lg: { value: radii.lg },
        full: { value: radii.full },
      },
    },
  },
}) 