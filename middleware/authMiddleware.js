function ensureLoggedIn(req, res, next) {
    if (req.session && req.session.userId) {
        return next();
    }
    // Optionally, store the original URL to redirect after login
    req.session.redirectTo = req.originalUrl;
    res.redirect('/login');
}

module.exports = { ensureLoggedIn };