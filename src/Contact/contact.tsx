import { getData } from '@/app/utils/getdata';
import React from 'react'

const contact = async () => {
    const response = await getData({ contentType: 'contact' });
    console.log("CONTACT DATA",response);
  return (
   <>
    <main className="contact-page container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-4">
        {response?.title || 'Contact Us'}
      </h1>

      <p className="text-lg text-center text-gray-600 mb-6">
        {response?.feel_free_to_reach_out || 'We would love to hear from you.'}
      </p>

      <p className="text-center text-sm text-gray-500 mb-10">
        {response?.contact_to_learn_more || ''}
      </p>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-center">
        <div className="contact-card p-6 bg-white rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Email</h3>
          <p className="text-blue-600">{response?.email || 'N/A'}</p>
        </div>

        <div className="contact-card p-6 bg-white rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Phone</h3>
          <p>{response?.phone_no || 'N/A'}</p>
        </div>

        <div className="contact-card p-6 bg-white rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Address</h3>
          <p>{response?.address || 'N/A'}</p>
        </div>
      </section>

      {response?.url && (
        <div className="map mt-10">
          <iframe
            src={response.url}
            width="100%"
            height="300"
            allowFullScreen
            loading="lazy"
            className="rounded-md shadow-md border"
          ></iframe>
        </div>
      )}
    </main>
   </>
  )
}

export default contact
