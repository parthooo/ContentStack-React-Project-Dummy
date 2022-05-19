import { Stack } from "./http-common";

// console.log("connected", Stack);

export const getData = (contentType, setFunc, setloader) => {
  Stack.ContentType(contentType)
    .Query()
    .toJSON()
    .find()
    .then((res) => {
      setFunc(res);
      //   console.log(res);
      setloader(false);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getSingleData = (contentType,entryUid,setFunc,setloader, mounted) => {
  const Query = Stack.ContentType(contentType).Entry(entryUid);
  Query.fetch().then(
    function success(entry) {
      if(!mounted.current) return null; // this won't update state if the component is already unmounted
      setFunc(entry.toJSON()); // Convert the entry result object to JSON
      setloader(false);
    },
    function error(err) {
      if(!mounted.current) return null; // this won't update state if the component is already unmounted
      console.log(err);
    }
  );
};
