const ipLogger = (req, res, next) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    req.userIp = ip; // Attach IP address to the request object
    console.log(`User  IP Address: ${ip}`);
    next();
};

export default ipLogger;