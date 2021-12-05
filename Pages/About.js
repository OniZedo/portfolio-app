import React from "react";
import Backdrop from '../Components/Backdrop'
import BackdropImage from '../Images/BackdropImage.png'

export default class About extends React.Component {
    render() {
        return (
            <div style={{display: 'flex', justifyContent:'center', flexDirection: 'column'}}>
                <div style={{display: 'flex', justifyContent:'center'}}>
                    <img src={BackdropImage} alt='Backdrop'></img>
                </div>
                <div style={{display: 'flex', alignItems:'center', flexDirection: 'column', paddingBottom: '10vh'}}>
                    <span> Click to see the example used: </span>
                    <a href='https://react-bootstrap.github.io/components/offcanvas/' target="_blank" rel='noreferrer'>Offcanvas backdrops</a>
                </div>
                <div style={{display: 'flex', justifyContent:'center'}}>
                    <span> Go ahead and check these out </span>
                </div>
                <div style={{display: 'flex', justifyContent:'center', flexDirection: 'row', paddingBottom: '10vh'}}>
                    <Backdrop />
                </div>
            </div>
        )
    }
}