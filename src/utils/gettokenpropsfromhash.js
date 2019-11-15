const getTokenPropsFromHash = () => {
  const tokenProps = window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
      const parts = item.split('=');
      const reduced = {
        ...initial,
      };

      if (item) {
        reduced[parts[0]] = decodeURIComponent(parts[1]);
      }
      return reduced;
    }, {});

  if (Object.keys(tokenProps).length < 1) return null;
  return tokenProps;
};

export default getTokenPropsFromHash;
