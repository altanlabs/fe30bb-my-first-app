import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface ContactFormInputs {
  name: string;
  email: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormInputs>();

  const onSubmit = (data: ContactFormInputs) => {
    console.log(data);
    // Here you can handle form submission, e.g., send data to an API
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <Input type="text" {...register('name', { required: 'Name is required' })} className="mt-1" />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <Input type="email" {...register('email', { required: 'Email is required' })} className="mt-1" />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <Textarea {...register('message', { required: 'Message is required' })} className="mt-1" />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
        </div>
        <Button type="submit" className="mt-4">Send Message</Button>
      </form>
    </div>
  );
};

export default ContactPage;
