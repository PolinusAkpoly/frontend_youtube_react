export const environment  = 
    process.env.NODE_ENV === "development" ?
    // development
    {
        apiUrl: "http://localhost:3000/api",
        production: false
    }
    :
    // production
    {
        apiUrl: "https://api.ouitube.fr",
        production: true
    }