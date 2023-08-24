

async function getTest() {
  const res = await fetch(`http://localhost:1337/api/`)
  if (!res.ok) {
    throw new Error('Something went wrong')
  }

  const { data } = (await res).json()
  return data
}

export default async function Home() {
  const infoTest = await getTest()
  console.log(infoTest)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
    </main>
  )
}
