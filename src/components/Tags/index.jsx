import React from 'react'
// faire un map sur tags et pour chaque tag on affiche un <p>
function Tags({ tags }) {
    return (
        <div>
            <p className="tag">{tags}</p>
        </div>
    )
}

export default Tags
