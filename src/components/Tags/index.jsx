import React from 'react'
import '../../styles/sass/main.scss'

function Tags({ tags }) {
    return (
        <div className="tag">
            {tags.map((tag) => (
                <p className="tag__name" key={tag}>
                    {tag}
                </p>
            ))}
        </div>
    )
}

export default Tags
