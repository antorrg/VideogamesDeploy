
const formatFields = (data) => {
    if (Array.isArray(data)) {
      return data.join(', ');
    }
  };
 

export {
    formatFields
};
