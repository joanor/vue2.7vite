export const submitForm = func => formEl => {
  if (!formEl) return
  formEl.validate(func)
}

export const resetForm = func => formEl => {
  if (!formEl) return
  if (func) func()
  formEl.resetFields()
}
