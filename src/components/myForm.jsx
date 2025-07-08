import { useState } from 'react'
import personal from '../assets/personal.png'
import school from '../assets/school.png'
import work from '../assets/work-history.png'
import expandMore from '../assets/expand-more.png';
import expandLess from '../assets/expand-less.png';


import '../styles/my_form.css';

const MyForm_gen = (props) => {

console.log('props: ',props);

    const [form, setForm] = useState('form_gen');
    const[name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [isShown, setIsShown] = useState(false);
   // const [isEdit, setIsEdit] = useState(false);

    const  toggleForm =() => {
        setIsShown(!isShown);
    };

    const isFormValid = () => {
    return name.length && email.length && mobile.length;
  };
    
  const handleNameChange= (e) => {
      e.preventDefault();
      setName(e.target.value);  
  };

  const handleEmailChange= (e) => {
    e.preventDefault();
    setEmail(e.target.value);    
  };

  const handleMobileChange= (e) => {
    e.preventDefault();
    setMobile(e.target.value);    
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    const formData = {
      name: name,
      email: email,
      mobile: mobile,
      form: form,
      isShown: isShown,
    };
    props.saveInputValue(formData);
    setIsShown(false);
  };

    return (
        <div className='my_form_general'>
          <div className="form-header">
          <div className="form-header-title">
          <img className="form-header-img" src={personal} />
          <p>General Information</p>
          <img
          onClick={toggleForm}
          src={isShown ? expandLess : expandMore}
          className="expand-icon"
          />
          </div>
        </div>
          {(isShown || props.isEditing) && (
          <form onSubmit={onSubmitForm}>
            <div>
                <div className="input-container">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  id="fullName"
                  value= {name} required minLength="2"
                  onChange={handleNameChange}
                />
              </div>
              <div className="input-container">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="input-container">
                <label htmlFor="mobile">Mobile Number</label>
                <input
                  type="text"
                  name="mobile"
                  placeholder="mobile no."
                  id="mobile"
                  value={mobile}
                  onChange={handleMobileChange}
                />
              </div>
            </div>
            <div className="form-buttons">
            <span></span>
            <button className="save-form" type="submit" disabled={!isFormValid()}>
              <span>
                Save
              </span>
            </button>
          </div>
            </form>
            )}
        </div>
    )
}


const MyForm_edu = (props) => {
    console.log('props: ',props);

    const [form, setForm] = useState('form_edu');
    const[schoolName, setSchoolName] = useState('');
    const [studyTitle, setStudyTitle] = useState('');
    const [studyDate, setStudyDate] = useState('');
    const [isShown, setIsShown] = useState(false);

    const toggleForm = () => {
        setIsShown(!isShown);
    };
    
    const isFormValid = () => {
    return schoolName.length && studyTitle.length && studyDate.length;
  };

  const handleSchoolNameChange= (e) => {
      e.preventDefault();
      setSchoolName(e.target.value);   
  };

  const handleStudyTitleChange= (e) => {
    e.preventDefault();
    setStudyTitle(e.target.value);   
  };

  const handleStudyDateChange= (e) => {
    e.preventDefault();
    setStudyDate(e.target.value);   
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    const formData = {
      name: schoolName,
      email: studyTitle,
      mobile: studyDate,
      form: form,
      isShown: isShown,
    };
    //props obj is saveInputValue: saveInputValuEdu
    props.saveInputValue(formData);
    setIsShown(false);
  };


    return (
        <div className='my_form_education'>
          <div className="form-header">
          <div className="form-header-title">
          <img className="form-header-img" src={school} />
          <p>Education Information</p>
          <img
          onClick={toggleForm}
          src={isShown ? expandLess : expandMore}
          className="expand-icon"
          />
          </div>
          </div>
          {(isShown || props.isEditing) && (
            <form onSubmit={onSubmitForm}>
            <div>
                <div className="input-container">
                <label htmlFor="schoolName">School Name</label>
                <input
                  type="text"
                  name="schoolName"
                  placeholder="Enter your school / colleg name"
                  id="schoolName"
                  value= {schoolName} required minLength="2"
                  onChange={handleSchoolNameChange}
                />
              </div>
              <div className="input-container">
                <label htmlFor="studyTitle">Study Title</label>
                <input
                  type="text"
                  name="studyTitle"
                  placeholder="Stuy Title"
                  id="studyTitle"
                  value={studyTitle}
                  onChange={handleStudyTitleChange}
                />
              </div>
              <div className="input-container">
                <label htmlFor="studyDate">Study </label>Date
                <input
                  type="text"
                  name="studyDate"
                  placeholder="Date of study"
                  id="studyDate"
                  value={studyDate}
                  onChange={handleStudyDateChange}
                />
              </div>
            </div>
            <div className="form-buttons">
            <span></span>
            <button className="save-form" type="submit" disabled={!isFormValid()}>
              <span>
                Save
              </span>
            </button>
          </div>
            </form>
            )}
        </div>
        
    )
}


const MyForm_exp = (props) => {
    console.log('props: ',props);

    const [form, setForm] = useState('form_exp');
    const[company, setCompany] = useState('');
    const [position, setPosition] = useState('');
    const [responsibilities, setResponsibilities] = useState('');
    const [isShown, setIsShown] = useState(false);

    const toggleForm = () => {
        setIsShown(!isShown);
    };
    
    const isFormValid = () => {
    return company.length && position.length && responsibilities.length;
  };

  const handleCompanyChange= (e) => {
      e.preventDefault();
      setCompany(e.target.value);   
  };

  const handlePositionChange= (e) => {
    e.preventDefault();
    setPosition(e.target.value);   
  };

  const handleResponsibilitiesChange= (e) => {
    e.preventDefault();
    setResponsibilities(e.target.value);   
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    const formData = {
      company: company,
      position: position,
      responsibilities: responsibilities,
      form: form,
      isShown: isShown,
    };
    //props obj is saveInputValue: saveInputValuExp
    props.saveInputValue(formData);
    setIsShown(false);
  };


    return (
        <div className='my_form_experience'>
          <div className="form-header">
          <div className="form-header-title">
          <img className="form-header-img" src={work} />
          <p>Experience Information</p>
          <img
          onClick={toggleForm}
          src={isShown ? expandLess : expandMore}
          className="expand-icon"
          />
          </div>
          </div>
          {(isShown || props.isEditing) && (
            <form onSubmit={onSubmitForm}>
            <div>
                <div className="input-container">
                <label htmlFor="company">Company Name</label>
                <input
                  type="text"
                  name="company"
                  placeholder="Enter your company name"
                  id="company"
                  value= {company} required minLength="2"
                  onChange={handleCompanyChange}
                />
              </div>
              <div className="input-container">
                <label htmlFor="position">Position Title</label>
                <input
                  type="text"
                  name="position"
                  placeholder="Position Title"
                  id="position"
                  value={position}
                  onChange={handlePositionChange}
                />
              </div>
              <div className="input-container">
                <label htmlFor="responsibilities">Responsibilities</label>
                <input
                  type="text"
                  name="responsibilities"
                  placeholder="Responsibilities"
                  id="responsibilities"
                  value={responsibilities}
                  onChange={handleResponsibilitiesChange}
                />
              </div>
            </div>
            <div className="form-buttons">
            <span></span>
            <button className="save-form" type="submit" disabled={!isFormValid()}>
              <span>
                Save
              </span>
            </button>
          </div>
            </form>
            )}
        </div>
        
    )
}

//export {MyForm_gen, MyForm_edu, MyForm_exp}
export {MyForm_gen, MyForm_edu, MyForm_exp}
