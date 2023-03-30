import React, {useState} from "react";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const handleSubmit = (event) => {
    console.log(formData);
    alert(formData?.name + "\n" + formData?.email + "\n" + formData?.subject + "\n" + formData?.message);
  }
  return (
    <section className="contact section-wrapper">
      <div className="heading-wrapper">
        <h2 className="section-heading">Contact Us</h2>
        <img src="/heading-logo.png" alt="heading-img" />
      </div>
      <div className="contact-item-wrapper">
        <form className="contact-item-list" onSubmit={handleSubmit}>
          <span>
            <input type="text" name="username" value={formData?.name} placeholder="Name" onChange={(event) => setFormData({...formData, name: event.target.value})}/>
          </span>
          <span>
            <input type="email" name="email" value={formData?.email} placeholder="Email" onChange={(event) => setFormData({...formData, email: event.target.value})}/>
          </span>
          <span>
            <input type="text" name="subject" value={formData?.subject} placeholder="Subject" onChange={(event) => setFormData({...formData, subject: event.target.value})}/>
          </span>
          <span>
            <textarea id="text" name="name" value={formData?.message} placeholder="Message" onChange={(event) => setFormData({...formData, message: event.target.value})}></textarea>
          </span>
          <span>
            <button type="submit">submit</button>
          </span>
        </form>
      </div>
    </section>
    
  );
};

export default Contact;

