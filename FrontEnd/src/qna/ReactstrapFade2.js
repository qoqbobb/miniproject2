// Fade 패키지는 특정 영역을 서서시 나타내고 숨기는 기능을 제공합니다.
// 기능을 버튼 이벤트로 제어할 수 있습니다.

import React, {Component} from "react";
import { Button, Fade } from "reactstrap";

class ReactstrapFade2 extends Component{
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
                        Question2. Google One 클라우드 스토리지와 모든 Google 계정에 제공되는 클라우드 스토리지의 차이점은 무엇인가요?
                </Button>
                <hr/>
                {/* <Fade> 태그는 in 속성이 true이면 표시,
                false 이면 미표시됩니다. fadeInOut의 초기값이
                true이기 때문에 최초 화면 로딩 시
                <Fade> 태그 영역이 표시됩니다. */}
                <Fade in = {this.state.fadeInOut} tag="h2" className="h2">
                    Answer<hr/>
                    모든 Google 계정에는 Google Drive, Gmail, Google 포토에서 공유되는 15GB의 스토리지가 제공됩니다. Google One으로 업그레이드하면 선택한 요금제에 따라 총 스토리지가 100GB 이상으로 늘어납니다. 또한 추가 회원 혜택과 Google 전문가의 지원 서비스가 제공되며, 가족 구성원과 이러한 혜택을 모두 공유할 수 있습니다. 
                </Fade>
                
            </div>
        )};
};
export default ReactstrapFade2;