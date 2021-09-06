//GET USER DATA
const URL = "https://randomuser.me/api/";

export async function getUserData() {
  try {
    const response = await fetch(URL);
    if (response.ok) {
      const jsonResponse = await response.json();

      //ORGANIZE AND ASSIGN DATA
      const userObj = jsonResponse.results[0];
      const {
        name: { first, last },
        email,
        location: {
          street: { name, number },
        },
        dob: { age },
        picture: { large: image },
        phone,
        login: { password },
      } = userObj;

      return {
        image,
        name: `${first} ${last}`,
        email,
        street: `${number} ${name}`,
        age,
        phone,
        password,
      };
    }

    throw new Error("Request failed!");
  } catch (error) {
    console.log(error);
  }
}
