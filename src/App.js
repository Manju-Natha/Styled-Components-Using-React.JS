import './App.css'
import {CustomButton} from './styledComponents'

const App = () => (
  <>
    <CustomButton outline={false}>Click</CustomButton>
    <CustomButton as="a" href="#" outline={true}>
      Click
    </CustomButton>
  </>
)

export default App
