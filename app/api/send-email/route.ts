import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Force Node.js runtime (not Edge) - required for Nodemailer
export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, requirement, formType } = body;

    // Debug logging - check if env vars exist at runtime
    console.log('[SMTP Debug] Environment check:', {
      SMTP_HOST: process.env.SMTP_HOST ? '✓ set' : '✗ missing',
      SMTP_PORT: process.env.SMTP_PORT ? '✓ set' : '✗ missing',
      SMTP_USER: process.env.SMTP_USER ? '✓ set' : '✗ missing',
      SMTP_PASSWORD: process.env.SMTP_PASSWORD ? '✓ set' : '✗ missing',
    });

    // Validate environment variables
    const smtpUser = process.env.SMTP_USER;
    const smtpPassword = process.env.SMTP_PASSWORD;
    const smtpHost = process.env.SMTP_HOST || 'smtp.zoho.in';
    const smtpPort = parseInt(process.env.SMTP_PORT || '587', 10);

    if (!smtpUser || !smtpPassword) {
      console.error('[SMTP Error] Missing SMTP credentials');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Name, email, and phone are required' },
        { status: 400 }
      );
    }

    // Create transporter inside the handler (not at module level)
    // This ensures env vars are read at runtime, not build time
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: false, // false for port 587 (STARTTLS)
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
      // TLS config required for Zoho on Vercel
      tls: {
        ciphers: 'SSLv3',
        rejectUnauthorized: false,
      },
      // Connection timeout settings
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 15000,
    });

    // Verify SMTP connection before sending
    try {
      await transporter.verify();
      console.log('[SMTP] Connection verified successfully');
    } catch (verifyError) {
      console.error('[SMTP Error] Connection verification failed:', verifyError);
      return NextResponse.json(
        { error: 'Failed to connect to email server' },
        { status: 500 }
      );
    }

    // Email content
    const emailSubject = formType === 'hero' 
      ? `🦈 New Lead from Sharkspace Website - ${name}`
      : `🦈 New Inquiry from Sharkspace Website - ${name}`;

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #0F2A4A; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #0F2A4A; }
            .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
            .cta { background: #00A3E0; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; display: inline-block; margin-top: 15px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🦈 New Lead from Sharkspace</h1>
              <p>${formType === 'hero' ? 'Hero Form Submission' : 'Contact Form Submission'}</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">👤 Name</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">📧 Email</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              <div class="field">
                <div class="label">📱 Phone</div>
                <div class="value"><a href="tel:${phone}">${phone}</a></div>
              </div>
              ${requirement ? `
              <div class="field">
                <div class="label">📋 Requirement</div>
                <div class="value">${requirement}</div>
              </div>
              ` : ''}
              <div class="field">
                <div class="label">📅 Submitted At</div>
                <div class="value">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</div>
              </div>
              <center>
                <a href="tel:${phone}" class="cta">📞 Call Now</a>
                <a href="https://wa.me/${phone.replace(/[^0-9]/g, '')}" class="cta" style="background: #25D366;">💬 WhatsApp</a>
              </center>
            </div>
            <div class="footer">
              <p>This email was sent from the Sharkspace website contact form.</p>
              <p>Sharkspace Coworking, Sector-132, Noida Expressway</p>
            </div>
          </div>
        </body>
      </html>
    `;

    const emailText = `
New Lead from Sharkspace Website

Name: ${name}
Email: ${email}
Phone: ${phone}
${requirement ? `Requirement: ${requirement}` : ''}
Form Type: ${formType || 'Contact Form'}
Submitted At: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}

---
Sharkspace Coworking, Sector-132, Noida Expressway
    `;

    // Send email
    const info = await transporter.sendMail({
      from: `"Sharkspace Website" <${smtpUser}>`,
      to: 'sales@sharkspace.in',
      replyTo: email,
      subject: emailSubject,
      text: emailText,
      html: emailHtml,
    });

    console.log('[SMTP] Email sent successfully:', info.messageId);

    return NextResponse.json(
      { success: true, message: 'Email sent successfully', messageId: info.messageId },
      { status: 200 }
    );
  } catch (error) {
    console.error('[SMTP Error] Failed to send email:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to send email. Please try again.' },
      { status: 500 }
    );
  }
}
