import * as React from 'react'
import { SVGProps } from 'react'
export const XIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    viewBox="0 0 66.667 66.667"
    fill="none"
    {...props}
  >
    <rect
      width={66.667}
      height={5.556}
      y={47.141}
      fill="#000"
      rx={2.778}
      transform="rotate(-45 0 47.14)"
    />
    <rect
      width={66.667}
      height={5.556}
      x={4}
      y={0.141}
      fill="#000"
      rx={2.778}
      transform="rotate(45 4 .14)"
    />
  </svg>
)
