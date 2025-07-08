import  {MyForm_gen, MyForm_edu, MyForm_exp}  from './myForm.jsx'

import '../styles/form.css';

function form_gen () { 
   return (
    <div className='comp_container'>
        <div>
            <MyForm_gen/>
        </div>   
    </div>
    );
}

function form_edu () {
   return (
        <div className='comp_container'>
            <MyForm_edu/>
        </div>
    );
}

function form_exp () {
   return (
        <div className='comp_container'>
            <MyForm_exp/>
        </div>
    );
}


export  {form_gen, form_edu, form_exp};
