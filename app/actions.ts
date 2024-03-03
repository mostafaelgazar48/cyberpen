 'use server'
export async function BookDemo(formData: FormData) {
    // ...
   
    const email = formData.get('email');
    const datetime = formData.get('datetime');
    console.log(email, datetime);
    
    //code to send email
    
  }