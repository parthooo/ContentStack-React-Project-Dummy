import Contentstack from "contentstack";

export const Stack = Contentstack.Stack(
  process.env.REACT_APP_CONTENTSTACK_API_KEY,
  process.env.REACT_APP_CONTENTSTACK_DELIVERY_TOKEN,
  process.env.REACT_APP_CONTENTSTACK_ENVIRONMENT,
);
