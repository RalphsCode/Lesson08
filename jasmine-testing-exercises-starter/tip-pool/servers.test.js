describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  afterEach(() => {
    // Log that Alice was in the Server list object
    console.log(allServers.server1.serverName);
    // Tear down the test
    allServers = {};
    updateServerTable();
  });
});


// const row = event.target.parentNode.parentNode;
// // Delete that server from the Server List object
// console.log(allServers[row.id].serverName + ' Has been deleted');
// delete allServers[row.id];
// console.log(allServers.server1.serverName);

// for (let servers in allServers) {
//   console.log(allServers[servers].serverName);
//   }
