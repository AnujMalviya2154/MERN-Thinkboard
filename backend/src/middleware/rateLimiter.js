import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
    try {
        const ip = req.ip || req.headers["x-forwarded-for"] || "anonymous";
        const {success} = await ratelimit.limit(ip);
        if(!success){
            return res.status(429).json({message: "Too many requests. Please try again later."});
        }
        next();
    } 
    catch (error) {
        console.error("Rate limit error:", error);
        return res.status(500).json({message: "Internal server error."});
    }
}

export default rateLimiter;