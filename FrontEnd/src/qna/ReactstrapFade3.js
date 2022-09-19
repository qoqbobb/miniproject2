// Fade 패키지는 특정 영역을 서서시 나타내고 숨기는 기능을 제공합니다.
// 기능을 버튼 이벤트로 제어할 수 있습니다.

import React, {Component} from "react";
import { Button, Fade } from "reactstrap";

class ReactstrapFade3 extends Component{
    constructor(props){
        super(props);
        // <Fade> 태그 영역의 표시 상태를 sate로 선언하고
        // 초기값은 표시인 true로 할당합니다.
        this.state = {fadeInOut: false}
    }
    toggle = (e) => {
        this.setState({fadeInOut: !this.state.fadeInOut})
    }
    render(){
        return(
            <div>
                <Button color = "primary"
                    onClick = {this.toggle} id="button">
                        Question3. 회원이 아닌 경우 Google One을 어떻게 사용할 수 있나요?
                </Button>
                <hr/>
                {/* <Fade> 태그는 in 속성이 true이면 표시,
                false 이면 미표시됩니다. fadeInOut의 초기값이
                true이기 때문에 최초 화면 로딩 시
                <Fade> 태그 영역이 표시됩니다. */}
                <Fade in = {this.state.fadeInOut} tag="h2" className="h2">
                     Answer<hr/>
                     스토리지 관리자를 사용해 Android 또는 iOS 휴대전화에 데이터를 백업하고 Google 계정에서 여유 공간을 확보할 수 있습니다. Google One 멤버십에 가입하면 확장된 클라우드 스토리지, Google 전문가팀의 지원, 전용 혜택과 같은 추가 기능이 제공됩니다.
                </Fade>
                
            </div>
        )};
};
export default ReactstrapFade3;