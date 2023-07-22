import { Page } from '@/components/layout';
import React from 'react'
import { useSelector } from 'react-redux';


function Results() {
    const { answers, quizList } = useSelector((state) => state.quiz)
    console.log(answers);
    return (
        <Page>
            <div className="container">
                {
                    quizList.map((item, index) => (
                        <div key={index}>
                            <span>{index}.</span>
                            <span dangerouslySetInnerHTML={{ __html: item.question }}></span><br />
                            <span>{answers[index].value}</span>
                            <blockquote></blockquote>
                            <span>
                                {item.correct_answer === answers[index].value
                                    ? 'true' 
                                    : `false ${item.correct_answer}`}
                            </span>
                        </div>
                    ))
                }
            </div>
        </Page>
    )
}

export default Results
