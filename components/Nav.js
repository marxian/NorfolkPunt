import React from 'react'
import Link from 'next/link'

export default () => (
  <nav className="bg-black-90 w-100 pa1 flex flex-column flex-row-l">
    <div className="tc w-50-l">
      <Link href="/">
        <a className="link dim" title="Home">
          <h1>
            <span className="f2 white">Norfolk&nbsp;Punt</span>{' '}
            <span className="f3 moon-gray">Owners&nbsp;Association</span>
          </h1>
        </a>
      </Link>
    </div>
    <div className="w-100 w-50-l tc tr-l mv4-l f4 b">
      {/*
      <Link href="/gallery">
        <a className="link dim white ph1">Gallery</a>
      </Link> */}
      <Link href="/boats">
        <a className="link dim white ph1">Boats</a>
      </Link>
      <Link href="/technicalities">
        <a className="link dim white underline-hover ph1">Technicalities</a>
      </Link>
    </div>
  </nav>
)
