import { generateFormAndRules } from 'ivy2'
import { ref, reactive } from 'vue'
import { formAndRule } from '@/libs/formAndRules/records'
import { submitForm } from '@/libs/formAndRules/form'
import { useUserStore } from '@/store'
import { useRouter } from 'vue-router/composables'

/**
 * 登录页面的hooks
 * @returns
 */
export const useLogin = function () {
  const userStore = useUserStore()
  const router = useRouter()

  const [_form, _rules] = generateFormAndRules(
    ['loginName', 'password'],
    formAndRule
  )

  const loginForm = reactive(_form)
  const loginFormRules = reactive(_rules)
  const loginFormRef = ref()

  const handleLoginForm = submitForm(async valid => {
    if (valid) {
      userStore
        .loginByUser({
          ...loginForm,
        })
        .then(res => {
          if (res) {
            console.log('开始跳转')
            router.push('/')
          }
        })
    }
  })

  return {
    loginFormRef,
    loginForm,
    loginFormRules,
    handleLoginForm,
  }
}
