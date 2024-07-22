"use strict";(self.webpackChunkcomponent_library=self.webpackChunkcomponent_library||[]).push([[39],{"./src/components/Radio Button/Radio_Button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Checked:()=>Checked,Default:()=>Default,Disabled:()=>Disabled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Radio_Button_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Wrapper=styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
`,Input=styled_components_browser_esm.Ay.input`
  margin-right: 8px;
`,Label=styled_components_browser_esm.Ay.label`
  font-size: ${props=>props.fontSize||"14px"};
  color: ${props=>props.disabled?"grey":"black"};
  cursor: ${props=>props.disabled?"not-allowed":"pointer"};
`,RadioButton=({id,label,checked,onChange,disabled,fontSize})=>react.createElement(Wrapper,null,react.createElement(Input,{type:"radio",id,checked,onChange:()=>{onChange(id)},disabled}),react.createElement(Label,{htmlFor:id,disabled,fontSize},label)),Radio_Button=RadioButton;RadioButton.__docgenInfo={description:"",methods:[],displayName:"RadioButton",props:{id:{required:!0,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},checked:{required:!0,tsType:{name:"boolean"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},fontSize:{required:!1,tsType:{name:"string"},description:""}}};const Radio_Button_stories={title:"Components/RadioButton",component:Radio_Button,argTypes:{id:{control:"text"},label:{control:"text"},checked:{control:"boolean"},onChange:{action:"changed"},disabled:{control:{type:"boolean"}}}},Default={args:{id:"radio1",label:"Option 1",checked:!1,disabled:!1,onChange:id=>{console.log(`Selected radio button with ID: ${id}`)}}},Checked={args:{id:"radio2",label:"Option 2",checked:!0,disabled:!1,onChange:id=>{console.log(`Selected radio button with ID: ${id}`)}}},Disabled={args:{id:"radio3",label:"Disabled Option",checked:!1,disabled:!0,onChange:id=>{console.log(`Selected radio button with ID: ${id}`)}}},__namedExportsOrder=["Default","Checked","Disabled"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    id: 'radio1',\n    label: 'Option 1',\n    checked: false,\n    disabled: false,\n    onChange: (id: string) => {\n      console.log(`Selected radio button with ID: ${id}`);\n    }\n  }\n}",...Default.parameters?.docs?.source}}},Checked.parameters={...Checked.parameters,docs:{...Checked.parameters?.docs,source:{originalSource:"{\n  args: {\n    id: 'radio2',\n    label: 'Option 2',\n    checked: true,\n    disabled: false,\n    onChange: (id: string) => {\n      console.log(`Selected radio button with ID: ${id}`);\n    }\n  }\n}",...Checked.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    id: 'radio3',\n    label: 'Disabled Option',\n    checked: false,\n    disabled: true,\n    onChange: (id: string) => {\n      console.log(`Selected radio button with ID: ${id}`);\n    }\n  }\n}",...Disabled.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=components-Radio-Button-Radio_Button-stories.5baa1b40.iframe.bundle.js.map