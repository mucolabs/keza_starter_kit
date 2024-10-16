import type { VariantColorsResolver } from '@mantine/core'
import { defaultVariantColorsResolver } from '@mantine/core'

export const variantColorResolver: VariantColorsResolver = (input) => {
  const defaultResolvedColors = defaultVariantColorsResolver(input)

  if (input.variant === 'light' && input.color === 'brand') {
    return {
      ...defaultResolvedColors,
      hover: 'var(--mantine-color-brand-1)',
    }
  }

  /**
   * Brand variant
   */

  /**
   * Gray variant
   */
  if (input.color === 'gray' && input.variant === 'subtle') {
    return {
      background: 'transparent',
      hover: 'var(--mantine-color-gray-1)',
      color: 'var(--mantine-color-gray-8)',
      border: 'none',
    }
  }

  if (input.color === 'gray' && input.variant === 'outline') {
    return {
      background: 'transparent',
      hover: 'var(--mantine-color-gray-1)',
      color: 'var(--mantine-color-gray-8)',
      border: '1px solid var(--mantine-color-gray-2)',
    }
  }

  if (input.color === 'gray' && input.variant === 'filled') {
    return {
      background: 'var(--mantine-color-gray-1)',
      hover: 'var(--mantine-color-gray-2)',
      color: 'var(--mantine-color-gray-8)',
      border: `none`,
    }
  }

  if (input.color === 'gray' && input.variant === 'light') {
    return {
      background: 'var(--mantine-color-gray-0)',
      hover: 'var(--mantine-color-gray-1)',
      color: 'var(--mantine-color-gray-8)',
      border: `none`,
    }
  }

  return defaultResolvedColors
}
