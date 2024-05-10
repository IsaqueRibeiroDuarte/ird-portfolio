/* Importar esse Arquivo para App.js ► import Interface from "./components/page/Interface" */

import React from "react";
import "../styles/Interface.css";
import { Typewriter } from "react-simple-typewriter";

/* Importa os Ícones do React Icons ► npm install react-icons ► npm install react-icons --save */

/* ÍCONES DO MENU E DA SEÇÃO DO TOPO DO SITE */
import {
  IoSchoolSharp,
  IoLibrarySharp,
} from "react-icons/io5"; /* Sobre Icon, Projetos Icon */

import Logo from "../../assets/image/Logo_RD_Programer.png";

import { ImHome } from "react-icons/im";
import { IoMail } from "react-icons/io5"; /* Contato Icon */

/* ÍCONES DO EMAIL */
import { IoMdDownload } from "react-icons/io"; /* Download CV Icon */

/* ÍCONES DA SEÇÃO SOBRE */
import {
  GiEngagementRing,
  GiBabyBottle,
  GiBookCover,
  GiGuitarHead,
  GiLaptop,
  GiMusicSpell,
} from "react-icons/gi"; /* Casado Icon, Pai de 3 Filhos Icon, Escritor Icon, Compositor Icon, Apaixonado por Tecnologia Icon, Apaixonado por Música Icon */
import { FaBookBible } from "react-icons/fa6"; /* Cristão Icon */

import Imagem from "../../assets/image/Img.png";
import ImgLPDNC from "../../assets/image/LPDNC.png";
import ImgPP from "../../assets/image/PP.png";
import ImgLPC from "../../assets/image/LPCCPXP22.png";
import ImgOM from "../../assets/image/OM.png";
import ImgLPT from "../../assets/image/LPT.png";
import ImgMP from "../../assets/image/MP.png";
import LogoCSS from "../../assets/image/Logo_CSS.svg";
import LogoHTML from "../../assets/image/Logo_HTML.svg";
import LogoJS from "../../assets/image/Logo_JS.png";
import LogoRJS from "../../assets/image/Logo_ReactJS.svg";

