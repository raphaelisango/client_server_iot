import WS from "./WEBSOCKET_SERVICE/app.js";
import XmppClass from "./xmpp-client/xmppClass.js";

class ClientServerFactory {
  createClientServer(type) {
    switch (type) {
      case "websocket":
        return WS; //WS(mode);
      case "xmpp":
        return XmppClass; //XmppClass(xmpp, port, domain);
      default:
        throw new Error("Invalid ClientServer type.");
    }
  }
}

let ClientServer = (() => {
  return new ClientServerFactory();
})();

export default ClientServer;
// Example usage:
/*const ClientServerFactory = new ClientServerFactory();

const car = ClientServerFactory.createClientServer("car", "Toyota", "Camry");
console.log(car.getInfo()); // Output: Car: Toyota Camry

const bike = ClientServerFactory.createClientServer("bike", "Giant");
console.log(bike.getInfo()); // Output: Bike: Giant
*/
