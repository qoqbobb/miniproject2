// Fade 패키지는 특정 영역을 서서시 나타내고 숨기는 기능을 제공합니다.
// 기능을 버튼 이벤트로 제어할 수 있습니다.

import React, {Component} from "react";
import { Button, Fade } from "reactstrap"

class ReactstrapFade extends Component{
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
                    onClick = {this.toggle} className="button">
                        Question1. Google One과 Google Drive의 차이점은 무엇인가요?
                </Button>
                <hr/>
                {/* <Fade> 태그는 in 속성이 true이면 표시,
                false 이면 미표시됩니다. fadeInOut의 초기값이
                true이기 때문에 최초 화면 로딩 시
                <Fade> 태그 영역이 표시됩니다. */}
                <Fade in = {this.state.fadeInOut} tag="h2" className="h2">
                    Answer<hr/>
                    Google Drive는 스토리지 서비스입니다. Google One은 Google Drive, Gmail, Google 포토에서 사용할 수 있는 추가 스토리지를 제공하는 가입 요금제입니다. Google One 회원에게는 추가 혜택이 제공되며 멤버십을 가족과 공유할 수 있습니다.
                </Fade>
                
            </div>
        )};
};
export default ReactstrapFade;