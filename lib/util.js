exports.debug = (url, obj, status) => {
  const seperator = '\n********************************\n';
  const output = seperator + url + seperator;
  if (!status){
    status = "";
    }
    if (process.env.DEBUG){
      console.log(output, obj, status);
    }
  };
