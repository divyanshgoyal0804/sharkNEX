// Email sending utility using Nodemailer API route

interface EmailFormData {
  name: string;
  email: string;
  phone: string;
  requirement?: string;
  formType?: 'hero' | 'contact';
}

export async function sendEmail(formData: EmailFormData): Promise<boolean> {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok && data.success) {
      return true;
    }
    
    console.error('Email API Error:', data.error);
    return false;
  } catch (error) {
    console.error('Email sending error:', error);
    return false;
  }
}

// Hero form specific function
export async function sendHeroForm(
  name: string,
  email: string,
  phone: string
): Promise<boolean> {
  return sendEmail({
    name,
    email,
    phone,
    formType: 'hero',
  });
}

// Lead/Contact form specific function
export async function sendLeadForm(
  name: string,
  email: string,
  phone: string,
  requirement: string
): Promise<boolean> {
  return sendEmail({
    name,
    email,
    phone,
    requirement,
    formType: 'contact',
  });
}
