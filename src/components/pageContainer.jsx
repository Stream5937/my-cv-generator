import { useState } from 'react'
import { MyForm_gen,
         MyForm_edu,
         MyForm_exp
} from './myForm.jsx'
import RenderField from './RenderField.jsx'
import '../styles/page_container.css'
import editIcon from '../assets/edit-1.png'

function Page_Container (props) {

    const [form_gen, setFormGen] = useState('');
    const [form_edu, setFormEdu] = useState('');
    const [form_exp, setFormExp] = useState('');
    const [editFormGen , setEditFormGen] = useState(false);
    const [editFormEdu , setEditFormEdu] = useState(false);
    const [editFormExp , setEditFormExp] = useState(false);

    const editForm_gen = () => {
      console.log('edit clicked - editFormGen: ',editFormGen);
      setEditFormGen(!editFormGen);
   };

  const editForm_edu = () => {
      console.log('edit clicked - editFormEdu: ',editFormEdu);
      setEditFormEdu(!editFormEdu);
  };

  const editForm_exp = () => {
      console.log('edit clicked - editFormExp: ',editFormExp);
      setEditFormExp(!editFormExp);
  };

  const saveInputValue = (obj) => {
        setFormGen(obj);
        setEditFormGen(false);
  };

  const saveInputValueEdu = (obj) => {
        setFormEdu(obj);
        setEditFormEdu(false);
  };

  const saveInputValueExp = (obj) => {
        setFormExp(obj);
        setEditFormExp(false);
  };

  if(props.clearForm){
      console.log('clearForm -true: ', props.clearForm)
    }else{
      console.log('clearForm -false: ', props.clearForm)
    }

  return (
      <>
        <div className="basic-form-fill page_container">
           {!editFormGen && (
              <MyForm_gen 
                saveInputValue={saveInputValue}
                isEditing={editFormGen}
                infoToEdit={form_gen}
              />
            )}
            {editFormGen && !props.clearForm &&(
              <MyForm_gen 
                saveInputValue={saveInputValue}
                isEditing={editFormGen}
                infoToEdit={form_gen}
              />
            )}
            {editFormGen && props.clearForm && (
              <MyForm_gen 
                saveInputValue={saveInputValue ('')}
                isEditing={editFormGen}
                infoToEdit={form_gen}
              />
            )}
            {form_gen != '' && !props.clearForm && (
              <div className="basic-form-show">
                <div className="basic-form-general-info">
                  <RenderField props={form_gen} />
                </div>
                <div>
                <img
                      onClick={editForm_gen}
                      src={editIcon}
                      className="edit-form"
                  />
                </div>
              </div>
            )}
        </div>
        {!props.clearForm && (
            <div className="cv-show">
                  <div className="cv-section" id="cv-report">
                  <div className="cv-basic-info">
                    <RenderField props={form_gen}/>
                  </div>
                </div>
            </div>
          )
        }
        {props.clearForm && (
            <div className="cv-hide">
                  <div className="cv-section" id="cv-report">
                  <div className="cv-basic-info">
                    <RenderField props={''}/>
                  </div>
                </div>
            </div>
          )
        }

<div className="edu-form-fill page_container">
           {!editFormEdu && (
              <MyForm_edu 
                saveInputValue={saveInputValueEdu}
                isEditing={editFormEdu}
                infoToEdit={form_edu}
              />
            )}
            {editFormEdu && !props.clearForm &&(
              <MyForm_edu 
                saveInputValue={saveInputValueEdu}
                isEditing={editFormEdu}
                infoToEdit={form_edu}
              />
            )}
            {editFormEdu && props.clearForm &&(
              <MyForm_edu 
                saveInputValue={saveInputValueEdu('')}
                isEditing={editFormEdu}
                infoToEdit={form_edu}
              />
            )}
            {form_edu != '' && !props.clearForm && (
              <div className="edu-form-show">
                <div className="edu-form-education-info">
                  <RenderField props={form_edu} />
                </div>
                <div>
                <img
                      onClick={editForm_edu}
                      src={editIcon}
                      className="edit-form"
                  />
                </div>
              </div>
            )}
        </div>
        {!props.clearForm && (
		<div className="cv-show">
		    <div className="cv-section" id="cv-report">
		      <div className="cv-edu-info">
		        <RenderField props={form_edu}/>
		      </div>
		    </div>
		</div>
	    )
        }
        {props.clearForm && (
		<div className="cv-show">
		    <div className="cv-section" id="cv-report">
		      <div className="cv-edu-info">
		        <RenderField props={form_edu}/>
		      </div>
		    </div>
		</div>
	    )
        }

        <div className="exp-form-fill page_container">
           {!editFormExp && (
              <MyForm_exp 
                saveInputValue={saveInputValueExp}
                isEditing={editFormExp}
                infoToEdit={form_exp}
              />
            )}
            {editFormExp && !props.clearForm &&(
              <MyForm_exp 
                saveInputValue={saveInputValueExp}
                isEditing={editFormExp}
                infoToEdit={form_exp}
              />
            )}
            {editFormExp && props.clearForm &&(
              <MyForm_exp 
                saveInputValue={saveInputValueExp('')}
                isEditing={editFormExp}
                infoToEdit={form_exp}
              />
            )}
            {form_exp != '' && !props.clearForm && (
              <div className="exp-form-show">
                <div className="exp-form-experience-info">
                  <RenderField props={form_exp} />
                </div>
                <div>
                <img
                      onClick={editForm_exp}
                      src={editIcon}
                      className="edit-form"
                  />
                </div>
              </div>
            )}
        </div>
        {!props.clearForm && (
		<div className="cv-show">
		    <div className="cv-section" id="cv-report">
		      <div className="cv-exp-info">
		        <RenderField props={form_exp}/>
		      </div>
		    </div>
		</div>
	    )
        }
        {props.clearForm && (
		<div className="cv-show">
		    <div className="cv-section" id="cv-report">
		      <div className="cv-exp-info">
		        <RenderField props={form_exp}/>
		      </div>
		    </div>
		</div>
	    )
        }

      </>
    )  
}

export default  Page_Container ;