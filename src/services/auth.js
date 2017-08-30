/**
 * Created by kristijankorac on 23/08/2017.
 */
exports.IsAuthenticated = function(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect('/login');
  }
};

exports.IsNotAuthenticated = function(req, res, next) {
  if(req.isAuthenticated()) {
    res.redirect('/');
  } else {
    next();
  }
};