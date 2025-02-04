"use client"

import Code from "../../../../components/Code"
import CodeAndExample from "../../../../components/CodeAndExample"

import Plain from "../../../../components/guide-examples/hello-fx/plain"
import PlainSource from "!raw-loader!../../../../components/guide-examples/hello-fx/plain"

function Page() {
  return (
    <>
      <p>Install the package from NPM:</p>

      <Code
        language="bash"
        source={`
          yarn add mafs
          # or, if using NPM
          npm install --save mafs
        `}
      />

      <p>And then make sure to load the stylesheet:</p>

      <Code language="css" source={`@import "mafs/build/index.css";`} />

      <p>Now, in your React app, you should be able to render a Mafs view.</p>

      <CodeAndExample component={<Plain />} source={PlainSource} />

      <h2>Vector math</h2>

      <p>
        Mafs ships with a tiny set of linear algebra functions. You can import everything under
        <code>vec</code>.
      </p>

      <Code
        language="tsx"
        source={`
          import { vec } from "mafs"
          vec.add([1, 2], [2, 3]) // [3, 5]
        `}
      />

      <h2>Fancy math font</h2>

      <p>
        The font in use on this site—Computer Modern Serif—does not ship with Mafs to avoid
        licensing problems. Mafs will inherit the body's font. You can{" "}
        <a href="https://www.checkmyworking.com/cm-web-fonts/">download Computer Modern webfonts</a>{" "}
        yourself to make it available on the page, then customize the Mafs font like this:
      </p>

      <Code
        language="css"
        source={`
          .MafsView {
            font-family: "Computer Modern Serif", serif;
          }
        `}
      />
    </>
  )
}

export default Page
