import moment from 'moment'
import Vue from 'vue'

Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})
Vue.filter('formatDate', function (value, format = 'DD/MM/YYYY hh:mm') {
  if (value) {
    return moment(String(value)).format(format)
  }
})

Element.prototype.remove = function () {
  this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function () {
  for (var i = this.length - 1; i >= 0; i--) {
    if (this[i] && this[i].parentElement) {
      this[i].parentElement.removeChild(this[i]);
    }
  }
}
