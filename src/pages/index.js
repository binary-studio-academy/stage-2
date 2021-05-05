import React from "react";
import classNames from "classnames";
import { Link, graphql } from "gatsby";
import { SEO, Header, Footer } from "../components";
import { isDateInThePast } from "../utils";
import {
  volodymyrKushnir2017Avatar,
  romanSahan2017Avatar,
  alexandrTovmach2018Avatar,
  pavelNemchenko2017Avatar,
  rostyslavDiakiv2018Avatar,
  nikitaKrasnov2018Avatar,
  kyryloLesohorskyi2020Avatar
 } from "../assets/images/avatars/intro-rounded";
import "./index.css";

const getAuthorAvatar = author => {
  switch (author) {
    case "Володимир Кушнір":
      return volodymyrKushnir2017Avatar;
    case "Роман Саган":
      return romanSahan2017Avatar;
    case "Александр Товмач":
      return alexandrTovmach2018Avatar;
    case "Павел Немченко":
      return pavelNemchenko2017Avatar;
    case "Ростислав Дяків":
      return rostyslavDiakiv2018Avatar;
    case "Никита Краснов":
      return nikitaKrasnov2018Avatar;
    case "Кирилл Лесогорский":
     return kyryloLesohorskyi2020Avatar;
    default:
      return undefined;
  }
}

const Index = ({ data: { allMdx: { edges: data } } }) => (
  <>
    <SEO description="Hi" keywords={[]} />
    <div className="container grid-lg">
      <div className="columns">
        <div className="column">
          <Header />
          <article>
            <div className="hero">
              <div className="hero-body text-center">
                <div><strong>— Hey, привіт, привет <span className="waving-hand">👋</span>!</strong> Це — лекції другого етапу для</div>
                <h1 className="mainpage-link">
                  <a href="https://academy.binary-studio.com/" title="Binary Studio Academy">
                    <svg
                      className="logo"
                      viewBox="0 0 105 99"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="none" fillRule="evenodd">
                        <path
                          d="M44.9269232,62.8812382 C45.1942077,63.4971831 44.4998288,64.0859815 43.937223,63.7190356 L14.3088315,44.3757436 C12.0499973,43.0773915 12.565875,40.6042509 14.3088315,39.8497652 L30.8944879,33.724951 C31.5430733,33.4853129 32.2645545,33.7942214 32.5411846,34.427952 L44.9269232,62.8812382 Z"
                          fill="#FFC712"
                          transform="translate(15 14)"
                        />
                        <path
                          d="M72.1925572,59.2141192 L53.9994557,67.0903512 C52.8396654,67.5930297 51.4527766,66.9649156 50.8995165,65.6880936 L27.463527,11.5645066 C26.9093323,10.2848763 27.4027806,8.83862262 28.5653746,8.33500806 L46.7575415,0.458776008 C47.9182665,-0.0429663717 49.3060897,0.584211603 49.8593499,1.86103363 L73.2953393,55.9846206 C73.8485995,57.2642509 73.3551513,58.7105046 72.1925572,59.2141192"
                          fill="#00ADEE"
                          transform="translate(15 14)"
                        />
                        <path
                          d="M24.6823666,16.0343198 C25.9608462,18.9343158 28.8953681,25.7377927 30.0420746,28.401895 C30.3009481,29.0000543 30.0046922,29.68995 29.3962929,29.9183552 L16.7171021,34.6746108 C16.1582345,34.8833581 15.622731,34.319834 15.8582404,33.7712873 L23.4908011,16.0408724 C23.7160304,15.5194722 24.4533991,15.5138557 24.6823666,16.0343198"
                          fill="#EC1848"
                          transform="translate(15 14)"
                        />
                        <path
                          d="M25.3513254,56.3505369 L11.4272992,47.0561337 C10.8759081,46.6882517 10.1263901,46.9082321 9.86004016,47.5157522 L1.88356093,65.7216991 C1.47983053,66.6456165 2.41439165,67.5863835 3.33867261,67.1866745 L25.2279634,57.7144149 C25.7943074,57.4691603 25.8643995,56.6931445 25.3513254,56.3505369"
                          fill="#EC1848"
                          transform="translate(15 14)"
                        />
                        <path
                          d="M25.3513254,56.3505369 L11.4272992,47.0561337 C10.8759081,46.6882517 10.1263901,46.9082321 9.86004016,47.5157522 L19.2617251,60.2961416 L25.2279634,57.7144149 C25.7943074,57.4691603 25.8643995,56.6931445 25.3513254,56.3505369"
                          fill="#C22035"
                          transform="translate(15 14)"
                        />
                      </g>
                    </svg>
                    <strong>Binary Studio Academy</strong>
                  </a>
                </h1>
                <p>— щорічного літнього безкоштовного онлайн-інтенсиву з розробки веб-додатків.</p>
              </div>
            </div>
            <div className="columns">
              {data
                .filter(({ node: { exports: { metadata: { hiddenFromMainPage }}}}) => !hiddenFromMainPage)
                .map(({ node: { fields: { slug }, exports: { metadata: { title, description, author, duration, publishedAt } } } }, index) => {

                const lectureTitle = <h2 className="lecture-title">
                  <span><strong>{title}</strong></span>
                </h2>;
                const isPublished = isDateInThePast(publishedAt);
                return (
                  <div key={index} className="column col-6 col-sm-12">
                    <div className={classNames("panel", "lecture-panel", {
                      "disabled": !isPublished
                    })}>
                      <div className="panel-header">
                        {
                          isPublished
                          ? <Link to={`.${slug}`} title={title}>{lectureTitle}</Link>
                          : lectureTitle
                        }
                      </div>
                      <div className="panel-body">
                        <span dangerouslySetInnerHTML={{ __html: description }} />
                      </div>
                      <div className="panel-footer">
                        <div className="lecture-meta">
                          <div className="lecture-author">
                            <div className="avatar-wrapper">
                              <object data={getAuthorAvatar(author)} role="img" aria-label={author}></object>
                            </div>
                            <div className="lecture-author-name">
                              {author}
                            </div>
                          </div>
                          {
                            duration &&
                            <span className="lecture-duration text-gray"><small>{duration}</small></span>
                          }
                        </div>
                        {<span className="lecture-number text-gray"><small>#{index+1}</small></span>}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </article>
          <Footer />
        </div>
      </div>
    </div>
  </>
);

export const pageQuery = graphql`
  query {
    allMdx (filter: {
      fileAbsolutePath: {
        regex: "/pages\/lectures\/.*\/index[.]mdx$/"
      }
    }, sort: {
      fields: [exports___metadata___orderId]
      order: ASC
    }) {
      edges {
        node {
          fields {
            slug
          }
          exports {
            metadata {
              orderId
              title
              description
              author
              publishedAt
              duration
              hiddenFromMainPage
            }
          }
        }
      }
    }
  }`
;

export default Index;