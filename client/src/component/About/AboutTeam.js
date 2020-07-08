import React from "react";
import Modal from "react-modal";
import "./About.css";
import philip from './image/philip.jpg'
import douhyun from './image/douhyun.jpg'
import junseob from './image/junseob.jpg'
import sohyun from './image/sohyun.jpg'

const customStyles = {
    content: {
        position: "fixed",
        top: "60%",
        left: "50%",
        width: "800px",
        height: "540px",
        transform: "translate(-50%,-50%)",
        overflow: "none",
        border: "0px",
    },
};

const AboutTeam = ({ teamModalOpen, closeTeamModal }) => {
    return (
        <div>
            <Modal
                isOpen={teamModalOpen}
                onRequestClose={closeTeamModal}
                style={customStyles}
            >
                <div className='wrapper'>
                    <div className='form-wrapper'>
                        <h2 className='title'>MEMBERS OF HELL-THY</h2>
                        {/* <form onSubmit={handleSubmit} noValidate> */}
                        <div className='divider2'></div>
                        <div className='desc'>Hell-thy is a compound word that describes how much we care about your health, and how much hell of a time & effort we spent while making this application. Meet our crews!</div>
                        <div className='divider2'></div>
                        <div className='choikyung'>
                            <div>
                                <div className='hwaejang' htmlFor='hwaejang'><center>회장</center></div>
                                <div>
                                    <img src={philip} />
                                    <div className='desc'>Name: PHILLIP CHOI</div>
                                    <div className='desc'>Position: Full-stack</div>
                                </div>
                            </div>
                            <div>
                                <div className='gongjangjang' htmlFor='gongjangjang'><center>공장장</center></div>
                                <div>
                                    <img src={douhyun} />
                                    <div className='desc'>Name: D.H KYUNG</div>
                                    <div className='desc'>Position: Front-end</div>
                                </div>
                            </div>
                        </div>
                        <div className='divider2'></div>

                        <div className='kims'>
                            <div>
                                <div className='bujang' htmlFor='bujang'><center>부장</center></div>
                                <div>
                                    <img src={junseob} />
                                    <div className='desc'>Name: JUNSEOB KIM</div>
                                    <div className='desc'>Position: Full-stack</div>
                                </div>
                            </div>
                            <div>
                                <div className='employee' htmlFor='employee'><center>사원</center></div>
                                <div>
                                    <img src={sohyun} />
                                    <div className='desc'>Name: SOHYUN KIM</div>
                                    <div className='desc'>Position: Front-end</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

        </div >
        // <Card style={{ width: '12.5rem' }}>
        //     <CardPrimaryAction>
        //         <CardMedia
        //             square
        //             style={{
        //                 backgroundImage: 'url(images/backgrounds/mb-bg-fb-06.png)'
        //             }}
        //         >
        //             <CardMediaContent>
        //                 <Typography
        //                     use="subtitle2"
        //                     tag="div"
        //                     theme="textPrimaryOnDark"
        //                     style={{
        //                         padding: '0.5rem 1rem',
        //                         backgroundImage:
        //                             'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.5) 100%)',
        //                         bottom: '0',
        //                         left: '0',
        //                         right: '0',
        //                         position: 'absolute'
        //                     }}
        //                 >
        //                     Vacation Photos
        //     </Typography>
        //             </CardMediaContent>
        //         </CardMedia>
        //     </CardPrimaryAction>
        //     <CardActions>
        //         <CardActionIcons>
        //             <CardActionIcon onIcon="favorite" icon="favorite_border" />
        //             <CardActionIcon icon="bookmark_border" />
        //             <CardActionIcon icon="share" />
        //         </CardActionIcons>
        //     </CardActions>
        // </Card>
    )
}

export default AboutTeam;