const Interface = () => {
  return (
    <>
      <main>
        {/* ---------- SEÇÃO DO MENU ---------- */}
        <header>
          <div id="interface">
            <div className="logo">
              <a href="#interface">
                <img className="logoPage" src={Logo} alt="logo da Página" />
              </a>
            </div>
            {/* <!--/logo--> */}

            {/* Menu para Desktop com Ícones*/}
            <nav className="menu-desktop">
              <ul>
                <li className="menu-list">
                  <a href="#interface">
                    Home
                    <i className="icon">
                      <ImHome />
                    </i>
                  </a>
                </li>

                <li className="menu-list">
                  <a href="#projetos" className="nav-link">
                    Projetos
                    <i className="icon">
                      <IoLibrarySharp />
                    </i>
                  </a>
                </li>

                <li className="menu-list">
                  <a href="#sobre">
                    Sobre
                    <i className="icon">
                      <IoSchoolSharp />
                    </i>
                  </a>
                </li>

                <li className="menu-list">
                  <a href="mailto:isaqueribeiromcb@gmail.com">
                    Contato
                    <i className="icon">
                      <IoMail />
                    </i>
                  </a>
                </li>
              </ul>
            </nav>
            {/* <!--/menu-desktop--> */}
          </div>
          {/* <!--/interface--> */}
        </header>

        {/* ---------- SEÇÃO TOPO DO SITE ---------- */}
        <section className="site-top">
          <div className="interface">
            {/* Texto Inicial da Página */}
            <div className="flex">
              <div className="top-text">
                <h1>Portfolio</h1>
                <h2>
                  Olá, sou Isaque Ribeiro!
                  <br />{" "}
                  <span className="qualities">
                    <Typewriter
                      words={[
                        "Analista de Sistemas",
                        "Fron End Developer",
                        "Full Stack Student",
                        "Web Design Student",
                        "Programming Student",
                      ]}
                      loop={"infinit"}
                      cursor
                      cursorStyle="|"
                      typeSpeed={150}
                      deleteSpeed={130}
                      delaySpeed={1000}
                    />
                  </span>
                </h2>
                <p className="curriculo-text">
                  Baixe meu Currículo, cliando no botão abaixo.
                </p>

                {/* Criando o Botão de Download do Currículo */}
                <div className="cv-btn">
                  <button><a className="down-curriculo" href="https://drive.google.com/uc?export=download&id=1qKtRbr-SdQ09Vpwc-KwoOp7oer1BiHC7">
                    Currículo Vitae
                    <IoMdDownload className="icon-down" />
                    </a>
                  </button>
                </div>
                {/* <!--/cv-btn--> */}
              </div>
              {/* <!--/top-text--> */}

              {/* Imagem de Perfil */}
              <div className="imagem">
                <img src={Imagem} className="top-img" />
              </div>
              {/* <!--/imagem--> */}
            </div>
            {/* <!--flex--> */}
          </div>
          {/* <!--interface--> */}
        </section>
        {/* <!--/site-top--> */}

        {/* ---------- SEÇÃO PROJETOS ---------- */}
        <section id="projetos">
          <div className="interface">
            <h2 className="titulos">
              <IoLibrarySharp /> {/* icone */}
              MEUS <span className="other-color">PROJETOS</span>
            </h2>
            <div className="container">
              <div className="box-projetos">
                <h3>LP - DNC</h3>
                <img src={ImgLPDNC} className="imagem LPDNC" />
                <div class="content">
                  <p>
                    Tecnologias: <img className="imgLogo" src={LogoHTML} />
                    HTML
                    <span className="html-percent"> 55.1%</span>
                    <br />
                    <img className="imgLogo" src={LogoCSS} />
                    CSS
                    <span className="css-percent"> 36.9%</span>
                    <br />
                    <img className="imgLogo" src={LogoJS} />
                    JS
                    <span className="js-percent"> 8.0% </span>
                    <br />
                    Desenvolvimento do primeiro Desafio no Curso Front-end da
                    DNC.
                  </p>
                  <div className="buttons">
                    <a
                      href="https://dnc-teste-landingpage.netlify.app/"
                      target="_blank"
                    >
                      Acessar a Página
                    </a>
                  </div>
                  {/* <!--/buttons--> */}

                  <div className="buttons">
                    <a
                      href="https://github.com/IsaqueRibeiroDuarte/landing-page"
                      target="_blank"
                    >
                      Acessar o Repositório
                    </a>
                  </div>
                  {/* <!--/buttons--> */}
                </div>
                {/* <!--/content--> */}
              </div>
              {/* <!--/box-projetos--> */}

              <div className="box-projetos">
                <h3>LP - Portifólio Teste</h3>
                <img src={ImgLPT} className="imagem LPA" />
                <div class="content">
                  <p>
                    Tecnologias: <img className="imgLogo" src={LogoHTML} />
                    HTML
                    <span className="html-percent"> 44.4%</span>
                    <br />
                    <img className="imgLogo" src={LogoCSS}></img>CSS
                    <span className="css-percent"> 55.6% </span>
                    <br />
                    Desenvolvimento do primeiro modelo de Portifólio do Curso
                    Front-end da DNC.
                  </p>
                  <div className="buttons">
                    <a
                      href="https://desafio-portfolio-dnc.netlify.app/"
                      target="_blank"
                    >
                      Acessar a Página
                    </a>
                  </div>
                  {/* <!--/buttons--> */}

                  <div className="buttons">
                    <a
                      href="https://github.com/IsaqueRibeiroDuarte/portifolio-teste"
                      target="_blank"
                    >
                      Acessar o Repositório
                    </a>
                  </div>
                  {/* <!--/buttons--> */}
                </div>
                {/* <!--/content--> */}
              </div>
              {/* <!--/box-projetos--> */}
            </div>
            {/* <!--/container--> */}

            <div className="container">
              <div className="box-projetos">
                <h3>Pesquisador de Países</h3>
                <img src={ImgPP} className="imagem LPA" />
                <div class="content">
                  <p>
                    Tecnologias: <img className="imgLogo" src={LogoHTML} />
                    HTML
                    <span className="html-percent"> 68.7%</span>
                    <br />
                    <img className="imgLogo" src={LogoJS}></img>JS
                    <span className="js-percent"> 31.3%</span>
                    <br />
                    Esse projeto se trata de um Desenvolvimento de um
                    Pesquisador de Países com consumo de uma API.
                  </p>
                  <div className="buttons">
                    <a
                      href=" https://pesquisador-de-paises-dnc.netlify.app/"
                      target="_blank"
                    >
                      Acessar a Página
                    </a>
                  </div>
                  {/* <!--/buttons--> */}

                  <div className="buttons">
                    <a
                      href="https://github.com/IsaqueRibeiroDuarte/Pesquisador-de-Paises"
                      target="_blank"
                    >
                      Acessar o Repositório
                    </a>
                  </div>
                  {/* <!--/buttons--> */}
                </div>
                {/* <!--/content--> */}
              </div>
              {/* <!--/box-projetos--> */}

              <div className="box-projetos">
                <h3>Landing Page - Countdown</h3>
                <img src={ImgLPC} className="imagem LPDNC" />
                <div class="content">
                  <p>
                    Tecnologias: <img className="imgLogo" src={LogoHTML} />
                    HTML
                    <span className="html-percent"> 27.9%</span>
                    <br />
                    <img className="imgLogo" src={LogoCSS} />
                    CSS
                    <span className="css-percent"> 36.4%</span>
                    <br />
                    <img className="imgLogo" src={LogoJS} />
                    JS
                    <span className="js-percent"> 35.7%</span>
                    <br />
                    Desenvolvimento de um Landing Page com Contador “Countdown”
                    no Curso Front-end da DNC.
                  </p>
                  <div className="buttons">
                    <a
                      href="https://landing-page-ccxp-22-dnc.vercel.app/"
                      target="_blank"
                    >
                      Acessar a Página
                    </a>
                  </div>
                  {/* <!--/buttons--> */}

                  <div className="buttons">
                    <a
                      href="https://github.com/IsaqueRibeiroDuarte/Landing-Page-CCXP22---DNC"
                      target="_blank"
                    >
                      Acessar o Repositório
                    </a>
                  </div>
                  {/* <!--/buttons--> */}
                </div>
                {/* <!--/content--> */}
              </div>
              {/* <!--/box-projetos--> */}
            </div>
            {/* <!--/container--> */}

            <div className="container">
              <div className="box-projetos">
                <h3>Site - Escola de Música</h3>
                <img src={ImgOM} className="imagem LPA" />
                <div class="content">
                  <p>
                    Tecnologias: <img className="imgLogo" src={LogoHTML} />
                    HTML
                    <span className="html-percent"> 82.4%</span>
                    <br />
                    <img className="imgLogo" src={LogoCSS}></img>CSS
                    <span className="css-percent"> 16.3%</span>
                    <br />
                    <img className="imgLogo" src={LogoJS}></img>JS
                    <span className="js-percent"> 1.3%</span>
                    <br />
                    Desenvolvimento de meu primeiro Site para prática e evolução
                    pessoal.
                  </p>
                  <div className="buttons">
                    <a
                      href="https://orffmusic-site.netlify.app/"
                      target="_blank"
                    >
                      Acessar a Página
                    </a>
                  </div>
                  {/* <!--/buttons--> */}

                  <div className="buttons">
                    <a
                      href="https://github.com/IsaqueRibeiroDuarte/OrffMusic-Site"
                      target="_blank"
                    >
                      Acessar o Repositório
                    </a>
                  </div>
                  {/* <!--/buttons--> */}
                </div>
                {/* <!--/content--> */}
              </div>
              {/* <!--/box-projetos--> */}
              
              <div className="box-projetos">
                <h3>IRD Portfolio</h3> React JS <img className="imgLogo" src={LogoRJS}></img>
                <img src={ImgMP} className="imagem LPA" />
                <div class="content">
                  <p>
                    Tecnologias: <img className="imgLogo" src={LogoHTML} />
                    HTML
                    <span className="html-percent"> 5.3%</span>
                    <br />
                    <img className="imgLogo" src={LogoCSS}></img>CSS
                    <span className="css-percent"> 29.6%</span>
                    <br />
                    <img className="imgLogo" src={LogoJS}></img>JS
                    <span className="js-percent"> 65.1%</span>
                    <br />
                    Desenvolvimento da primeira versão do meu Portfolio.
                  </p>
                  <div className="buttons">
                    <a
                      href="ird-meu-portfolio.vercel.app"
                      target="_blank"
                    >
                      Acessar a Página
                    </a>
                  </div>
                  {/* <!--/buttons--> */}

                  <div className="buttons">
                    <a
                      href="https://github.com/IsaqueRibeiroDuarte/ird-portfolio"
                      target="_blank"
                    >
                      Acessar o Repositório
                    </a>
                  </div>
                  {/* <!--/buttons--> */}
                </div>
                {/* <!--/content--> */}
              </div>
              {/* <!--/box-projetos--> */}
            </div>
            {/* <!--/container--> */}
          </div>
          {/* <!--/interface--> */}
        </section>
        {/* <!--/projetos--> */}

        {/* ---------- SEÇÃO SOBRE ---------- */}
        <section id="sobre">
          <div className="interface">
            <div className="titulo-icon">
              <h2 className="titulos">
                <IoSchoolSharp /> {/* icone */}
                SOBRE <span className="other-color">MIM</span>
              </h2>
            </div>
            <div className="flex">
              <div className="sobre-box">
                <p>Quem sou eu?</p>

                <ul>
                  <li className="lista ativo">
                    <a href="#">
                      <span className="iSobre">
                        <i className="icon-sobre">
                          <GiEngagementRing />
                        </i>
                      </span>
                      <span className="text-sobre">Casado</span>
                    </a>
                  </li>

                  <li className="lista">
                    <a href="#">
                      <span className="iSobre">
                        <i className="icon-sobre">
                          <GiBabyBottle />
                        </i>
                      </span>
                      <span className="text-sobre">
                        Pai de 3<br />
                        lindos filhos
                      </span>
                    </a>
                  </li>

                  <li className="lista">
                    <a href="#">
                      <span className="iSobre">
                        <i className="icon-sobre">
                          <FaBookBible />
                        </i>
                      </span>
                      <span className="text-sobre">Cristão</span>
                    </a>
                  </li>

                  <li className="lista">
                    <a href="#">
                      <span className="iSobre">
                        <i className="icon-sobre">
                          <GiBookCover />
                        </i>
                      </span>
                      <span className="text-sobre">Escritor</span>
                    </a>
                  </li>

                  <li className="lista">
                    <a href="#">
                      <span className="iSobre">
                        <i className="icon-sobre">
                          <GiGuitarHead />
                        </i>
                      </span>
                      <span className="text-sobre">Compositor</span>
                    </a>
                  </li>

                  <li className="lista">
                    <a href="#">
                      <span className="iSobre">
                        <i className="icon-sobre">
                          <GiLaptop />
                        </i>
                      </span>
                      <span className="text-sobre">
                        Apaixonado <br />
                        por tecnologias
                      </span>
                    </a>
                  </li>

                  <li className="lista">
                    <a href="#">
                      <span className="iSobre">
                        <i className="icon-sobre">
                          <GiMusicSpell />
                        </i>
                      </span>
                      <span className="text-sobre">
                        Apaixonado
                        <br />
                        por música
                      </span>
                    </a>
                  </li>
                </ul>

                <div className="formacao">
                  <div className="titulo-icon">
                    <h2 className="titulos">
                      <IoSchoolSharp /> {/* icone */}
                      MINHA <span className="other-color">FORMAÇÃO</span>
                    </h2>
                  </div>
                  <div className="formacao-box">
                    <br />
                    <h4>
                    <span className="point-list">•</span> Análise e
                    Desenvolvimento de Sistemas - "Universidade Estácio de Sá" -
                    Ano: 2018-2020
                    </h4>
                    <h4>
                    <span className="point-list">•</span> Pós - MBA em Segurança
                    da Informação - "Descomplica Pós" - Ano: 2021
                    </h4>
                    
                    <h4>
                    <span className="point-list">•</span> Tecnologias Aplicadas
                    à Educação - "Descomplica Pós" - Ano: 2021 
                    </h4>
                    
                    <h4>
                    <span className="point-list">•</span> Perito Judicial - "Jus
                    Expert" - Ano: 2023/2024 
                    </h4>
                    
                    <h4>
                    <span className="point-list">•</span> Perito Grafotécnico -
                    "Jus Expert" - Ano: 2023/2024
                    </h4>
                    
                    <h4>
                    <span className="point-list">•</span> Perito em
                    Documentoscopia - "Jus Expert" - Ano: 2023/2024
                    </h4>
                    
                    <h4>
                    <span className="point-list">•</span> Perito Avaliador de
                    Bens Móveis - "Jus Expert" - Ano: 2023/2024
                    </h4>
                    
                    <h4>
                    <span className="point-list">•</span> Perito Investigador de
                    Usucapeão - "Jus Expert" - Ano: 2023/2024 
                    </h4>
                    <br />
                  </div>
                </div>
                {/* <!--/formacao--> */}
              </div>
              {/* <!--/sobre-box--> */}
            </div>
            {/* <!--/flex--> */}
          </div>
          {/* <!--/interface--> */}
        </section>
        {/* <!--/sobre--> */}
      </main>
    </>
  );
};

export default Interface;
