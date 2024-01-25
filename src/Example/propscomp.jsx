import React from "react"
const Propscomp=(props) => {
    const Styleadd={
            color: "red",
            backgroundColor: "black"
    }
    return(
        
        <div>
            <h1 style={Styleadd}>
                this is props{props.name}
            </h1>
        </div>
    )
}

export default Propscomp


