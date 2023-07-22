import { Provider } from "react-redux"
import "../styles/style.css"
import store from './../redux/store';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
