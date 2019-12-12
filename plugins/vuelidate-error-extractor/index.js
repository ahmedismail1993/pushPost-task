import Vue from 'vue'

import vuelidateErrorExtractor, { templates } from 'vuelidate-error-extractor'
import FormGroup from '@/components/FormGroup'

const messages = {
  en: require('@/lang/en.json'),
  ar: require('@/lang/ar.json')
}

Vue.use(vuelidateErrorExtractor, {
  //   template: templates.singleErrorExtractor.bootstrap4,
  messages,
  i18n: 'validation'
})

Vue.component('form-group', FormGroup)
Vue.component('formWrapper', templates.FormWrapper)
