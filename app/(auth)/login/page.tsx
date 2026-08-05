import Link from 'next/link';
import React from 'react'

function page() {
  return (
    <Link href={{
        pathname: "/contact",
        query: {name: "test"}
    }}>go to signup page</Link>
  )
}

export default page