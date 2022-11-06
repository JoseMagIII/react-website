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
    backgroundColor: 'Gray',
}

const resultBox = {
    height: '10%',
    width: '90%',
    margin: '4%',
    backgroundColor: 'Green'

}

const textStyle = {
    fontFamily: 'Orbitron',
    fontSize: '400%'
    
}

const buttonsBase = {
    height: '80%',
    width: '90%',
    margin: '3%',
    backgroundColor: 'Black',
    padding: '1%',
    justifyContent: 'space-evenly',
    
}

const buttons = {
    height: '17%',
    width: '22%',
    margin: '1%'
}



const Render = () => {

    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Orbitron']
          }
        });
       }, []);

    const [firstNum, setfirstNum] = useState('');

    const handleClick = (event) => {
        //alert(event.target.innerText);    // Click Me
        setfirstNum(firstNum.concat(event.target.innerText));
    }

    return(
        <>
        <meta http-equiv='cache-control' content='no-cache'></meta>
        <meta http-equiv='expires' content='0'></meta>
        <meta http-equiv='pragma' content='no-cache'></meta>
        
        <div style = {center}>

            <div style = {calculatorBase}> 

                <div style = {resultBox} className="d-flex align-items-center"> 
                    <p style = {textStyle}>{firstNum}</p>
                </div>           

                <div style = {buttonsBase}>
                    <button onClick={handleClick} type="button" class="btn btn-secondary" style = {buttons}>1</button>
                    <button onClick={handleClick} type="button" class="btn btn-secondary" style = {buttons}>2</button>
                    <button onClick={handleClick} type="button" class="btn btn-secondary" style = {buttons}>3</button>
                    <button type="button" class="btn btn-secondary" style = {buttons}>+</button>
                    <button onClick={handleClick} type="button" class="btn btn-secondary" style = {buttons}>4</button>
                    <button onClick={handleClick} type="button" class="btn btn-secondary" style = {buttons}>5</button>
                    <button onClick={handleClick} type="button" class="btn btn-secondary" style = {buttons}>6</button>
                    <button type="button" class="btn btn-secondary" style = {buttons}>-</button>
                    <button onClick={handleClick} type="button" class="btn btn-secondary" style = {buttons}>7</button>
                    <button onClick={handleClick} type="button" class="btn btn-secondary" style = {buttons}>8</button>
                    <button onClick={handleClick} type="button" class="btn btn-secondary" style = {buttons}>9</button>
                    <button type="button" class="btn btn-secondary" style = {buttons}>x</button>
                    <button onClick={handleClick} type="button" class="btn btn-secondary" style = {buttons}>0</button>
                    <button type="button" class="btn btn-secondary" style = {buttons}>.</button>
                    <button type="button" class="btn btn-secondary" style = {buttons}>c</button>
                    <button type="button" class="btn btn-secondary" style = {buttons}>/</button>
                    <button type="button" class="btn btn-secondary" style = {{
                        height: '20%',
                        width: '94%',
                        margin: '4px'
                    }}>ENTER</button>
                </div>
                
            </div>

        </div>
        </>

    )
}

export default Render;