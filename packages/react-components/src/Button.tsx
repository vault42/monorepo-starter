import * as React from 'react'

export interface ButtonProps {
  onClick: () => void
  children: React.ReactNode
}

export function Button(props: ButtonProps) {
  return <button onClick={props.onClick}>{props.children}</button>
}

Button.displayName = 'Button'
