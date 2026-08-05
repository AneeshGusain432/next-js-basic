

async function DynamicPage({params}) {
const {slug} = await params
  return (
    <div>{slug}</div>
  )
}

export default DynamicPage