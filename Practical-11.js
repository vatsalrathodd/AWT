function fetchDataFromAPI(callback) {
    setTimeout(() => {
      const data = {
        message: "Data fetched from API is as follows",
        data: { Name: "Vatsal Rathod", Id: "21CE116" }
      };
      callback(null, data);
    }, 2000);
  }
  
  function handleFetchedData(error, data) {
    if (error) {
      console.error("Error fetching data:", error);
    } else {
      console.log("Fetched data:", data);
      console.log("My name is:", data.data.Name);
      console.log("My Id No is:", data.data.Id);
    }
  }
  
  console.log("Fetching data from API...");
  fetchDataFromAPI(handleFetchedData);
  console.log("Fetching process initiated, waiting for response...");
  