class Database {
    private static instance: Database;

    private constructor() {
        console.log('Conexión a base de datos establecida');
    }

    public static getInstance(): Database {
        if(!Database.instance)
            Database.instance = new Database();
        return Database.instance;
    }

    public query(sqlQuery: string): string {
        return `Ejecutando consulta: ${sqlQuery}`;
    }
}

export default Database;