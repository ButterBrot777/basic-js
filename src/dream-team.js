module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let sortedMembers = [];
  members.forEach(elem => {
    if(typeof elem === 'string') sortedMembers.push( elem.trim() );
  });
  let result = '';
  sortedMembers.forEach(element => {
    result += element.substr(0, 1).toUpperCase()
  });
  result = result.split('').sort().join('');
  return result;
};