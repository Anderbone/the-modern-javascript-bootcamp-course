const fetchData = async () => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: '5c50ed54',
      i: 'tt0848228'
    }
  });

  console.log(response.data);
};

fetchData();
