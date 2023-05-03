import create from "./http-service";

const dataService = (endPoint: string) => {
  return create("/" + endPoint);
};

export default dataService;
