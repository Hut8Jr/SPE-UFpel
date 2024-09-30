import * as React from 'react'
import { SVGProps } from 'react'
export const HorizontalLinesIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    viewBox="0 0 66.667 20"
    fill="none"
    {...props}
  >
    <rect width={66.667} height={5.556} fill="#000" rx={2.778} />
    <rect width={66.667} height={5.556} y={14.445} fill="#000" rx={2.778} />
  </svg>
)
