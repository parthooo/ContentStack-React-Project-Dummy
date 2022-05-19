import React, { useEffect, useState } from "react";
import { getPageComponents } from "../../api/getData";
import { Container } from "react-bootstrap";
import {
  PAGE_VERSION,
  COMPONENT,
  CARD_COMPONENT,
  JUMBORTRON_COMPONENT,
  QUESTION_COMPONENT,
  CONDITIONAL_COMPONENT,
  VIDEO_COMPONENT,
  CARD_GROUP_COMPONENT,
} from "../../constants/constants";
import CardBox from "../../components/card/card";
import JumbotronComp from "../../components/Jumbotron/JumbotronComp";
import Questions from "../../components/Question/Questions";
import ConditionalComps from "../../components/ConditionalComp/ConditionalComps";
import VideoComp from "../../components/Video/VideoComp";
import CardGroupComp from "../../components/CardGroup/CardGroupComp";


const Page = ({ locator }) => {
  const [loading, setLoading] = useState(true);
  const [pageData, setPageData] = useState(null);
  useEffect(() => {
    setLoading(true);
    setPageData(null);
    getPageComponents(locator, PAGE_VERSION, setPageData, setLoading);
  }, [locator]);
  console.log("PAGE DATA", pageData);
  return (
    <>
      {loading ? null : (
        <>
          {pageData.select_component.length > 0 ? (
            <div data-pageref={pageData.uid} data-contenttype="pages" data-locale="en-us">
              {pageData.select_component.map((data) => {
                return (
                  <>
                    {(data.hasOwnProperty(COMPONENT) && (
                      <>
                        {
                          (data.component.reference[0]
                            ._content_type_uid === CARD_COMPONENT && (
                              <CardBox
                                cardBoxID={
                                  data.component.reference[0].uid
                                }
                              />
                            )) ||
                          (data.component.reference[0]
                            ._content_type_uid === JUMBORTRON_COMPONENT && (
                              <JumbotronComp

                                jumbotronID={
                                  data.component.reference[0].uid
                                }
                              />
                            )) ||
                          (data.component.reference[0]
                            ._content_type_uid === QUESTION_COMPONENT && (
                              <Questions

                                questionID={
                                  data.component.reference[0].uid
                                }
                              />
                            )) ||
                          (data.component.reference[0]
                            ._content_type_uid === CONDITIONAL_COMPONENT && (
                              <ConditionalComps

                                conditionalCompsID={
                                  data.component.reference[0].uid
                                }
                              />
                            )) ||
                            (data.component.reference[0]
                              ._content_type_uid === VIDEO_COMPONENT && (
                                <VideoComp
  
                                  videoID={
                                    data.component.reference[0].uid
                                  }
                                />
                              )) ||
                              (data.component.reference[0]
                                ._content_type_uid === CARD_GROUP_COMPONENT && (
                                  <CardGroupComp
    
                                    cardGroupID={
                                      data.component.reference[0].uid
                                    }
                                  />
                                )) || <h1 className="text-center p-5">COMPONENT NOT READY YET!</h1>}
                      </>
                    )) ||
                      <Container>
                        <h1 className="text-center p-5">COMPONENT NOT READY YET!</h1>
                      </Container>}
                  </>
                );
              })}
              {locator === "/" ? (
                <></>
              ) : null}
            </div>
          ) : (
            <Container>
              <h1 className="text-center p-5">CONTENT NOT FOUND</h1>
            </Container>
          )}
        </>
      )}
    </>
  );
};
export default Page;