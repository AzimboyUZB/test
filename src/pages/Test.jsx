import { Page } from '@/components/layout'
import React, { useEffect, useRef, useState } from 'react'
import { shuffleArr } from '@/helpers/helpers';
import QuestionList from '@/components/QuestionList';
import { useDispatch, useSelector } from 'react-redux';
import { setAnswers } from '@/redux/slice/QuizSlice';
import { ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';

function Test() {
    const [count, setCount] = useState(0)
    const router = useRouter()
    const { quizList, loading, answers: newAnswers, quizLength } = useSelector((state) => state.quiz)
    const dispatch = useDispatch()

    const answers = shuffleArr([
        ...quizList[count]?.incorrect_answers,
        quizList[count].correct_answer,
    ])
    const form = useRef()
    const handleSubmit = (e) => {
        e.preventDefault()
        let answer = {
            id: count,
        }
        for (let i = 0; i < answers.length; i++) {
            if (e.target.elements[i].checked) {
                answer.value = e.target.elements[i].value
                e.target.elements[i].checked = false
            }
        }

        if (!answer.value) {
            return alert('Javobni tanlang')
        }
        dispatch(setAnswers(answer))

        if (count === quizLength) {
            router.push({ pathname: '/Results' })
        } else {
            setCount(count + 1)
        }
    }

    useEffect(() => {
        window.onbeforeunload = () => 'if you leave this page'
    }, [])


    const handleClickBack = (e) => {
        for(let i = 0; i < answers.length; i++) {
            if (form.current.elements[i].value == newAnswers[count - 1].value) {
                form.current.elements[i].checked = true
            }
        }
        
        setCount(count + 1)
    }
    return (
        <Page>
            <div className='test'>
                <div className="container-test">
                    {loading ? (
                        <h3>Loading...</h3>
                    ) : (
                        <div>
                            <div className="test-title">
                                <h4
                                    dangerouslySetInnerHTML={{ __html: quizList[count]?.question }}
                                ></h4>
                            </div>
                            <form className='form' onSubmit={handleSubmit} ref={form}>
                                <QuestionList list={answers} number={`${count}/9`} />
                                <div className="box-btn-next">
                                    {count > 0 ?
                                        (<button className='btn-back-next' type='button' onClick={handleClickBack}>
                                            <ArrowLeftOutlined />Back
                                        </button>)
                                        : null}
                                    <button
                                        className='btn-back-next'
                                        type="submit">{count === quizLength ? "Finish" : "Next"}
                                        {count === quizLength ? null : <ArrowRightOutlined />}
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </Page>
    )
}

export default Test
