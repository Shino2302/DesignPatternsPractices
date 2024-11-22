import Database from "./Class/Database";

function simulateDatabaseOperations(){
    const db1 = Database.getInstance();
    const db2 = Database.getInstance();

    console.log(db1.query("SELECT * FROM users;"));
    console.log(db2.query("SELECT * FROM products;"));

    if(db1 === db2)
        console.log("Ambas instancias son las mismas");
    else
        console.log("Las instancias son diferentes");
}

simulateDatabaseOperations();