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
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h2 style="color: #2c3e50; margin-top: 0;">New Contact Form Submission</h2>
        <p style="margin-bottom: 0; color: #666;">You have received a new inquiry from your website contact form.</p>
      </div>
      
      <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px; margin-bottom: 20px;">
        <h3 style="color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 10px;">Contact Information</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; width: 30%;">Full Name:</td>
            <td style="padding: 8px 0;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Email Address:</td>
            <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #3498db; text-decoration: none;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Phone Number:</td>
            <td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #3498db; text-decoration: none;">${phone}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Service Requested:</td>
            <td style="padding: 8px 0;">${service}</td>
          </tr>
        </table>
      </div>
      
      <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px; margin-bottom: 20px;">
        <h3 style="color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 10px;">Message Details</h3>
        <div style="background-color: #f8f9fa; padding: 15px; border-radius: 4px; border-left: 4px solid #3498db;">
          <p style="margin: 0; white-space: pre-wrap;">${message}</p>
        </div>
      </div>
      
      <div style="background-color: #e8f4fd; padding: 15px; border-radius: 8px; border-left: 4px solid #3498db;">
        <p style="margin: 0; color: #2c3e50; font-size: 14px;">
          <strong>Next Steps:</strong> Please respond to this inquiry within 24 hours to maintain excellent customer service standards.
        </p>
      </div>
      
      <hr style="border: none; border-top: 1px solid #e9ecef; margin: 30px 0;">
      
      <div style="text-align: center; color: #666; font-size: 12px;">
        <p style="margin: 0;">This email was automatically generated from the contact form on the Spectrum Legal Solutions website.</p>
        <p style="margin: 5px 0 0 0;">Spectrum Legal Solutions | Professional Legal Services</p>
        <p style="margin: 5px 0 0 0;">
          <a href="mailto:info@spectrumlegal.co" style="color: #3498db; text-decoration: none;">info@spectrumlegal.co</a>
        </p>
      </div>
    </body>
    </html>
  `;
};
