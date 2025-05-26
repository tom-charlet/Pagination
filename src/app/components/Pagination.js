'use client'

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"

const Icon = dynamic(() => import('./Icon'))

const Pagination = ({ items, limit, group, onChange }) => {
    const pages = Math.ceil(items?.length / limit)
    const [active, setActive] = useState(1)
    const size = group ?? 3
    const styleButton = "size-8 rounded-full bg-white disabled:bg-transparent cursor-pointer"
    const styleBullet = "size-8 rounded-full cursor-pointer text-gray-900"
    const styleBulletActive = "size-8 rounded-full bg-gray-900 cursor-pointer text-white"
    const styleIcon = "size-4 fill-gray-900"

    useEffect(() => {
        if (typeof onChange == "function" && active) onChange(items?.slice((limit * active) - limit, (limit * active)))
    }, [active])

    return <>
        {items?.length > limit ? <div className="px-6 py-5 bg-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <Button onClick={() => setActive(active - 1)} icon="chevron-left" disabled={active <= 1} className={styleButton} classIcon={styleIcon} />
                <div className="flex items-center gap-3">
                    {Array.from({ length: pages }, (_, index) => {
                        const page = index + 1
                        const group = Math.floor((active - 1) / size)
                        const start = group * size + 1
                        const end = start + size - 1
                        const isVisible = page >= start && page <= end

                        return <button key={page} onClick={() => setActive(page)} className={`${active === page ? styleBulletActive : styleBullet} ${!isVisible ? "hidden" : ""}`}>{page}</button>
                    })}
                </div>
                <Button onClick={() => setActive(active + 1)} icon="chevron-right" disabled={active >= pages} className={styleButton} classIcon={styleIcon} />
            </div>
            <p className="text-gray-900">{(limit * active) - limit + 1}-{items.length < (limit * active) ? items.length : (limit * active)} sur {items.length}</p>
        </div> : null}
    </>
}

export default Pagination

const Button = ({ icon, className, classIcon, ...props }) => {
    return <button className={`flex items-center justify-center ${className ?? ""}`} {...props}>
        <Icon name={icon} fill="auto" className={classIcon} />
    </button>
}