import messagingSvc from "../../../common/services/messaging.svc";
import passwordSvc from "../../../common/services/password.svc";

let chachedPassword = "";

function handlePassword() {
  messagingSvc.onMessage("set-password-to-cache", async (msg) => {
    chachedPassword = msg.password;
    await passwordSvc.checkPassword(chachedPassword);
  });

  messagingSvc.onMessage("get-password-from-cache", async () => {
    await messagingSvc.sendMessage("cached-password", {
      password: chachedPassword,
    });
  });
}

export default handlePassword;
