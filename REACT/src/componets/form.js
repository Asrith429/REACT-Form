import React from 'react'

export default function form() {
  return (
    <div className='border' >
        <form>
            <div className='head'>
                <h1>FORM</h1>
            </div>

            <div>
                <label htmlFor='taid'> <b>TA ID:</b></label>
                <input type='text' id='taid'/>
                <br/> <br/>
            </div>

            <div>
                <label htmlFor='taname'> <b>TA NAME:</b></label>
                <input type='text' id='taname'/>
                <br/> <br/>
            </div>

            <div>
                <label htmlFor='intro'> <b>INTRODUCTION:</b></label>
                <input type='text' id='intro'/>
                <br/> <br/>
            </div>

            <div>
            <label htmlFor='goals'> <b> GOALS:</b></label>
            <input type='text' id='goals'/> &nbsp;
            <button>ADD FIELD!</button>&nbsp;
            <button> REMOVE..</button>
            <br/>  <br/>
            </div>

            <div>
            <label htmlFor='materials'><b>MATERIALS:</b></label>
            <input type='text' id='materials'/>&nbsp;
            <button> ADD FIELD!</button>&nbsp;
            <button> REMOVE..</button>
            <br/> <br/>
            </div>  


            <div>
            <label htmlFor='inst'> <b>INSTRUCTIONS:</b></label>
            <input type='text' id='inst'/>&nbsp;
            <button> ADD FIELD!</button>&nbsp;
            
            <button> REMOVE..</button>
            <br/>  <br/>
            </div>

            <div>
            <label htmlFor='tip'> <b>TIPS:</b></label>
            <input type='text' id='tip'/>&nbsp;
            <button> ADD FIELD!</button>&nbsp;
            
            <button> REMOVE..</button>
            <br/>  <br/>
            </div>

            <div>
            <label htmlFor='ass'> <b>ASSESSMENT:</b></label>
            <input type='text' id='ass'/>&nbsp;
            <button> ADD FIELD!</button>&nbsp;
            
            <button> REMOVE..</button>
            <br/>  <br/>
            </div>

            <div>
            <label htmlFor='ext'> <b>EXTENSIONS:</b></label>
            <input type='text' id='ext'/>&nbsp;
            <button>ADD FIELD!</button>&nbsp;
            
            <button> REMOVE..</button>
            <br/>  <br/>
            </div>

            <div>
            <label htmlFor='res'> <b>RESOURCES:</b></label>
            <input type='text' id='res'/>&nbsp;
            <button> ADD FIELD!</button>&nbsp;
        
            <button> REMOVE..</button>
            <br/>  <br/>
            </div>

            <button> RESET..</button>
            <br/>  <br/>

            <button> SUBMIT...!!!</button>
            

        </form>
      
    </div>
  )
}
