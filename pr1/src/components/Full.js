import React from 'react'
import '../styles/full.css'
import { Transition } from 'react-spring/renderprops'
function Full() {
    const items = [
        <div className='mt-3 ml-5 follContant mr-5' id='idp'>

            <div className='row content'  id='idp'>
                <div className='form-holder col-sm-12 col-md-6 col-lg-5'>
                    <div className='form-content'>
                        <div className='form-items'>
                            <div className='row p-4'><h1>Добро пожаловать в Nano-NN</h1></div><br></br>
                            <div className='row'><h3 className='Number'>Руководитель IT-отдела
                                  <br></br>
                                <a href='tel:+996(555)096-116'>+996(555)096-116</a>
                            </h3></div>
                            <div className='row'><h3 className='text-center Number'>Оставьте свои контакныеданные</h3></div>
                            <div className='col'>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <div className='form-group'><input className='form-control' type="text" required placeholder="Имя"></input></div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='form-group'><input className='form-control' type="text" required placeholder="Почта"></input></div>
                                        <div className='help-block with-errors'></div>
                                    </div>
                                </div>
                                <div className='row-md-6'>
                                    <div className='form-group'><input className='form-control' type="text" required placeholder="Тема"></input></div>
                                    <div className='help-block with-errors'></div>
                                </div>
                                <div>
                                    <textarea className='textArea' placeholder="Сообщение" rows="5"></textarea>
                                    <div className='help-block with-errors'></div>
                                </div>
                                <div className='knopka text-center'><button type='btn' className='btn btn-dark'>Отправить</button></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='form-holder col-sm-12 col-md-6 col-lg-5 text-center'>
                </div>
            </div>
        </div>
    ]
    return (
        <Transition
            items={items} keys={item => item.key}
            from={{ transform: 'translate3d(0,100%,0)' }}
            enter={{ transform: 'translate3d(0,0%,0)' }}
            leave={{ transform: 'translate3d(0,100%,0)' }}>
            {item => props => <div style={props}>{item}</div>}
        </Transition>




    )
}

export default Full

/* <div className='mt-3 ml-5 follContant mr-5 main flash'     data-aos='fade-up'>

            <div className='row content'>
                <div className='form-holder col-sm-12 col-md-6 col-lg-5'>
                    <div className='form-content'>
                        <div className='form-items'>
                            <div className='row p-4'><h1>Добро пожаловать в Nano-NN</h1></div><br></br>
                            <div className='row'><h3 className='Number'>Руководитель IT-отдела
                    <br></br>
                                <a  href='tel:+996(555)096-116'>+996(555)096-116</a>
                            </h3></div>
                            <div className='row'><h3 className='text-center Number'>Оставьте свои контакныеданные</h3></div>
                            <div className='col'>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <div className='form-group'><input className='form-control' type="text" required placeholder="Имя"></input></div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='form-group'><input className='form-control' type="text" required placeholder="Почта"></input></div>
                                        <div className='help-block with-errors'></div>
                                    </div>
                                </div>
                                <div className='row-md-6'>
                                    <div className='form-group'><input className='form-control' type="text" required placeholder="Тема"></input></div>
                                    <div className='help-block with-errors'></div>
                                </div>
                                <div>
                                    <textarea className='textArea' placeholder="Сообщение"  rows="5"></textarea>
                                    <div className='help-block with-errors'></div>
                                </div>
                                <div className='knopka text-center'><button type='btn' className='btn btn-dark'>Отправить</button></div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='form-holder col-sm-12 col-md-6 col-lg-5 text-center'>

                </div>
            </div>
        </div>*/