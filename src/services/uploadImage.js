const uploadImage = async (id, auth_token, formData) => {
  const url = `https://backend.mobdict.com/api/mis/${id}`;
  
  const headers = {
    'Authorization': `Bearer ${auth_token}`,
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: formData,
    });

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
  
}

export default uploadImage;