"use strict";(self.webpackChunkcomponent_library=self.webpackChunkcomponent_library||[]).push([[957],{"./src/components/Hero_Image/Hero_Image.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Hero_Image_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const HeroContainer=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${props=>props.imageurl});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 400px;
  color: ${props=>props.disabled?"light-grey":props.textColor||"white"};
  text-align: center;
  opacity: ${props=>props.disabled?.5:1};
  cursor: ${props=>props.disabled?"not-allowed":"default"};
`,Title=styled_components_browser_esm.Ay.h1`
  font-size: 36px;
  margin-bottom: 16px;
`,Subtitle=styled_components_browser_esm.Ay.h2`
  font-size: 24px;
`;function HeroImage({title,subtitle,imageurl,disabled,textColor,testId}){return react.createElement(HeroContainer,{"data-testid":testId,imageurl,disabled,textColor},react.createElement(Title,null,title),react.createElement(Subtitle,null,subtitle))}const Hero_Image=HeroImage;HeroImage.__docgenInfo={description:"",methods:[],displayName:"HeroImage",props:{title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""},imageurl:{required:!0,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},testId:{required:!1,tsType:{name:"string"},description:""}}};const Hero_Image_stories={title:"Components/HeroImage",component:Hero_Image,argTypes:{title:{control:"text"},subtitle:{control:"text"},imageurl:{control:"text"},disabled:{control:{type:"boolean"}}}},Default={args:{title:"Hero Title",subtitle:"Hero Subtitle",imageurl:"https://via.placeholder.com/1200x400",disabled:!1}},Disabled={args:{title:"Disabled Hero Title",subtitle:"Disabled Hero Subtitle",imageurl:"https://via.placeholder.com/1200x400",disabled:!0}},__namedExportsOrder=["Default","Disabled"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'Hero Title',\n    subtitle: 'Hero Subtitle',\n    imageurl: 'https://via.placeholder.com/1200x400',\n    disabled: false\n  }\n}",...Default.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'Disabled Hero Title',\n    subtitle: 'Disabled Hero Subtitle',\n    imageurl: 'https://via.placeholder.com/1200x400',\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=components-Hero_Image-Hero_Image-stories.27e0bc99.iframe.bundle.js.map