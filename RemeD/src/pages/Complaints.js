import React from 'react'
import { useState } from 'react'


const Complaints = () => {
    const [complain, setComplain] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (!complain) {
            alert('Please add complaint')
            return
        }
        //do sth
        setComplain('')

    }

    return (
        <div className='complaints-page'>
            <h1>Complaints Page</h1>
            <form onSubmit={() => { onSubmit() }}>
                <textarea className='area-box'
                    value={complain} onChange={(e) =>
                        setComplain(e.target.value)}
                    placeholder='Enter complains'>
                </textarea>

                <input type="submit" value="Send Complaint" className='btn btn-block' />
            </form>
        </div>
    )
}

export default Complaints
