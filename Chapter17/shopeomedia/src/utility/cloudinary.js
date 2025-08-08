// src/utility/cloudinary.js
const CLOUD_NAME    = 'dupvglplf';
const UPLOAD_PRESET = 'shopopedia';
const UPLOAD_URL    = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`;

export async function uploadToCloudinary(file) {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', UPLOAD_PRESET);

  const res = await fetch(UPLOAD_URL, {
    method: 'POST',
    body: formData,
  });

  if (!res.ok) {
    const text = await res.text();
    console.error('Cloudinary error payload:', text);
    throw new Error(`Upload failed: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();
  return data.secure_url ;
}
