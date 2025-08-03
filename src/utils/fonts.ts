// Font utility classes for easy usage throughout the project

export const fontClasses = {
  // Array font variants
  array: {
    regular: 'font-array-regular',
    wide: 'font-array-wide',
    semibold: 'font-array-semibold',
    semiboldWide: 'font-array-semibold-wide',
    bold: 'font-array-bold',
    boldWide: 'font-array-bold-wide',
  },

  // Author font variants
  author: {
    extralight: 'font-author-extralight',
    light: 'font-author-light',
    regular: 'font-author-regular',
    medium: 'font-author-medium',
    semibold: 'font-author-semibold',
    bold: 'font-author-bold',
    variable: 'font-author-variable', // Recommended for variable weight control
  },
};

// CSS variable names for direct CSS usage
export const fontVariables = {
  array: {
    regular: '--font-array-regular',
    wide: '--font-array-wide',
    semibold: '--font-array-semibold',
    semiboldWide: '--font-array-semibold-wide',
    bold: '--font-array-bold',
    boldWide: '--font-array-bold-wide',
  },
  author: {
    extralight: '--font-author-extralight',
    light: '--font-author-light',
    regular: '--font-author-regular',
    medium: '--font-author-medium',
    semibold: '--font-author-semibold',
    bold: '--font-author-bold',
    variable: '--font-author-variable',
  },
};

// Helper function to get font class
export const getArrayFont = (variant: keyof typeof fontClasses.array) => fontClasses.array[variant];
export const getAuthorFont = (variant: keyof typeof fontClasses.author) => fontClasses.author[variant];
