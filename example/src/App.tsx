import React, { useEffect } from 'react'
import ReactNativeButtonsModule, { Counter } from 'react-native-buttons'

const App = () => {
  useEffect(() => {
    console.log(ReactNativeButtonsModule)
  })

  return <Counter />
}

export default App
