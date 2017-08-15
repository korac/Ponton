/**
 * Created by kristijankorac on 11/07/2017.
 */
var __App = {};

__App.__Helpers = {
  checkIfFormIsValid: function () {

  },
  setButtonActive: function (buttonId) {
    $(buttonId).addClass('btn--active').removeAttr('disabled');
  },
  disableButton: function (buttonId) {
    $(buttonId).removeClass('btn--active').attr('disabled', 'true');
  }
};