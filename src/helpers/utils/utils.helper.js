export const capitalize = str => str
  .toLowerCase()
  .replace( /\b[a-z](?=[a-z]{1})/g,
    ( letter ) => letter.toUpperCase() );

export const cleanPath = str => {
  const cleanedString = str
    .split( '/' )
    .slice( -1 )
    .join()
    .replace( /-/g, ' ' );

  return capitalize( cleanedString )
};

export const truncate = (str, length = 20, ending = "...") =>
  str.length > length ? `${str.substring(0, length - ending.length)} ${ending}` : str;

export const getInitials = (fName, lName) =>
  `${fName.charAt(0).toUpperCase()}${lName.charAt(0).toUpperCase()}`;
