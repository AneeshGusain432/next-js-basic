import React from 'react'

async function SlugPage({params}: {params: Promise<{category: string, slug: string}>}) {
    const {slug, category} = await params
  return (
    <div> {category}, {slug}</div>
  )
}

export default SlugPage