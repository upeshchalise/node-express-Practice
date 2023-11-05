const Authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "rebel") {
    req.user = { name: "rebel", id: 88 };
    console.log(req.user);
    next();
  } else {
    res.status(401).send("UnAuthorized");
  }
};

module.exports = { Authorize };
