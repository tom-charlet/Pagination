const Icon = ({ name, fill, stroke, ...props }) => {

    switch (name) {
        case 'chevron-left':
            return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M11.6665 15L6.6665 10L11.6665 5L12.8332 6.16667L8.99984 10L12.8332 13.8333L11.6665 15Z" fill={fill ?? "#838B91"} />
            </svg>
        case 'chevron-right':
            return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10.4998 10L6.6665 6.16667L7.83317 5L12.8332 10L7.83317 15L6.6665 13.8333L10.4998 10Z" fill={fill ?? "#838B91"} />
            </svg>
        default: return false
    }
}

export default Icon