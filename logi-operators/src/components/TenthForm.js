import React, { useRef } from 'react'

function TenthForm() {
     let firstnameRef = useRef();
     let lastnameRef = useRef();

     let telInputRef = useRef();
     let hinInputRef = useRef();
     let enlInputRef = useRef();
     let mathsInputRef = useRef();
     let sciInputRef = useRef();
     let socInputRef = useRef();

     let resultLabelRef = useRef();
     let calculateBtnRef =useRef();

     let telSpanResultRef = useRef();
     let hinSpanResultRef = useRef();
     let enlSpanResultRef = useRef();
     let mathsSpanResultRef = useRef();
     let sciSpanResultRef = useRef();
     let socSpanResultRef = useRef();

     let firstnameOnFocus = ()=>{ firstnameRef.current.style.backgroundColor = "yellow"; }
     let firstnameOnChange = ()=>{ firstnameRef.current.style.backgroundColor = "#5CB338"; }
     let firstnameOnBlur = ()=>{ firstnameRef.current.style.backgroundColor = ""; }
     let lastnameOnFocus = ()=>{ lastnameRef.current.style.backgroundColor = "yellow"; }
     let lastnameOnChange = ()=>{ lastnameRef.current.style.backgroundColor = "#5CB338"; }
     let lastnameOnBlur = ()=>{ lastnameRef.current.style.backgroundColor = ""; }

     let telOnFocus = ()=> { telInputRef.current.style.backgroundColor = "yellow"; }
     let telOnChange = ()=> {
      telInputRef.current.style.backgroundColor = "#5CB338"

                let marks = telInputRef.current.value;
                if(marks >=0 && marks <=100){

                  if(marks >= 35){
                    telSpanResultRef.current.innerHTML = "Pass😎";
                    telSpanResultRef.current.style.backgroundColor = "green"
                  }else{
                    telSpanResultRef.current.innerHTML = "Fail😢";
                    telSpanResultRef.current.style.backgroundColor = "red"
                  }
                  calculateBtnRef.current.style.display = "inline-block"

                }else{
                  telSpanResultRef.current.innerHTML = "Invalid😦"
                  telSpanResultRef.current.style.backgroundColor = "#7E5CAD"
                  calculateBtnRef.current.style.display = "none"
                }
     }
     let telOnBlur = ()=> { telInputRef.current.style.backgroundColor = "";}
     let hinOnFocus = ()=>{ hinInputRef.current.style.backgroundColor = "yellow";}
     let hinOnChange = ()=>{ 
      hinInputRef.current.style.backgroundColor = "#5CB338";

                let marks = hinInputRef.current.value;

                if(marks >=0 && marks <=100){

                  if(marks >= 35){
                    hinSpanResultRef.current.innerHTML = "Pass😎"
                    hinSpanResultRef.current.style.backgroundColor = "green"
  
                  }else{
                    hinSpanResultRef.current.innerHTML = "Fail😢"
                    hinSpanResultRef.current.style.backgroundColor = "red"
                  }
                  calculateBtnRef.current.style.display = "inline-block"

                }else{
                  hinSpanResultRef.current.innerHTML = "Invalid😦"
                  hinSpanResultRef.current.style.backgroundColor = "#7E5CAD"
                  calculateBtnRef.current.style.display = "none"}
     }
     let hinOnBlur = ()=>{ hinInputRef.current.style.backgroundColor = "";}
     let enlOnFocus = ()=>{ enlInputRef.current.style.backgroundColor = "yellow";}
     let enlOnChange = ()=>{ 
      enlInputRef.current.style.backgroundColor = "#5CB338";

                let marks = enlInputRef.current.value;

                if(marks >= 0 && marks <=100){

                  if(marks >= 35){
                    enlSpanResultRef.current.innerHTML = "Pass😎"
                    enlSpanResultRef.current.style.backgroundColor = "green"
  
                  }else{
                    enlSpanResultRef.current.innerHTML = "Fail😢"
                    enlSpanResultRef.current.style.backgroundColor = "red"
                  }
                  calculateBtnRef.current.style.display = "inline-block"
                }else{
                  enlSpanResultRef.current.innerHTML = "Invalid😦"
                  enlSpanResultRef.current.style.backgroundColor = "#7E5CAD"
                  calculateBtnRef.current.style.display = "none"}
     }
     let enlOnBlur = ()=>{ enlInputRef.current.style.backgroundColor = "";}
     let mathsOnFocus = ()=>{ mathsInputRef.current.style.backgroundColor = "yellow";}
     let mathsOnChange = ()=>{ 
      mathsInputRef.current.style.backgroundColor = "#5CB338";

                let marks = mathsInputRef.current.value;
                if(marks >=0 && marks <=100){

                  if(marks >= 35){
                    mathsSpanResultRef.current.innerHTML = "Pass😎"
                    mathsSpanResultRef.current.style.backgroundColor = "green"
                  }else{
                    mathsSpanResultRef.current.innerHTML = "Fail😢"
                    mathsSpanResultRef.current.style.backgroundColor = "red"
                  }
                  calculateBtnRef.current.style.display = "inline-block"
                }else{
                  mathsSpanResultRef.current.innerHTML = "Invalid😦"
                  mathsSpanResultRef.current.style.backgroundColor = "#7E5CAD"
                  calculateBtnRef.current.style.display = "none"}
     }
     let mathsOnBlur = ()=>{ mathsInputRef.current.style.backgroundColor = "";}
     let sciOnFocus = ()=>{ sciInputRef.current.style.backgroundColor = "yellow";}
     let sciOnChange = ()=>{ 
      sciInputRef.current.style.backgroundColor = "#5CB338";

                let marks = sciInputRef.current.value;
                if(marks >=0 && marks <=100){
                  if(marks >= 35){
                    sciSpanResultRef.current.innerHTML = "Pass😎"
                    sciSpanResultRef.current.style.backgroundColor = "green"
                  }else{
                    sciSpanResultRef.current.innerHTML = "Fail😢"
                    sciSpanResultRef.current.style.backgroundColor = "red"
                  }
                  calculateBtnRef.current.style.display = "inline-block"
                }else{
                  sciSpanResultRef.current.innerHTML = "Invalid😦"
                  sciSpanResultRef.current.style.backgroundColor = "#7E5CAD"
                  calculateBtnRef.current.style.display = "none"}
     }
     let sciOnBlur = ()=>{ sciInputRef.current.style.backgroundColor = "";}
     let socOnFocus = ()=>{ socInputRef.current.style.backgroundColor = "yellow";}
     let socOnChange = ()=>{ 
      socInputRef.current.style.backgroundColor = "#5CB338";
                let marks = socInputRef.current.value;
                if(marks >=0 && marks <=100){
                  if(marks >= 35){
                    socSpanResultRef.current.innerHTML = "Pass😎"
                    socSpanResultRef.current.style.backgroundColor = "green"
                  }else{
                    socSpanResultRef.current.innerHTML = "Fail😢"
                    socSpanResultRef.current.style.backgroundColor = "red"
                  }
                  calculateBtnRef.current.style.display ="inline-block"
                }else{
                  socSpanResultRef.current.innerHTML = "Invalid😦"
                  socSpanResultRef.current.style.backgroundColor = "#7E5CAD"
                  calculateBtnRef.current.style.display = "none"}
     }
     let socOnBlur = ()=>{ socInputRef.current.style.backgroundColor = "";}
     let calculateResult =()=>{ 
      let firstname = firstnameRef.current.value;
                let lastname = lastnameRef.current.value;
                let telMarks = Number(telInputRef.current.value);
                let hinMarks = Number(hinInputRef.current.value);
                let enlMarks = Number(enlInputRef.current.value);
                let mathsMarks = Number(mathsInputRef.current.value);
                let sciMarks = Number(sciInputRef.current.value);
                let socmarks = Number(socInputRef.current.value);
                let result;

                let totalMarks = telMarks+hinMarks+enlMarks+mathsMarks+sciMarks+socmarks;

                if(telMarks >=35 && hinMarks >=35 && enlMarks >=35 && mathsMarks >=35 && 
                  sciMarks >=35 && socmarks >=35
                ){
                  result = "Passed"

                }else{
                  result = "Failed"
                  
                }
                resultLabelRef.current.innerHTML = `${firstname} ${lastname} ${result} in Tenth and Total Marks Are  ${totalMarks}.`
     }

  return (
    <div>
        <form>
          <fieldset>
          <legend>MarkSheet Form</legend>
            <div>
              <label>First Name</label>
              <input type='text' ref={firstnameRef} 
              onFocus={()=>{ firstnameOnFocus(); }}
              onChange={()=>{ firstnameOnChange(); }} 
              onBlur={()=>{ firstnameOnBlur(); }}></input>
            </div>
            <div>
              <label>Last Name</label>
              <input type='text' ref={lastnameRef}
              onFocus={()=>{ lastnameOnFocus(); }}
              onChange={()=>{ lastnameOnChange(); }} 
              onBlur={()=>{ lastnameOnBlur(); }}></input>
            </div>
            <div>
              <label>Telugu</label>
              <input type='number' ref={telInputRef} 
              onFocus={()=>{ telOnFocus(); }} 
              onChange={()=>{ telOnChange(); }} 
              onBlur={()=>{ telOnBlur(); }}></input>
              <span ref={telSpanResultRef}></span>
            </div>
            <div>
              <label>Hindi</label>
              <input type='number' ref={hinInputRef} 
              onFocus={()=>{ hinOnFocus(); }} 
              onChange={()=>{ hinOnChange(); }} 
              onBlur={()=>{ hinOnBlur(); }}></input>
              <span ref={hinSpanResultRef}></span>
            </div>
            <div>
              <label>English</label>
              <input type='number' ref={enlInputRef}
              onFocus={()=>{ enlOnFocus(); }} 
              onChange={()=>{ enlOnChange(); }} 
              onBlur={()=>{ enlOnBlur(); }}></input>
              <span ref={enlSpanResultRef}></span>
            </div>
            <div>
              <label>Mathematics</label>
              <input type='number' ref={mathsInputRef}
              onFocus={()=>{ mathsOnFocus(); }} 
              onChange={()=>{ mathsOnChange(); }} 
              onBlur={()=>{ mathsOnBlur(); }}></input>
              <span ref={mathsSpanResultRef}></span>
            </div>
            <div>
              <label>Science</label>
              <input type='number' ref={sciInputRef}
              onFocus={()=>{ sciOnFocus(); }} 
              onChange={()=>{ sciOnChange(); }} 
              onBlur={()=>{ sciOnBlur(); }}></input>
              <span ref={sciSpanResultRef}></span>
            </div>
            <div>
              <label>Social</label>
              <input type='number' ref={socInputRef}
              onFocus={()=>{ socOnFocus(); }} 
              onChange={()=>{ socOnChange(); }} 
              onBlur={()=>{ socOnBlur(); }}></input>
              <span ref={socSpanResultRef}></span>
            </div>
            <div className='buttonDiv'>
              <button className='innerbutton'  ref={calculateBtnRef} type="button" onClick={()=>{ calculateResult(); }}>
                Calculate</button>
                </div>
            <div>    
              <label className='innerLabel' ref={resultLabelRef} >Please Enter Your Marks and Calculate</label>
            </div>
            </fieldset>
        </form>
    </div>
  )
}

export default TenthForm
