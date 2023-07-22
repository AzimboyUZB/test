import React from 'react'

export default function QuestionList({ list, number }) {
    const handleClick = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <div className='box-btn'>
                {list.map((item, key) => (
                    <div key={key}>
                        <button className='btn-answers' onClick={handleClick} dangerouslySetInnerHTML={{ __html: item }}></button>
                    </div>
                ))}
            </div>
            <h4>{number}</h4>
        </>
    )
}
