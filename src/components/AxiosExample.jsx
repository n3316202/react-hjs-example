import axios from 'axios'
import React from 'react'
import { useState } from 'react'

//https://initstory.tistory.com/61
//https://jsonplaceholder.typicode.com/
//https://velog.io/@dltmdwls15/Axiospost-jsonplaceholder-post-%EC%97%B0%EC%8A%B5
const AxiosExample = () => {
    const [data, setData] = useState([])

    const getClick = () => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                //handle 성공 했을때
                setData(res.data)
            })
            .catch(function (error) {
                //handle error
                console.log(error)
            })
            .then(function () {
                console.log('무조건 실행')
            })
    }

    const postClick = () => {
        axios
            .post('https://jsonplaceholder.typicode.com/posts', {
                userId: 11,
                id: 101,
                body: 'test body',
                title: 'test title',
            })
            .then((res) => console.log(res.data))
    }

    return (
        <div>
            <h2>API 연습</h2>
            <div>
                <button onClick={getClick}>Get</button>
                <button onClick={postClick}>Post</button>
            </div>
            {data.map((v, i) => {
                return (
                    <>
                        <div key={i}>
                            <h3>{v.title}</h3>
                            <div>
                                userId = {v.userId}, id = {v.id}
                            </div>
                            <div>{v.body}</div>
                        </div>
                        <hr></hr>
                    </>
                )
            })}
        </div>
    )
}

export default AxiosExample
