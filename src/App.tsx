import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Gallery from "@/components/gallery/Gallery";
import TodoList from "@/components/todolist/TodoList";
import TodoListGregorio from "@/components/todolist/TodoListGregorio";
import Profile2 from "@/components/profile/Profile2";
import Form from "@/components/profile/Form";
import Form2 from "@/components/profile/Form2";
import Accordion from "@/components/profile/Accordion";
import Messenger from "@/components/profile/messenger/Messenger";
import ReducerLesson from "@/components/profile/reducerLesson/ReducerLesson";
import FormImperative from "@/components/profile/formImperative/FormImperative";
import FormDeclarative from "@/components/profile/formDeclarative/FormDeclarative";
import FeedbackForm from "@/components/profile/feedbackForm/FeedbackForm";
import CheckInForm from "@/components/profile/checkInForm/CheckInForm";
import TravelSnackMenu from "@/components/profile/travelSnackMenu/TravelSnackMenu";
import TravelPlan from "@/components/profile/travelPlan/TravelPlan";
import HighlightedLetters from "@/components/profile/highlightedLetters/HighlightedLetters";
import MultipleSelection from "@/components/profile/multipleSelection/MultipleSelection";
import DisappearingInputText from "@/components/profile/disappearingInputText/DisappearingInputText";
import SwapFormFields from "@/components/profile/swapFormFields/SwapFormFields";
import ResetDetailForm from "@/components/profile/resetDetailForm/ResetDetailForm";
import StateWithReducer from "@/components/profile/stateWithReducer/StateWithReducer";
import ReducerWithImmer from "@/components/profile/reducerWithImmer/ReducerWithImmer";
import DispatchActionsFromHandlers from "@/components/profile/dispatchActionsFromHandlers/DispatchActionsFromHandlers";
import CheckList from "@/components/checkList/CheckList";
import RenderList from "@/components/renderList/RenderList";
import Counter from "./features/counter/Counter";
import CounterWithRef from "@/components/escapeHatchesReact/counterWithRef/CounterWithRef";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="react-tutorial">
        <RenderList />
        <CheckList />
        <Profile2 />
        <TodoListGregorio />
        <TodoList />
        <Gallery />
        <Form />
        <Form2 />
        <Accordion />
        <Messenger />
        <ReducerLesson />
        <FormImperative />
        <FormDeclarative />
        <FeedbackForm />
        <CheckInForm />
        <TravelSnackMenu />
        <TravelPlan />
        <HighlightedLetters />
        <MultipleSelection />
        <DisappearingInputText />
        <SwapFormFields />
        <ResetDetailForm />
        <StateWithReducer />
        <ReducerWithImmer />
        <DispatchActionsFromHandlers />
        <hr />
        <h1>Escape Hatches of React</h1>
        <CounterWithRef />
      </div>

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Counter />
    </>
  );
}

export default App;
