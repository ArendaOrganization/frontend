import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import MenuRightLogined from "../Menus/MenuRightLogined/MenuRightLogined";
import LeftMenu from "../Menus/MenuLeft/LeftMenu";
import PagesManu from "../Menus/PagesMenu/PagesManu";
import "../mainStyle.css";

const HelpPage = function () {
    const authSlice = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div className="main">
            <LeftMenu/>
            <div className="main__inner" id="main__inner">

                <div className="container container-m">
                    <PagesManu/>
                    <h1 className="container__h">Вопросы и ответы / Помощь / Поддержка</h1>
                    <div className="container__inner">
                        <p className="form-p">
                            <b>Не нашли свой вопрос? <a href="" className="form-link">Задайте его нам здесь.</a></b>
                        </p>
                        <div className="question opened">
                            <p className="question__h">
                                Некий часто задаваемый вопрос
                            </p>
                            <div className="question__text">
                                <p>
                                    Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые
                                    модификации, например, юмористические вставки или слова, которые даже отдалённо не
                                    напоминают латынь.
                                </p>
                                <p>
                                    Если вам нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите
                                    какой-нибудь шутки, скрытой в середине абзаца. Также все другие известные генераторы
                                    Lorem Ipsum используют один и тот же текст, который они просто повторяют, пока не
                                    достигнут нужный объём. Это делает предлагаемый здесь генератор единственным
                                    настоящим Lorem Ipsum генератором. Он использует словарь из более чем 200 латинских
                                    слов, а также набор моделей предложений.
                                </p>
                                <p>
                                    В результате сгенерированный Lorem Ipsum выглядит правдоподобно, не имеет
                                    повторяющихся абзацев или "невозможных" слов.
                                </p>
                            </div>
                        </div>
                        <div className="question">
                            <p className="question__h">
                                Некий часто задаваемый вопрос
                            </p>
                            <div className="question__text">
                                <p>
                                    Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые
                                    модификации, например, юмористические вставки или слова, которые даже отдалённо не
                                    напоминают латынь.
                                </p>
                                <p>
                                    Если вам нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите
                                    какой-нибудь шутки, скрытой в середине абзаца. Также все другие известные генераторы
                                    Lorem Ipsum используют один и тот же текст, который они просто повторяют, пока не
                                    достигнут нужный объём. Это делает предлагаемый здесь генератор единственным
                                    настоящим Lorem Ipsum генератором. Он использует словарь из более чем 200 латинских
                                    слов, а также набор моделей предложений.
                                </p>
                                <p>
                                    В результате сгенерированный Lorem Ipsum выглядит правдоподобно, не имеет
                                    повторяющихся абзацев или "невозможных" слов.
                                </p>
                            </div>
                        </div>
                        <div className="question">
                            <p className="question__h">
                                Некий часто задаваемый вопрос
                            </p>
                            <div className="question__text">
                                <p>
                                    Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые
                                    модификации, например, юмористические вставки или слова, которые даже отдалённо не
                                    напоминают латынь.
                                </p>
                                <p>
                                    Если вам нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите
                                    какой-нибудь шутки, скрытой в середине абзаца. Также все другие известные генераторы
                                    Lorem Ipsum используют один и тот же текст, который они просто повторяют, пока не
                                    достигнут нужный объём. Это делает предлагаемый здесь генератор единственным
                                    настоящим Lorem Ipsum генератором. Он использует словарь из более чем 200 латинских
                                    слов, а также набор моделей предложений.
                                </p>
                                <p>
                                    В результате сгенерированный Lorem Ipsum выглядит правдоподобно, не имеет
                                    повторяющихся абзацев или "невозможных" слов.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <MenuRightLogined/>
            </div>
        </div>
    );
};

export default HelpPage;