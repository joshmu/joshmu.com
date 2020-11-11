import styled, { css } from "styled-components"

export const H1 = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.fontSize["6xl"]};
    font-family: ${theme.fontFamily.main};
    margin-top: ${theme.spacing[8]};
    line-height: ${theme.lineHeight.none};
  `}

  /* MODIFIERS */
  ${({ theme }) => theme.modifiers}
`