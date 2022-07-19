import React, {useState} from 'react'


var temp = 0;

export default function Forms(props) {
    const placeholder = "Enter text here...";
    const [text, setText] = useState("");
    const [spellCheck, setSpellCheck] = useState(false);
    const enableSpellCheck = () => {
        setSpellCheck(!spellCheck);
        console.log("spell clicked", spellCheck)
    };
    const downloadText = (filename, content) => {
    
        const element = document.createElement('a');
        const blob = new Blob([content], { type: 'plain/text' });
        const fileUrl = URL.createObjectURL(blob);
        element.setAttribute('href', fileUrl);
        element.setAttribute('download', filename);
        element.style.display = 'none';
        document.body.appendChild(element);
        if(temp === 0)
        element.click();
        document.body.removeChild(element);  
        console.log("downloaded")
        temp = 1;
    
    };
    window.onload = () => {
        document.getElementById('download').
        addEventListener('click', e => {

          var filename = document.getElementById('name_id').value;
          filename = filename + ".txt";
          var content = document.getElementById('title_id').value;
          content = content + "\n \n \n"
          content = content + document.getElementById('para_id').value;
        //   console.log(document.getElementById('title_id').value)
          
          if (filename && content) {
            temp = 0;
            downloadText(filename, content);
          }
          console.log(filename, content)
        });
      };
    const clearText = () => {
        document.getElementById('para_id').value = "";
        document.getElementById('para_id').placeholder = placeholder;
    };

    const HandleOnChange = (event) =>{
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
        x = (x/50)*3;
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
                <textarea id ="title_id" className={`form-control bg-${props.mode} text-${props.mode === 'dark' ? 'light' : 'dark'}`} placeholder={`Title`} rows="1"></textarea>
            <br />
                <h3>{props.heading}</h3>
            <textarea className={`form-control bg-${props.mode} text-${props.mode === 'dark' ? 'light' : 'dark'}`} placeholder={`${placeholder}`} spellCheck={spellCheck} onChange={HandleOnChange} id="para_id" rows="10"></textarea>
            </div>
            <input className={`form-control bg-${props.mode} text-${props.mode === 'dark' ? 'light' : 'dark'} w-25`} id = "name_id" type="text" placeholder=" ex. abc"/>
            <br />  
            <div>(This box only recieves input of less than 500 chrancters)</div>
            <button className="btn btn-success button-custom" type="submit" onClick={enableSpellCheck}>
                Spell Check
            </button>
            <button className="btn btn-danger button-custom" type="submit" onClick={clearText}>
                Clear
            </button>
            <button className="btn btn-primary button-custom" id = "download" type="submit" onClick={downloadText}>
                Download
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
