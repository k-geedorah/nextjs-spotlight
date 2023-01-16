import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
      <div className='fixed overflow-y-auto overflow-x-hidden bg-black h-full w-full flex justify-center align-center'>
        <div className='bg-zinc-900 absolute w-4/5'>
          <Main />
          <NextScript />
        </div>
      </div>
    </body>
    </Html >
  )
}
