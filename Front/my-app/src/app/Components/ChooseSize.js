import React from 'react'
import { useState } from 'react'

const ChooseSize = () => {

    const [small, setsamll] = useState("")
    const [medium, setmedium] = useState("")
    const [large, setlarge] = useState("")
    const [xl, setxl] = useState("")
    const [xxl, setxxl] = useState("")


    return (
        <div>
            <p style={{ fontSize: "15px" }}>Size:{null} </p>

            {/* <form style={{ fontSize: "20px" }}>
                <input type={"radio"} id="small" name='a' value={small} onChange={(e) => setsamll(e.target.value)} />
                <label for="small">S</label>{"    "}
                <input type={"radio"} id="medium" name='a' value={medium} onChange={(e) => setmedium(e.target.value)} />
                <label for="medium">M</label>{"    "}
                <input type={"radio"} id="large" name='a' value={large} onChange={(e) => setlarge(e.target.value)} />
                <label for="large">L</label>{"    "}
                <input type={"radio"} id="large" name='a' value={xl} onChange={(e) => setxl(e.target.value)} />
                <label for="large">XL</label>{"    "}
                <input type={"radio"} id="large" name='a' value={xxl} onChange={(e) => setxxl(e.target.value)} />
                <label for="large">XXL</label>
            </form> */}
           
            {/* <button style={{ fontSize: "12px" }} onClick={() => setCount(Quantitycount)}>
                Add
            </button> */}
        </div>
    )
}

export default ChooseSize