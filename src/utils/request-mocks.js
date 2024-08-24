async function mock_external_request() {
  // Имитация ожидания внутренних компонентов или ответа внешних систем
  const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
  await sleep(2000)
}

async function processButton(button_data) {
  button_data.isLoading = true
  await mock_external_request()

  button_data.isLoading = false
}
export { mock_external_request, processButton }
