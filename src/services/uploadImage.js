const uploadImage = async (id, auth_token, payload) => {
  const url = `https://backend.mobdict.com/mis/${id}`;
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Authorization': `Bearer ${auth_token}`,
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
  
}

export default uploadImage;