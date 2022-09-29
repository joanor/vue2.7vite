import { generateFormAndRules } from 'ivy2'
import { ref, reactive } from 'vue'
import { formAndRule } from '@/libs/formAndRules/records'
import { submitForm } from '@/libs/formAndRules/form'

/**
 * 登录页面的hooks
 * @returns
 */
export const useLogin = function () {
  const [_form, _rules] = generateFormAndRules(
    ['loginName', 'password'],
    formAndRule
  )

  const loginForm = reactive(_form)
  const loginFormRules = reactive(_rules)
  const loginFormRef = ref()

  const handleLoginForm = submitForm(async valid => {
    if (valid) {
      console.log(`登录了`)
    }
  })

  return {
    loginFormRef,
    loginForm,
    loginFormRules,
    handleLoginForm,
  }
}
