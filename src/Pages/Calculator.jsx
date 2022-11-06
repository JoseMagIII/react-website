import React, {useState, useEffect} from 'react';
import WebFont from 'webfontloader';

const center = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
}

const calculatorBase = {
    height: '70vh',
    width: '50vh',
    backgroundColor: 'Gray'
}

const resultBox = {
    height: '10vh',
    width: '45vh',
    margin: '20px',
    backgroundColor: 'Green'

}

const textStyle = {
    fontFamily: 'Orbitron',
    fontSize: '7vw'
    
}

const buttonsBase = {
    height: '53vh',
    width: '45vh',
    margin: '20px',
    backgroundColor: 'Black',
    padding: '20px',
    justifyContent: 'space-evenly'
    
}

const buttons = {
    height: '9vh',
    width: '9vh',
    margin: '4px'
}

const Render = () => {

    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Orbitron']
          }
        });
       }, []);


    return(
        <div style = {center}>

            <div style = {calculatorBase}> 

                <div style = {resultBox} className="d-flex align-items-center"> 
                    <p style = {textStyle}>0</p>
                </div>           

                <div style = {buttonsBase}>
                    <button type="button" class="btn btn-secondary" style = {buttons}>1</button>
                    <button type="button" class="btn btn-secondary" style = {buttons}>2</button>
                    <button type="button" class="btn btn-secondary" style = {buttons}>3</button>
                    <button type="button" class="btn btn-secondary" style = {buttons}>+</button>
                    <button type="button" class="btn btn-secondary" style = {buttons}>4</button>
                    <button type="button" class="btn btn-secondary" style = {buttons}>5</button>
                    <button type="button" class="btn btn-secondary" style = {buttons}>6</button>
                    <button type="button" class="btn btn-secondary" style = {buttons}>-</button>
                    <button type="button" class="btn btn-secondary" style = {buttons}>7</button>
                    <button type="button" class="btn btn-secondary" style = {buttons}>8</button>
                    <button type="button" class="btn btn-secondary" style = {buttons}>9</button>
                    <button type="button" class="btn btn-secondary" style = {buttons}>x</button>
                    <button type="button" class="btn btn-secondary" style = {buttons}>0</button>
                    <button type="button" class="btn btn-secondary" style = {buttons}>.</button>
                    <button type="button" class="btn btn-secondary" style = {buttons}>c</button>
                    <button type="button" class="btn btn-secondary" style = {buttons}>/</button>
                    <button type="button" class="btn btn-secondary" style = {{
                        height: '9vh',
                        width: '39vh',
                        margin: '4px'
                    }}>ENTER</button>
                </div>
                
            </div>

        </div>

    )
}

export default Render;