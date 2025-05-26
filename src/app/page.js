'use client'

import dynamic from "next/dynamic"
import { useState } from "react"

const Pagination = dynamic(() => import('./components/Pagination'))

export default function Home() {
  const [pageItems, setPageItems] = useState([])
  const items = ["Element 1", "Element 2", "Element 3", "Element 4", "Element 5", "Element 6", "Element 7", "Element 8", "Element 9", "Element 10"]

  return <>
    <section className="h-svh w-full flex flex-col items-center justify-center">
      <div className="w-[450px] h-[350px] bg-gray-100 flex flex-col justify-between rounded-xl overflow-hidden">
        <ul className="py-4 px-2">
          {pageItems?.map((item, index) => <li key={index} className="p-2 px-6 text-xl">{item}</li>)}
        </ul>
        <Pagination limit={4} group={2} items={items} onChange={e => setPageItems(e)} />
      </div>
    </section>
  </>
}