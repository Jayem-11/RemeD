const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3007,
    jwtSecret: process.env.JWT_SECRET || 'remedthedilianvilian',
    googleCloud: process.env.GOOGLE_CLIENT_ID || "453960832913-he4k2dq500ovcpfrg1h4qmfm04hdkucg.apps.googleusercontent.com",
    mongoUri: process.env.MONGODB_URI || "mongodb+srv://remed:<remed2021>@cluster0.j6khu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
}

export default config;