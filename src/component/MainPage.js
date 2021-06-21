import React, {useState} from 'react';
import {Collapse, Dropdown, DropdownToggle, DropdownItem, DropdownMenu} from "reactstrap";
import {connect} from "react-redux";
import {AvForm, AVField} from "availity-reactstrap-validation";
import {update_state} from "../redux/action/menuAction";

const MainPage = (props) => {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownOpen2, setDropdownOpen2] = useState(false);
    const [dropdownOpen3, setDropdownOpen3] = useState(false);
    const [dropdownOpen4, setDropdownOpen4] = useState(false);
    const [dropdownOpen5, setDropdownOpen5] = useState(false);
    const [dropdownOpen6, setDropdownOpen6] = useState(false);
    const [dropdownOpen7, setDropdownOpen7] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);
    const toggle2 = () => setDropdownOpen2(prevState => !prevState);
    const toggle3 = () => setDropdownOpen3(prevState => !prevState);
    const toggle4 = () => setDropdownOpen4(prevState => !prevState);
    const toggle5 = () => setDropdownOpen5(prevState => !prevState);
    const toggle6 = () => setDropdownOpen6(prevState => !prevState);
    const toggle7 = () => setDropdownOpen7(prevState => !prevState);

    return (
        <div className="main">
            <div className="top my-2">
                <div className="navigationBar d-flex align-items-center justify-content-between">
                    <h2>Битрикс <b>24</b></h2>

                    <div className="sana d-flex align-items-center">
                        <span className="icon icon-edit"></span>

                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="искат..."/>

                            <div className="input-group-text"><span className="icon icon-search"></span></div>
                        </div>

                        <h1>17:17</h1>

                        <div className="bayroq d-flex align-items-center">
                            <span className="icon icon-flag"></span>
                            <p className="mb-0 text-white m-lg-1">1</p>
                        </div>
                    </div>

                    <div className="dropdowns d-flex align-items-center">
                        <Dropdown isOpen={dropdownOpen} toggle={toggle} className="d-flex align-items-center">
                            <span className="icon icon-user"></span>
                            <DropdownToggle className="button1" caret>
                                gasexa6495@d4wan.com
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>UZ</DropdownItem>
                                <DropdownItem>RU</DropdownItem>
                                <DropdownItem>EN</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <Dropdown isOpen={dropdownOpen2} toggle={toggle2}>
                            <DropdownToggle className="button2 d-flex align-items-center" caret>
                                <div className="rocket">
                                    <span className="icon icon-startup"></span>
                                </div>
                                Купит Тариф
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>UZ</DropdownItem>
                                <DropdownItem>RU</DropdownItem>
                                <DropdownItem>EN</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <Dropdown isOpen={dropdownOpen3} toggle={toggle3}>
                            <DropdownToggle className="button3" caret>
                                Пригласить
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>UZ</DropdownItem>
                                <DropdownItem>RU</DropdownItem>
                                <DropdownItem>EN</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </div>
            </div>
            <div className="top2 py-2">
                <div className="navigationBar2 d-flex align-items-center justify-content-between">
                    <ul className="nav">
                        <li className="nav-item"><a href="#" className="nav-link">Сделки</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Контакты</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Компании</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Аналитика</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Товары</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Настройки</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Смарт-процесси</a></li>
                    </ul>

                    <Dropdown isOpen={dropdownOpen4} toggle={toggle4}>
                        <DropdownToggle className="button4 d-flex align-items-center" caret>
                            Еше
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>UZ</DropdownItem>
                            <DropdownItem>RU</DropdownItem>
                            <DropdownItem>EN</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>

            <div className="top3 py-3 d-flex align-items-center">
                <div className="star d-flex align-items-center">
                    <h1 className="mb-0">Сделки</h1>
                    <span className="icon icon-star m-lg-2"></span>
                </div>

                <div className="input-group">
                    <input type="text" placeholder="Филтр + Поиск" className="form-control"/>

                    <div className="input-group-text">
                        <span className="icon icon-search"></span>
                    </div>
                </div>

                <Dropdown isOpen={dropdownOpen5} toggle={toggle5}>
                    <DropdownToggle className="button5 d-flex align-items-center" caret>
                        Общее
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>UZ</DropdownItem>
                        <DropdownItem>RU</DropdownItem>
                        <DropdownItem>EN</DropdownItem>
                    </DropdownMenu>
                </Dropdown>

                <div className="settings d-flex align-items-center justify-content-center"><span className="icon icon-settings"></span></div>

                <Dropdown isOpen={dropdownOpen6} toggle={toggle6}>
                    <DropdownToggle className="button6 d-flex align-items-center" caret>
                        Добавить Сделку
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>UZ</DropdownItem>
                        <DropdownItem>RU</DropdownItem>
                        <DropdownItem>EN</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
            
            <div className="line"></div>
            
            <div className="top4 d-flex justify-content-between align-items-center ">
                <h6 className="mb-0 text-white">Нет сделок, требующих оперативной реакции</h6>

                <div className="menus d-flex align-items-center">
                    <Dropdown isOpen={dropdownOpen7} toggle={toggle7}>
                        <DropdownToggle className="button7 d-flex align-items-center" caret>
                            Расширения
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>UZ</DropdownItem>
                            <DropdownItem>RU</DropdownItem>
                            <DropdownItem>EN</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>

                    <div className="rabot">
                        Работы
                    </div>

                    <p>Канбан</p>
                    <p>Список</p>
                    <p>Календар</p>
                </div>
            </div>

            <div className="bottom">
                <div className="card bg-transparent">
                    <div className="card-header position-relative bg-transparent p-0">
                        <div className="rectangle"><p>Название (0)</p></div>
                        <div className="plus"><h5>+</h5></div>
                    </div>
                    <div className="card-body bg-transparent p-0">
                        <h2 className=" text-center">0 руб</h2>
                        <button type="button" onClick={() => props.update_state({col: 1})}
                                className={`btn shadow-none btn btn-outline-info btn-light rounded-0 mt-3 btn-block ${props.col === 1 ? "active" : ""}`}>+
                            Быстрая сделка
                        </button>
                        <Collapse isOpen={props.col === 1 ? true : false}>

                            <div className="card">
                                <div className="card-header bg-white px-2">
                                    <p className="text-black-50 mb-0">:: клиент</p>
                                    <div className="border p-2">
                                        <label htmlFor="qwert" className="text-black-50">контакт</label>
                                        <div className="input-group">
                                            <div
                                                className="input-group-prepend d-flex justify-content-center align-items-center p-2">
                                                <img src="/image/user.png" alt="Error"/>
                                            </div>
                                            <input id="qwert" className="form-control" type="text" name="name"
                                                   placeholder="Имя контакт"/>
                                            <div
                                                className="input-group-append d-flex justify-content-center align-items-center p-2">
                                                <img src="/image/search.png" alt=""/>
                                            </div>
                                        </div>

                                        <p className="text-black-50 mt-2">+добавит участники</p>
                                        <label htmlFor="qwerty" className="text-black-50">компания</label>
                                        <div className="input-group">
                                            <div
                                                className="input-group-prepend d-flex justify-content-center align-items-center p-2">
                                                <img src="/image/telephone.png" alt="Error"/>
                                            </div>
                                            <input id="qwerty" className="form-control" type="text" name="name"
                                                   placeholder="Название компания"/>
                                            <div
                                                className="input-group-append d-flex justify-content-center align-items-center p-2">
                                                <img src="/image/search.png" alt=""/>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="card-body">
                                    <label htmlFor="qwerty1" className="text-black-50 mt-5">::Название</label>
                                    <input id="qwerty1" className="form-control" type="text" name="name"
                                           placeholder="сделка #"/>

                                    <label htmlFor="qwerty1" className="text-black-50 mt-5">::Сумма и валюта</label>
                                    <div className="d-flex">
                                        <input id="qwerty1" className="form-control mr-2 input" type="text" name="name"
                                               placeholder="0,00"/>
                                        <select>
                                            <option value="">Pоссийский рубл</option>
                                            <option value="">Долллар США</option>
                                            <option value="">Евро</option>
                                            <option value="">Гривна</option>
                                            <option value="">Белорусский рубл</option>
                                        </select>
                                    </div>
                                    <div className="d-flex mt-3 justify-content-between">
                                        <p className="text-black-50 mt-2">Виыбрат пол</p>
                                        <img src="/image/image.jpg" className="imgg" alt="Error"/>
                                    </div>

                                </div>
                                <div className="card-footer d-flex justify-content-between bg-white">
                                    <button type="button" className="btn btn-primary">Сохранит</button>
                                    <button type="button" className="btn" onClick={() => props.update_state({col: 0})}>Отмена</button>
                                </div>
                            </div>

                        </Collapse>
                    </div>
                </div>
                <div className="card bg-transparent">
                    <div className="card-header bg-transparent p-0">
                        <div className="rectangle1"><p>Название (0)</p></div>
                    </div>
                    <div className="card-body bg-transparent p-0">
                        <h2 className=" text-center">0 руб</h2>
                        <button type="button" onClick={() => props.update_state({col: 2})}
                                className={`btn shadow-none btn btn-outline-info rounded-0 text-white mt-3 btn-block ${props.col === 2 ? "active" : ""}`}>+
                        </button>
                        <Collapse isOpen={props.col === 2 ? true : false}>

                            <div className="card">
                                <div className="card-header bg-white px-2">
                                    <p className="text-black-50 mb-0">:: клиент</p>
                                    <div className="border p-2">
                                        <label htmlFor="qwert" className="text-black-50">контакт</label>
                                        <div className="input-group">
                                            <div
                                                className="input-group-prepend d-flex justify-content-center align-items-center p-2">
                                                <img src="/image/user.png" alt="Error"/>
                                            </div>
                                            <input id="qwert" className="form-control" type="text" name="name"
                                                   placeholder="Имя контакт"/>
                                            <div
                                                className="input-group-append d-flex justify-content-center align-items-center p-2">
                                                <img src="/image/search.png" alt=""/>
                                            </div>
                                        </div>

                                        <p className="text-black-50 mt-2">+добавит участники</p>
                                        <label htmlFor="qwerty" className="text-black-50">компания</label>
                                        <div className="input-group">
                                            <div
                                                className="input-group-prepend d-flex justify-content-center align-items-center p-2">
                                                <img src="/image/telephone.png" alt="Error"/>
                                            </div>
                                            <input id="qwerty" className="form-control" type="text" name="name"
                                                   placeholder="Название компания"/>
                                            <div
                                                className="input-group-append d-flex justify-content-center align-items-center p-2">
                                                <img src="/image/search.png" alt=""/>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="card-body">
                                    <label htmlFor="qwerty1" className="text-black-50 mt-5">::Название</label>
                                    <input id="qwerty1" className="form-control" type="text" name="name"
                                           placeholder="сделка #"/>

                                    <label htmlFor="qwerty1" className="text-black-50 mt-5">::Сумма и валюта</label>
                                    <div className="d-flex">
                                        <input id="qwerty1" className="form-control mr-2 input" type="text" name="name"
                                               placeholder="0,00"/>
                                        <select>
                                            <option value="">Pоссийский рубл</option>
                                            <option value="">Долллар США</option>
                                            <option value="">Евро</option>
                                            <option value="">Гривна</option>
                                            <option value="">Белорусский рубл</option>
                                        </select>
                                    </div>
                                    <div className="d-flex mt-3 justify-content-between">
                                        <p className="text-black-50 mt-2">Виыбрат пол</p>
                                        <img src="/image/image.jpg" className="imgg" alt="Error"/>
                                    </div>

                                </div>
                                <div className="card-footer d-flex justify-content-between bg-white">
                                    <button type="button" className="btn btn-primary">Сохранит</button>
                                    <button type="button" className="btn" onClick={() => props.update_state({col: 0})}>Отмена</button>
                                </div>
                            </div>

                        </Collapse>
                    </div>
                </div>
                <div className="card bg-transparent">
                    <div className="card-header bg-transparent p-0">
                        <div className="rectangle2"><p>Название (0)</p></div>
                    </div>
                    <div className="card-body bg-transparent p-0">
                        <h2 className=" text-center">0 руб</h2>
                        <button type="button" onClick={() => props.update_state({col: 3})}
                                className={`btn shadow-none btn btn-outline-info rounded-0 text-white mt-3 btn-block ${props.col === 3 ? "active" : ""}`}>+
                        </button>

                        <Collapse isOpen={props.col === 3 ? true : false}>

                            <div className="card">
                                <div className="card-header bg-white px-2">
                                    <p className="text-black-50 mb-0">:: клиент</p>
                                    <div className="border p-2">
                                        <label htmlFor="qwert" className="text-black-50">контакт</label>
                                        <div className="input-group">
                                            <div
                                                className="input-group-prepend d-flex justify-content-center align-items-center p-2">
                                                <img src="/image/user.png" alt="Error"/>
                                            </div>
                                            <input id="qwert" className="form-control" type="text" name="name"
                                                   placeholder="Имя контакт"/>
                                            <div
                                                className="input-group-append d-flex justify-content-center align-items-center p-2">
                                                <img src="/image/search.png" alt=""/>
                                            </div>
                                        </div>

                                        <p className="text-black-50 mt-2">+добавит участники</p>
                                        <label htmlFor="qwerty" className="text-black-50">компания</label>
                                        <div className="input-group">
                                            <div
                                                className="input-group-prepend d-flex justify-content-center align-items-center p-2">
                                                <img src="/image/telephone.png" alt="Error"/>
                                            </div>
                                            <input id="qwerty" className="form-control" type="text" name="name"
                                                   placeholder="Название компания"/>
                                            <div
                                                className="input-group-append d-flex justify-content-center align-items-center p-2">
                                                <img src="/image/search.png" alt=""/>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="card-body">
                                    <label htmlFor="qwerty1" className="text-black-50 mt-5">::Название</label>
                                    <input id="qwerty1" className="form-control" type="text" name="name"
                                           placeholder="сделка #"/>

                                    <label htmlFor="qwerty1" className="text-black-50 mt-5">::Сумма и валюта</label>
                                    <div className="d-flex">
                                        <input id="qwerty1" className="form-control mr-2 input" type="text" name="name"
                                               placeholder="0,00"/>
                                        <select>
                                            <option value="">Pоссийский рубл</option>
                                            <option value="">Долллар США</option>
                                            <option value="">Евро</option>
                                            <option value="">Гривна</option>
                                            <option value="">Белорусский рубл</option>
                                        </select>
                                    </div>
                                    <div className="d-flex mt-3 justify-content-between">
                                        <p className="text-black-50 mt-2">Виыбрат пол</p>
                                        <img src="/image/image.jpg" className="imgg" alt="Error"/>
                                    </div>

                                </div>
                                <div className="card-footer d-flex justify-content-between bg-white">
                                    <button type="button" className="btn btn-primary">Сохранит</button>
                                    <button type="button" className="btn" onClick={() => props.update_state({col: 0})}>Отмена</button>
                                </div>
                            </div>

                        </Collapse>

                    </div>
                </div>
                <div className="card bg-transparent">
                    <div className="card-header bg-transparent p-0">
                        <div className="rectangle3"><p>Название (0)</p></div>
                    </div>
                    <div className="card-body bg-transparent p-0">
                        <h2 className=" text-center">0 руб</h2>
                        <button type="button" onClick={() => props.update_state({col: 4})}
                                className={`btn shadow-none btn btn-outline-info rounded-0 text-white mt-3 btn-block ${props.col === 4 ? "active" : ""}`}>+
                        </button>

                        <Collapse isOpen={props.col === 4 ? true : false}>

                            <div className="card">
                                <div className="card-header bg-white px-2">
                                    <p className="text-black-50 mb-0">:: клиент</p>
                                    <div className="border p-2">
                                        <label htmlFor="qwert" className="text-black-50">контакт</label>
                                        <div className="input-group">
                                            <div
                                                className="input-group-prepend d-flex justify-content-center align-items-center p-2">
                                                <img src="/image/user.png" alt="Error"/>
                                            </div>
                                            <input id="qwert" className="form-control" type="text" name="name"
                                                   placeholder="Имя контакт"/>
                                            <div
                                                className="input-group-append d-flex justify-content-center align-items-center p-2">
                                                <img src="/image/search.png" alt=""/>
                                            </div>
                                        </div>

                                        <p className="text-black-50 mt-2">+добавит участники</p>
                                        <label htmlFor="qwerty" className="text-black-50">компания</label>
                                        <div className="input-group">
                                            <div
                                                className="input-group-prepend d-flex justify-content-center align-items-center p-2">
                                                <img src="/image/telephone.png" alt="Error"/>
                                            </div>
                                            <input id="qwerty" className="form-control" type="text" name="name"
                                                   placeholder="Название компания"/>
                                            <div
                                                className="input-group-append d-flex justify-content-center align-items-center p-2">
                                                <img src="/image/search.png" alt=""/>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="card-body">
                                    <label htmlFor="qwerty1" className="text-black-50 mt-5">::Название</label>
                                    <input id="qwerty1" className="form-control" type="text" name="name"
                                           placeholder="сделка #"/>

                                    <label htmlFor="qwerty1" className="text-black-50 mt-5">::Сумма и валюта</label>
                                    <div className="d-flex">
                                        <input id="qwerty1" className="form-control mr-2 input" type="text" name="name"
                                               placeholder="0,00"/>
                                        <select>
                                            <option value="">Pоссийский рубл</option>
                                            <option value="">Долллар США</option>
                                            <option value="">Евро</option>
                                            <option value="">Гривна</option>
                                            <option value="">Белорусский рубл</option>
                                        </select>
                                    </div>
                                    <div className="d-flex mt-3 justify-content-between">
                                        <p className="text-black-50 mt-2">Виыбрат пол</p>
                                        <img src="/image/image.jpg" className="imgg" alt="Error"/>
                                    </div>

                                </div>
                                <div className="card-footer d-flex justify-content-between bg-white">
                                    <button type="button" className="btn btn-primary">Сохранит</button>
                                    <button type="button" className="btn" onClick={() => props.update_state({col: 0})}>Отмена</button>
                                </div>
                            </div>

                        </Collapse>

                    </div>
                </div>
                <div className="card bg-transparent">
                    <div className="card-header bg-transparent p-0">
                        <div className="rectangle4"><p>Название (0)</p></div>
                    </div>
                    <div className="card-body bg-transparent p-0">
                        <h2 className=" text-center">0 руб</h2>
                        <button type="button" onClick={() => props.update_state({col : 5})}
                                className={`btn shadow-none btn btn-outline-info rounded-0 text-white mt-3 btn-block ${props.col === 5 ? "active" : ""}`}>+
                        </button>

                        <Collapse isOpen={props.col === 5 ? true : false}>

                            <div className="card">
                                <div className="card-header bg-white px-2">
                                    <p className="text-black-50 mb-0">:: клиент</p>
                                    <div className="border p-2">
                                        <label htmlFor="qwert" className="text-black-50">контакт</label>
                                        <div className="input-group">
                                            <div
                                                className="input-group-prepend d-flex justify-content-center align-items-center p-2">
                                                <img src="/image/user.png" alt="Error"/>
                                            </div>
                                            <input id="qwert" className="form-control" type="text" name="name"
                                                   placeholder="Имя контакт"/>
                                            <div
                                                className="input-group-append d-flex justify-content-center align-items-center p-2">
                                                <img src="/image/search.png" alt=""/>
                                            </div>
                                        </div>

                                        <p className="text-black-50 mt-2">+добавит участники</p>
                                        <label htmlFor="qwerty" className="text-black-50">компания</label>
                                        <div className="input-group">
                                            <div
                                                className="input-group-prepend d-flex justify-content-center align-items-center p-2">
                                                <img src="/image/telephone.png" alt="Error"/>
                                            </div>
                                            <input id="qwerty" className="form-control" type="text" name="name"
                                                   placeholder="Название компания"/>
                                            <div
                                                className="input-group-append d-flex justify-content-center align-items-center p-2">
                                                <img src="/image/search.png" alt=""/>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="card-body">
                                    <label htmlFor="qwerty1" className="text-black-50 mt-5">::Название</label>
                                    <input id="qwerty1" className="form-control" type="text" name="name"
                                           placeholder="сделка #"/>

                                    <label htmlFor="qwerty1" className="text-black-50 mt-5">::Сумма и валюта</label>
                                    <div className="d-flex">
                                        <input id="qwerty1" className="form-control mr-2 input" type="text" name="name"
                                               placeholder="0,00"/>
                                        <select>
                                            <option value="">Pоссийский рубл</option>
                                            <option value="">Долллар США</option>
                                            <option value="">Евро</option>
                                            <option value="">Гривна</option>
                                            <option value="">Белорусский рубл</option>
                                        </select>
                                    </div>
                                    <div className="d-flex mt-3 justify-content-between">
                                        <p className="text-black-50 mt-2">Виыбрат пол</p>
                                        <img src="/image/image.jpg" className="imgg" alt="Error"/>
                                    </div>

                                </div>
                                <div className="card-footer d-flex justify-content-between bg-white">
                                    <button type="button" className="btn btn-primary">Сохранит</button>
                                    <button type="button" className="btn" onClick={() => props.update_state({col: 0})}>Отмена</button>
                                </div>
                            </div>

                        </Collapse>

                    </div>
                </div>
                <div className="card bg-transparent">
                    <div className="card-header bg-transparent p-0">
                        <div className="rectangle5"><p>Название (0)</p></div>
                    </div>
                    <div className="card-body bg-transparent p-0">
                        <h2 className=" text-center">0 руб</h2>
                        <button type="button" onClick={() => props.update_state({col: 6})}
                                className={`btn shadow-none btn btn-outline-info rounded-0 text-white mt-3 btn-block ${props.col === 6 ? "active" : ""}`}>+
                        </button>

                        <Collapse isOpen={props.col === 6 ? true : false}>

                            <div className="card">
                                <div className="card-header bg-white px-2">
                                    <p className="text-black-50 mb-0">:: клиент</p>
                                    <div className="border p-2">
                                        <label htmlFor="qwert" className="text-black-50">контакт</label>
                                        <div className="input-group">
                                            <div
                                                className="input-group-prepend d-flex justify-content-center align-items-center p-2">
                                                <img src="/image/user.png" alt="Error"/>
                                            </div>
                                            <input id="qwert" className="form-control" type="text" name="name"
                                                   placeholder="Имя контакт"/>
                                            <div
                                                className="input-group-append d-flex justify-content-center align-items-center p-2">
                                                <img src="/image/search.png" alt=""/>
                                            </div>
                                        </div>

                                        <p className="text-black-50 mt-2">+добавит участники</p>
                                        <label htmlFor="qwerty" className="text-black-50">компания</label>
                                        <div className="input-group">
                                            <div
                                                className="input-group-prepend d-flex justify-content-center align-items-center p-2">
                                                <img src="/image/telephone.png" alt="Error"/>
                                            </div>
                                            <input id="qwerty" className="form-control" type="text" name="name"
                                                   placeholder="Название компания"/>
                                            <div
                                                className="input-group-append d-flex justify-content-center align-items-center p-2">
                                                <img src="/image/search.png" alt=""/>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="card-body">
                                    <label htmlFor="qwerty1" className="text-black-50 mt-5">::Название</label>
                                    <input id="qwerty1" className="form-control" type="text" name="name"
                                           placeholder="сделка #"/>

                                    <label htmlFor="qwerty1" className="text-black-50 mt-5">::Сумма и валюта</label>
                                    <div className="d-flex">
                                        <input id="qwerty1" className="form-control mr-2 input" type="text" name="name"
                                               placeholder="0,00"/>
                                        <select>
                                            <option value="">Pоссийский рубл</option>
                                            <option value="">Долллар США</option>
                                            <option value="">Евро</option>
                                            <option value="">Гривна</option>
                                            <option value="">Белорусский рубл</option>
                                        </select>
                                    </div>
                                    <div className="d-flex mt-3 justify-content-between">
                                        <p className="text-black-50 mt-2">Виыбрат пол</p>
                                        <img src="/image/image.jpg" className="imgg" alt="Error"/>
                                    </div>

                                </div>
                                <div className="card-footer d-flex justify-content-between bg-white">
                                    <button type="button" className="btn btn-primary">Сохранит</button>
                                    <button type="button" className="btn" onClick={() => props.update_state({col: 0})}>Отмена</button>
                                </div>
                            </div>

                        </Collapse>

                    </div>
                </div>
                <div className="card bg-transparent">
                    <div className="card-header bg-transparent p-0">
                        <div className="rectangle6"><p>Название (0)</p></div>
                    </div>
                    <div className="card-body bg-transparent p-0">
                        <h2 className=" text-center">0 руб</h2>
                        <button type="button" onClick={() => props.update_state({col: 7})}
                                className={`btn shadow-none btn btn-outline-info rounded-0 text-white mt-3 btn-block ${props.col === 7 ? "active" : ""}`}>+
                        </button>

                        <Collapse isOpen={props.col === 7 ? true : false}>

                            <div className="card">
                                <div className="card-header bg-white px-2">
                                    <p className="text-black-50 mb-0">:: клиент</p>
                                    <div className="border p-2">
                                        <label htmlFor="qwert" className="text-black-50">контакт</label>
                                        <div className="input-group">
                                            <div
                                                className="input-group-prepend d-flex justify-content-center align-items-center p-2">
                                                <img src="/image/user.png" alt="Error"/>
                                            </div>
                                            <input id="qwert" className="form-control" type="text" name="name"
                                                   placeholder="Имя контакт"/>
                                            <div
                                                className="input-group-append d-flex justify-content-center align-items-center p-2">
                                                <img src="/image/search.png" alt=""/>
                                            </div>
                                        </div>

                                        <p className="text-black-50 mt-2">+добавит участники</p>
                                        <label htmlFor="qwerty" className="text-black-50">компания</label>
                                        <div className="input-group">
                                            <div
                                                className="input-group-prepend d-flex justify-content-center align-items-center p-2">
                                                <img src="/image/telephone.png" alt="Error"/>
                                            </div>
                                            <input id="qwerty" className="form-control" type="text" name="name"
                                                   placeholder="Название компания"/>
                                            <div
                                                className="input-group-append d-flex justify-content-center align-items-center p-2">
                                                <img src="/image/search.png" alt=""/>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="card-body">
                                    <label htmlFor="qwerty1" className="text-black-50 mt-5">::Название</label>
                                    <input id="qwerty1" className="form-control" type="text" name="name"
                                           placeholder="сделка #"/>

                                    <label htmlFor="qwerty1" className="text-black-50 mt-5">::Сумма и валюта</label>
                                    <div className="d-flex">
                                        <input id="qwerty1" className="form-control mr-2 input" type="text" name="name"
                                               placeholder="0,00"/>
                                        <select>
                                            <option value="">Pоссийский рубл</option>
                                            <option value="">Долллар США</option>
                                            <option value="">Евро</option>
                                            <option value="">Гривна</option>
                                            <option value="">Белорусский рубл</option>
                                        </select>
                                    </div>
                                    <div className="d-flex mt-3 justify-content-between">
                                        <p className="text-black-50 mt-2">Виыбрат пол</p>
                                        <img src="/image/image.jpg" className="imgg" alt="Error"/>
                                    </div>

                                </div>
                                <div className="card-footer d-flex justify-content-between bg-white">
                                    <button type="button" className="btn btn-primary">Сохранит</button>
                                    <button type="button" className="btn" onClick={() => props.update_state({col: 0})}>Отмена</button>
                                </div>
                            </div>

                        </Collapse>

                    </div>
                </div>

            </div>

        </div>
    );
};


const mapStateToProps = (state) => {
    return {
        col: state.menu.col,

    }
};

export default connect(mapStateToProps, {update_state})(MainPage);