/** @type { import("drizzle-kit").Config } */
export default {
    schema:"./utils/schema.js",
    out: "./drizzle",
    dialect:"postgresql",
    
    dbCredentials: {
        
        url: 'postgresql://ai-interviewer_owner:npg_UTVdXa1wCHJ7@ep-long-bush-a5hjaj7h-pooler.us-east-2.aws.neon.tech/ai-interviewer?sslmode=require',
        database: "ai-interviewer",
        ssl:true
    }
};