import React from 'react'

const Button = ({tag, className, href, onClick, text}) => {
    if (tag === 'a') 
    return (
        <a className='' href=''>
            {text}
        </a>
    )
    if (tag === 'button')
    return (
        <button>
            {text}
        </button>
    )
}

export default Button;