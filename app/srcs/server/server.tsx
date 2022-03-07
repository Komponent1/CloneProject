import { fetcher } from "./util"
import repl from "./repl";

const response = async (data) => {
  return await fetcher(data);
}
const request = async (type: string, api: string, option?: Object) => {
  switch (type) {
    case ('repl'):
      return (await response(await repl(api, option)));
    default:
      return (await response({ err: 'This is Wrong Request '}));
  }
}

const server = {
  request, response
}

export default server;
