import React from 'react'
import './index.css'
const Main = () => {
    return (
        <section className='mt-20 flex justify-center items-center'>
            <div className='flex flex-col border rounded-r-lg border-slate-500'>
                <input
                    type='text'
                    id='head'
                    onChange={(e) => e.target.value}
                    placeholder='type your head'
                    className='w-96 h-8 my-4 input color '
                />
                <input
                    id='task'
                    type='text'
                    onChange={(e) => e.target.value}
                    placeholder='type your task'
                    className='w-96 h-12 mb-4 input color'
                />
            </div>
        </section>
    )
}

export default Main