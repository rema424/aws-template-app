import axios from 'axios';

export async function main() {
  try {
    const { data } = await axios.get('https://loqckyh2rb.execute-api.us-east-1.amazonaws.com/demo');
    return data; // { message: "Real response!" }
  } catch (err) {
    throw new Error(err.message);
  }
}

main().then(res => console.log(res));
