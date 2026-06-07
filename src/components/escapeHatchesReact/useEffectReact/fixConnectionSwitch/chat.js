export function createEncryptedConnection(roomId) {
  return {
    connect() {
      console.log('✅ 🔐 Connecting to "' + roomId + "... (encrypted)");
    },
    disconnect() {
      console.log('❌ 🔐 Disconnected from "' + roomId + '" room (encrypted)');
    },
  };
}

export function createUnencryptedConnection(roomId) {
  return {
    connect() {
      console.log('✅ Connecting to "' + roomId + "... (unencrypted)");
    },
    disconnect() {
      console.log('❌ Disconnected from "' + roomId + '" room (unencrypted)');
    },
  };
}
