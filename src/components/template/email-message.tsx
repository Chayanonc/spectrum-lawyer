export const EmailTemplate = ({
  name,
  email,
  service,
  phone,
  message,
}: {
  name: string;
  email: string;
  service: string;
  phone: string;
  message: string;
}) => {
  return `
    <div>
      <h2>New Contact Form Submission</h2>
      
      <h3>Contact Details:</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Service Requested:</strong> ${service}</p>
      
      <h3>Message:</h3>
      <p>${message}</p>
      
      <hr/>
      <p>This email was sent from the contact form on Spectrum Legal website.</p>
    </div>
  `;
};
