
import Link from "next/link";

export default async function Home() {


  return (
    <main>
      <div>
        <Link href='/posts/post-1'>Post 1</Link>
        <Link href='/posts/post-2'>Post 2</Link>
      </div>
      hello world

    </main>
  )
}
