import React from "react";

const Props = (props) => { //{nombre, edad} = props
    return (
        <div>
            <h1>Propiedades - Argumentos</h1>
            <p>
                {props.nombre} - {props.edad}
            </p>
            {props.children}
        </div>
    );
};

export default Props;
