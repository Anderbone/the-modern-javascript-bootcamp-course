const fetchData = async () => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: '5c50ed54',
      s: 'avengers'
    }
  });

  console.log(response.data);
};

fetchData();
