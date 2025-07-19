import { Resend } from 'resend';

// Direct test with your API key
const resend = new Resend('re_XzcqVNwT_7CA8WS5NgxVp1dX79TowURDG');

async function sendTestEmail() {
  try {
    console.log('🚀 Sending test email to askforquote@xcontechnologies.com...');
    
    const result = await resend.emails.send({
      from: 'XCon Technologies <onboarding@resend.dev>',
      to: 'askforquote@xcontechnologies.com',
      subject: '🧪 Test Email from XCon Technologies Website',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #7CB342; border-bottom: 2px solid #7CB342; padding-bottom: 10px;">
            ✅ Email System Test - SUCCESS!
          </h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">🎉 Great News!</h3>
            <p>Your XCon Technologies website email system is working perfectly!</p>
            <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
            <p><strong>Test Type:</strong> Direct Resend API Test</p>
          </div>
          
          <div style="background-color: #7CB342; color: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: white;">📋 What This Means:</h3>
            <ul style="line-height: 1.8;">
              <li>✅ Contact form emails will be delivered</li>
              <li>✅ Quote request emails will be delivered</li>
              <li>✅ Consultation form emails will be delivered</li>
              <li>✅ Customer auto-replies will be sent</li>
            </ul>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 14px;">
            <p><strong>From:</strong> XCon Technologies Website</p>
            <p><strong>Powered By:</strong> Resend Email Service</p>
            <p><strong>Sent:</strong> ${new Date().toISOString()}</p>
          </div>
        </div>
      `
    });

    console.log('✅ Test email sent successfully!');
    console.log('📧 Email ID:', result.data?.id);
    console.log('📬 Delivered to: askforquote@xcontechnologies.com');
    return result;
    
  } catch (error) {
    console.error('❌ Test email failed:', error);
    throw error;
  }
}

// Run the test
sendTestEmail()
  .then(() => {
    console.log('🎉 Email test completed successfully!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('💥 Email test failed:', error);
    process.exit(1);
  });