//will be imported from summary.

 // useEffect(() => {
  //   const getUserInfo = async () => {
  //     const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/mood/?Grid%20View`;
  //     const response = await axios.get(airtableURL, {
  //       headers: {
  //         Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
  //       },
  //     });
  //     console.log(response.data.records);
  //     setUserInfo(response.data.records);
  //   };
  //   getUserInfo();
  // }, []);