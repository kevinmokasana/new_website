import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_tnz1b0e';
const EMAILJS_TEMPLATE_ID = 'template_kp5pde1';
const EMAILJS_PUBLIC_KEY = 'vcyY92AhOIUDUZfXA';

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      to_email: 'mokasanakevin@gmial.com',
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    return response.status === 200;
  } catch (error) {
    console.error('EmailJS Error:', error);
    return false;
  }
};

export const initializeEmailJS = () => {
  emailjs.init(EMAILJS_PUBLIC_KEY);
};