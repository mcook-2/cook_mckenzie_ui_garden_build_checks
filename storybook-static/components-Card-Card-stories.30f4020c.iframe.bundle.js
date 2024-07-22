"use strict";(self.webpackChunkcomponent_library=self.webpackChunkcomponent_library||[]).push([[513],{"./src/components/Card/Card.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Card_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const CardContainer=styled_components_browser_esm.Ay.div`
  background: ${props=>props.disabled?"grey":props.backgroundColor||"white"};
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  opacity: ${props=>props.disabled?.4:1};
  cursor: ${props=>props.disabled?"not-allowed":"pointer"};
`,CardImage=styled_components_browser_esm.Ay.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 12px;
`,CardTitle=styled_components_browser_esm.Ay.h3`
  font-size: 18px;
  margin-bottom: 8px;
`,CardDescription=styled_components_browser_esm.Ay.p`
  font-size: 14px;
`,Card=({title,description,imageurl,disabled,backgroundColor,testId})=>react.createElement(CardContainer,{"data-testid":testId,disabled,backgroundColor},react.createElement(CardImage,{src:imageurl,alt:title}),react.createElement(CardTitle,null,title),react.createElement(CardDescription,null,description)),Card_Card=Card;Card.__docgenInfo={description:"",methods:[],displayName:"Card",props:{title:{required:!0,tsType:{name:"string"},description:""},description:{required:!0,tsType:{name:"string"},description:""},imageurl:{required:!0,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},backgroundColor:{required:!1,tsType:{name:"string"},description:""},testId:{required:!1,tsType:{name:"string"},description:""}}};const Card_stories={title:"Components/Card",component:Card_Card,argTypes:{title:{control:"text"},description:{control:"text"},imageurl:{control:"text"},disabled:{control:"boolean"}}},Default={args:{title:"Sample Card",description:"This is a sample card component.",imageurl:"https://via.placeholder.com/300",disabled:!1}},Disabled={args:{title:"Disabled Card",description:"This card is disabled.",imageurl:"https://via.placeholder.com/300",disabled:!0}},__namedExportsOrder=["Default","Disabled"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'Sample Card',\n    description: 'This is a sample card component.',\n    imageurl: 'https://via.placeholder.com/300',\n    disabled: false\n  }\n}",...Default.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'Disabled Card',\n    description: 'This card is disabled.',\n    imageurl: 'https://via.placeholder.com/300',\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=components-Card-Card-stories.30f4020c.iframe.bundle.js.map