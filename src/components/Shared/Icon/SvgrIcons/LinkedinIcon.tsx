import * as React from 'react'
import { SVGProps } from 'react'
export const LinkedinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 58}
    height={props.height || 58}
    viewBox="0 0 58 58"
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      d="M51.25.5a6.312 6.312 0 0 1 6.313 6.313V51a6.313 6.313 0 0 1-6.313 6.313H7.062A6.313 6.313 0 0 1 .75 51V6.812A6.312 6.312 0 0 1 7.063.5H51.25Zm-1.578 48.922V32.694a10.29 10.29 0 0 0-10.29-10.29c-2.682 0-5.807 1.642-7.322 4.104v-3.504h-8.806v26.418h8.806v-15.56c0-2.43 1.957-4.42 4.387-4.42a4.42 4.42 0 0 1 4.419 4.42v15.56h8.806ZM12.996 18.049a5.303 5.303 0 0 0 5.303-5.303c0-2.935-2.367-5.334-5.303-5.334a5.334 5.334 0 0 0-5.334 5.334c0 2.936 2.399 5.303 5.334 5.303Zm4.387 31.373V23.004H8.641v26.418h8.742Z"
    />
  </svg>
)
