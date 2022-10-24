import React, {useState} from 'react';
import './App.css';
import OnOff from "./components/OnOff/OnOff";
import Rating, {ValueType} from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";


const App = () => {
    let [ratingValue , setRatingValue] = useState<ValueType>(1)
    let [collapsed , setCollapsed] = useState<boolean>(false)

  return (
  <div className="App">
      <OnOff />
      <Accordion titleValue={"Menu"} collapsed={collapsed} onClick={setCollapsed}/>
      {/*<UncontrolledAccordion titleValue={"Menu"} />*/}
      < Rating value={ratingValue} onClick={setRatingValue}/>
      {/*<UncontrolledRating />*/}
      {/*<PageTitle title={"This is App component"}/>
      <PageTitle title={"Hello friends"} />
      <UncontrolledRating value={3}/>
      <UncontrolledAccordion collapsed={true} titleValue={"Menu"}/>
      <UncontrolledAccordion collapsed={false} titleValue={"Users"}/>
      <UncontrolledRating value={1}/>
      <UncontrolledRating value={2}/>
      <UncontrolledRating value={3}/>
      <UncontrolledRating value={4}/>
      <UncontrolledRating value={5}/>*/}
    </div>
)}

type PageTitlePropsType = {
    title:string
}
const PageTitle  = (props:PageTitlePropsType) => {
    return <div>{props.title}</div>
}

export default App ;
