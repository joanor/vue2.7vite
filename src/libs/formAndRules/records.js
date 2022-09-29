import { formChecker } from 'ivy2'

const createFormAndRule = () => [
  {
    label: 'loginName',
    default: '',
    required: true,
    rule: [
      {
        required: true,
        message: '请输入用户名',
        trigger: 'blur',
      },
    ],
    id: '',
  },
  {
    label: 'password',
    default: '',
    required: true,
    rule: [
      {
        required: true,
        message: '请输入密码',
        trigger: 'blur',
      },
      {
        validator: formChecker.easyPasswordChecker(),
        trigger: 'blur',
      },
    ],
    id: '',
  },
]

export const formAndRule = createFormAndRule()
