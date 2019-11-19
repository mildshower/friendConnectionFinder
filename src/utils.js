const showConnection = function(connection, person1, person2) {
  if(connection.connFlag) {
    console.log(`${person1} and ${person2} are connected!`);
    console.log('Connection Path\n', connection.path.join(' -> '));
  } else {
    console.log(`${person1} and ${person2} are not connected!`)
  }
};

exports.showConnection = showConnection;
    
