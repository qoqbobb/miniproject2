import { Route } from "react-router-dom";
import ViewButton from "./views/ViewButton.js";
//import InputForm from "./views/InputForm.js";
import Insert from "./views/Insert.js";
import View from "./views/View.js";
import Update from "./views/Update.js";
import Navbarr from "./Nav/Navbarr.js";
import Qna from "./qna/Qna.js";
import Main from "./views/Main.js";
import About from "./views/About.js";



const App = () => {
  return (
    <>
      <Navbarr/>
      <Route exact path="/" component={Main} />
      <Route exact path="/viewpage" component={ViewButton} />
      <Route exact path="/about" component={About} />
      {/*/:crud 경로에서 :crud 부분은 URL 파라미터를 정의할 때
         사용하는 React Router의 문법입니다.
          경로에 이와 같이 URL 파라미터가 포함된 경우,
          패턴 매칭이 되어 /1, /a 등이 모두 매칭이 되며,
          해당 파라미터는 변수화되어 맵핑된 컴포넌트에서
          match.params.crud 같이 읽어올 수 있습니다. */}
      <Route exact path="/qna" component={Qna} />
      <Route exact path="/insert" component={Insert} />
      <Route exact path="/view/:id" component={View} />
      <Route exact path="/update/:id" component={Update} />
    </>
  );
};

export default App;