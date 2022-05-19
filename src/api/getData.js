import { Stack } from "../api/http-common";

export const getPageComponents = (url, contentType, setPageData, setLoading) => {
  const Query = Stack.ContentType(contentType).Query();

  Query 
  .toJSON()
  .find()
  .then(function success(result) {
    let pageData = result[0];
    for (let index = 0; index < pageData.length; index++) {
      if(result[0][index].url == url ){
        setPageData(pageData[index]);
        setLoading(false);
        break;
      }
    }
  }, function error(err) {
      // err object
      console.log("Error from getdata: ",err);
  });
};

export const getPageUrls = (contentType, setPageURL) => {
  const Query = Stack.ContentType(contentType).Query();

  Query 
  .toJSON()
  .find()
  .then(function success(result) {
    let pageData = result[0];
    let url = window.location.pathname;
    // console.log("Now in: ",url);
    pageData.forEach(element => {
      // console.log(element.url, "from ulr");
      if (url !== element.url) {
          pageData.push({page_title: "Not found page", url: "*"})
      }
    });
    setPageURL(pageData)
  }, function error(err) {
      // err object
      console.log("Error from getdata: ",err);
  });
};

export const getMenuData = (contentType, setFunc, setloader) => {
    Stack.ContentType(contentType)
      .Query()
      .toJSON()
      .find()
      .then((res) => {
        setFunc(res);
        setloader(false);
      })
      .catch((error) => {
        console.log(error);
      });
};
  

export const getSingleData = (contentType,entryUid,setFunc,setloader) => {
  const Query = Stack.ContentType(contentType).Entry(entryUid);
  // console.log("single data: ",contentType, entryUid );
  Query.fetch().then(
    function success(entry) {
      setFunc(entry.toJSON()); // Convert the entry result object to JSON
      setloader(false);
    },
    function error(err) {
      console.log(err);
    }
  );
};

export const getAllData = (contentType,setFunc,setloader) => {
  const Query = Stack.ContentType(contentType).Query();

Query.toJSON()
.find()
.then(function success(result) {
  setFunc(result); // Convert the entry result object to JSON
  setloader(false);
    // result is array where -
    // result[0] =&gt; entry objects
    // result[result.length-1] =&gt; entry objects count included only when .includeCount() is queried.
    // result[1] =&gt; schema of the content type is included when .includeContentType() is queried.
}, function error(err) {
    // err object
    console.log(err);
})

};

// export const getPageUrls = (contentType, setPageURL) => {
//   const Query = Stack.ContentType(contentType).Query();

//   Query 
//   .toJSON()
//   .find()
//   .then(function success(result) {
//     let pageData = result[0];
//     let url = window.location.pathname;
//     // console.log("Now in: ",url);

//     pageData.forEach(element => {
//       // console.log(element.url, "from ulr");
//       if (url !== element.url) {
//           pageData.push({page_title: "Not found page", url: "*"})
//       }
//     });
//     setPageURL(pageData)
//   }, function error(err) {
//       // err object
//       // console.log("Error from getdata: ",err);
//   });
// };