'use server'

export async function submitContact(formData: FormData) {
  // Honeypot protection
  const honeypot = formData.get('website')
  if (honeypot) {
    // If honeypot field is filled, it's likely a bot
    return { success: true } // Pretend success to avoid revealing the honeypot
  }
  
  // Basic rate limiting (in production, use Redis or similar)
  const clientIP = formData.get('clientIP') as string
  const timestamp = Date.now()
  
  // This would be implemented with proper rate limiting in production
  // For now, we'll just validate the form data
  
  // This would be implemented with Resend
  // For now, we'll simulate the email sending
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const company = formData.get('company') as string
  const country = formData.get('country') as string
  const budget = formData.get('budget') as string
  const serviceType = formData.get('serviceType') as string
  const service = formData.get('service') as string
  const message = formData.get('message') as string
  
  // Validate required fields
  if (!name || !email || !message || !serviceType) {
    return { success: false, error: 'Please fill in all required fields.' }
  }
  
  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { success: false, error: 'Please enter a valid email address.' }
  }
  
  // Determine subject line based on service type
  let subject = 'New Inquiry: General'
  if (serviceType === 'software') {
    subject = `New Software Inquiry: ${service || 'General'}`
  } else if (serviceType === 'creative') {
    subject = `New Creative Inquiry: ${service || 'General'}`
  } else if (serviceType === 'both') {
    subject = `New Combined Inquiry: ${service || 'General'}`
  }
  
  // Simulate email sending
  console.log('Sending email:', {
    name,
    email,
    company,
    country,
    budget,
    serviceType,
    service,
    message,
    subject,
    timestamp,
    clientIP
  })
  
  // In production, this would use Resend:
  // const resend = new Resend(process.env.RESEND_API_KEY)
  // await resend.emails.send({
  //   from: 'BrightCode <contact@brightcode.com>',
  //   to: process.env.CONTACT_TO!,
  //   subject: subject,
  //   html: `
  //     <h2>New Contact Form Submission</h2>
  //     <p><strong>Name:</strong> ${name}</p>
  //     <p><strong>Email:</strong> ${email}</p>
  //     <p><strong>Company:</strong> ${company || 'Not provided'}</p>
  //     <p><strong>Country:</strong> ${country || 'Not provided'}</p>
  //     <p><strong>Budget:</strong> ${budget || 'Not provided'}</p>
  //     <p><strong>Service Type:</strong> ${serviceType}</p>
  //     <p><strong>Specific Service:</strong> ${service || 'Not specified'}</p>
  //     <p><strong>Message:</strong></p>
  //     <p>${message}</p>
  //   `,
  // })
  
  return { success: true }
} 