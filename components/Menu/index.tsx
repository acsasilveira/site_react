import React from "react";
import { FcReuse } from "react-icons/fc";
import * as S from "./styles";
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <S.Cabecalho>
            <picture>
                <Link to="/">
                    <FcReuse />
                </Link>
            </picture>
            <nav>
                <ul> 
                    <li> 
                        <Link to="/Login">Login</Link>
                    </li>
                    <li>
                        <Link to="/Cadastrar">Cadastrar</Link>
                    </li>
                </ul>
            </nav>
        </S.Cabecalho>
    );
};

export default Menu;