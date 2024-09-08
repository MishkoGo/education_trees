import locale_i18n from '@/locale/'
const { t } = locale_i18n.global

function isRequired(value) {
  return !!value || t('forms.field_required')
}
function foo() {
  console.log('bar')
}

export { isRequired, foo }
