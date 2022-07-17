import React, {useState} from 'react'


export default function Forms(props) {
    const placeholder = "Enter text here...";
    const [text, setText] = useState("");
    const [spellCheck, setSpellCheck] = useState(false);
    const enableSpellCheck = () => {
        setSpellCheck(!spellCheck);
    }
    const downloadText = () => {
        var newText = text.toLowerCase();
        setText(newText);
    }
    const clearText = () => {
        setText("");
    }

    const HandleOnChange = (event) =>{
        console.log(event.nativeEvent.inputType);
        setText(event.target.value);
        
        if(text.length>499){
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
                <textarea className={`form-control bg-${props.mode} text-${props.mode === 'dark' ? 'light' : 'dark'}`} placeholder={placeholder} spellCheck={spellCheck} onChange={HandleOnChange} id="exampleFormControlTextarea1" rows="10"></textarea>
            </div>
            <div>(This box only recieves input of less than 500 chrancters)</div>
            <button className="btn btn-primary button-custom" type="submit" onClick={enableSpellCheck}>
                Spell Check
            </button>
            <button className="btn btn-success button-custom" type="submit" onClick={downloadText}>
                Download
            </button>
            <button className="btn btn-danger button-custom" type="submit" onClick={clearText}>
                Clear
            </button>
            <div>
                <h1>The text summary</h1>
                <ul>
                    <li>The number of paragraphs are: {text.length === 0 ? 0 : text.split('\n').length} </li>
                    <li>The number of words are: {text.length === 0 ? 0 : text.split(' ').length}</li>
                    <li>Estimated time to read this paragraph is {time_calculate(text.length)}.</li>
                </ul>
            </div>
        </div>
    )
}
