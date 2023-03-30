import { createConnection } from "/node_modules/mysql2/promise.js";

export const insertIntoDB = async (base64String, returnString) => {
    const connection = await createConnection({
        // not me NOT encrypting my data!??
        host: "sql9.freesqldatabase.com",
        user: "sql9609574",
        password: "U6JqdflMxh",
        database: "sql9609574",
        port:3306,
    })

    try {
        await connection.query(
            "INSERT INTO project4 (base64String, returnString) VALUES ('"+base64String+"', '"+returnString+"')"
        );
        console.log("Inserted ("+base64String+","+returnString+") into DB")
    } catch (error) {
        console.log(error)
    }
};

// insertIntoDB("lognnggoengonegoengonegoeogngo", "this is fake")