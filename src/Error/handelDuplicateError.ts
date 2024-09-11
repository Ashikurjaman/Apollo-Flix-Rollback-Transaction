import { TErrorResources } from "../interface/error.interface";

export const handelDuplicateError = (err: any) => {
  const match = err.message.match(/"([^"]*)"/);
  console.log(match);
  const extractedMessage = match && match[1];
  const errorSource: TErrorResources = [
    {
      path: "",
      message: `${extractedMessage} already exists`,
    },
  ];
  return {
    errorSource,
  };
};
