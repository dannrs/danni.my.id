/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
declare module "@icons/*" {
  const component: (props: astroHTML.JSX.SVGAttributes) => astroHTML.JSX.Element
  export default component
}

declare module "virtual:icons/*" {
  import type React from "react"
  import type { SVGProps } from "react"

  const component: (props: SVGProps<SVGSVGElement>) => React.ReactElement
  export default component
}
