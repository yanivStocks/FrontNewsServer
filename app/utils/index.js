
module.exports = {
  respond,
  respondOrRedirect,
  respondJson
};

function respond (res, tpl, obj, status) {
  res.format({
    html: () => res.render(tpl, obj),
    json: () => {
      if (status) return res.status(status).json(obj);
      res.json(obj);
    }
  });
}

function respondOrRedirect ({ req, res }, url = '/', obj = {}, flash) {
  res.format({
    html: () => {
      if (req && flash) req.flash(flash.type, flash.text);
      res.redirect(url);
    },
    json: () => res.json(obj)
  });
}


function respondJson (res, obj, status) {
  res.format({
    json: () => res.json(obj),
    json: () => {
    if (status) return res.status(status).json(obj);
    res.json(obj);
  }
});
}
