import { hash } from "bcryptjs";
import { v4 as uuidv4 } from "uuid";

import createConnection from "../index";

async function create() {
  const connection = await createConnection();

  const id = uuidv4();
  const password = await hash("admin", 8);

  await connection.query(
    `INSERT INTO USERS(id, name, password, email, driver_license, "isAdmin", created_at)
     VALUES('${id}', 'admin', '${password}', 'admin@rentx.com', 'XXXXXXXX', true, 'now()')
    `
  );

  await connection.close();
}

create().then(() => console.log("User admin created!"));
