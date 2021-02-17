export const searchAPI = async (search) => {
  console.log("hola tono");
  const response = await window.fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=087fffdd5a3e9f23508f70eb72e360c4&units=metric`
  );
  const data = await response.json();
  return data;
};
