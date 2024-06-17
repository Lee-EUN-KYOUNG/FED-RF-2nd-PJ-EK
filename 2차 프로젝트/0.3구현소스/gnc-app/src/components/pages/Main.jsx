// 메인 페이지 컴포넌트 ///


// 모듈 연결하기
import Intro from "./Intro";

// CSS 불러오기
import "../../css/pivot/main.scss";


export default function Main(){

    //// 코드 리턴구역 //////////////
    return(
        <div className="Intro-box" style={{backgroundColor:'lightblue'}}>
        <Intro />
        </div>

    );

} /////////// Main /////////////////////