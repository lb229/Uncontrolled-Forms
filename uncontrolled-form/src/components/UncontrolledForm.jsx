export function UncontrolledForm() {
  function handleUncontrolledSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target)
    const data = {
      username: formData.get('username'),
      password: formData.get('password'),
      checkbox: formData.get('rememberCheckbox') === 'on' ? true : false
    } 
    console.log('Form Data:', data);
    
    //reset form after being submitted
    event.target.reset();
  }

 
 

  return (
    <>
    <h2>Uncontrolled form</h2>
      <form onSubmit={handleUncontrolledSubmit}>
        <label>Username:</label>
        <input type="text" name="username" />
        <br />
        <br />
        <label>Password:</label>
        <input type="password" name="password" />
        <br />
        <br />
        <label>Do you want to be remembered:</label>
        <input type="checkbox" name="rememberCheckbox" />
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
     
    </>
  );
}
