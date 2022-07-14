import React, {useState} from 'react'


export default function Forms(props) {
    const [text, setText] = useState("Enter text here.....");

    const HandleOnClick = () => {
        var newText = text.toUpperCase();
        setText(newText);
    }
    const HandleOnClick_2 = () => {
        var newText = text.toLowerCase();
        setText(newText);
    }
    const HandleOnClick_3 = () => {
        setText("");
    }

    const HandleOnChange = (event) =>{
        console.log(event.nativeEvent.inputType);
        setText(event.target.value);
        
        if(text.length>349){
            if(event.nativeEvent.inputType === "deleteContentBackward"){
                setText(event.target.value);
            }
            else{ 
                restrict();
            }
        }
        
    }
    const restrict = () => {
        setText(text);  
    }
    const time_calculate = (x) => {
        x = (x/10)*3;
        var minutes = 0;
        var ans = "";
        var seconds = 0;
        while(x>0){
            seconds++;
            if(seconds>=60){
                minutes++;
                seconds = 0;
            }
            x--;
        }
        console.log(x)
        if (minutes>0){
            ans =  minutes + " mins " + seconds + " sec";
        }
        else{
            ans =  seconds + " sec";
        }
        return ans;
    }
    return (

        <div className='forms'>
            
            <div className="mb-3 my-5">
                <h1>{props.heading}</h1>
                <textarea className={`form-control bg-${props.mode} text-${props.mode ==='dark'?'light':'dark'}`} value = {text} onChange = {HandleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <div className="containerx">(This box only recieves input of less than 350 chrancters)</div>
            <div className="btn btn-dark my-1" type = "submit" onClick={HandleOnClick}>
                Upper Case
            </div>
            <br />
            <div className="btn btn-success second_button my-1" type = "submit" onClick={HandleOnClick_2}>
                Lower case
            </div>
            <br />
            <div className="btn btn-danger  my-1" type = "submit" onClick={HandleOnClick_3}>
                Clear
            </div>
            
            <div className="container my-3">
                <h1>The text summary</h1>
                <ul> 
                    <li>The length of the text is {text.length} </li>
                    <li>The number of words are {text.split(" ").length}</li>
                    <li>Estimated time to read this paragraph is {time_calculate(text.length)}.</li>
                </ul>
            </div>

        </div>
    )
}
