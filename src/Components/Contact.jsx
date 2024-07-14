function Contact()
{
    return(
      <>
      {/* Contact */}
      <section id='Contact'>

<form className='form-control'>
  <label htmlFor="your name">Your Name(required)</label>
  <input type="text" />
  <br />
  <label htmlFor="your email">Your Email(required)</label>
  <input type="email" name="email" />
   <br />
  <label htmlFor="Subject"> Subject(required)</label>
    <input type="text"/> <br />
    <br />
   <label htmlFor="your-Message" id='label09'>Your Message </label> 
  <textarea name="" id="" cols="30" rows="10"></textarea> <br />

  <button className='btn btn-primary'>send</button>
</form>
</section>
</>
);
}
export default Contact;