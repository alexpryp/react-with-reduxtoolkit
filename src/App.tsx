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
import CounterWithRef from "@/components/escapeHatchesReact/useRefReact/counterWithRef/CounterWithRef";
import StopwatchWithRef from "@/components/escapeHatchesReact/useRefReact/stopwatchWithRef/StopwatchWithRef";
import FixBrokenChat from "@/components/escapeHatchesReact/useRefReact/fixBrockenChat/FixBrokenChat";
import FixBrokenReRender from "@/components/escapeHatchesReact/useRefReact/fixBrokenReRender/FixBrokenReRender";
import FixDebouncing from "@/components/escapeHatchesReact/useRefReact/fixDebouncing/FixDebouncing";
import ReadLatestState from "@/components/escapeHatchesReact/useRefReact/readLatestState/ReadLatestState";
//import ScrollintToElement from "@/components/escapeHatchesReact/useRefReact/scrollingToElement/ScrollingToElement";
import VideoWithUseEffect from "@/components/escapeHatchesReact/useEffectReact/videoWithUseEffect/VideoWithUseEffect";
import DataWithoutEffects from "@/components/escapeHatchesReact/useEffectReact/dataWithoutEffects/DataWithoutEffects";
import CacheCalculation from "@/components/escapeHatchesReact/useEffectReact/cacheCalculation/CacheCalculation";
import ResetStateWithoutEffects from "@/components/escapeHatchesReact/useEffectReact/resetStateWithoutEffects/ResetStateWithoutEffects";
import FixReconnectionOnKeystrokes from "@/components/escapeHatchesReact/useEffectReact/fixReconnectionOnKeystrokes/FixReconnectionOnKeystrokes";
import SwitchSynchronization from "@/components/escapeHatchesReact/useEffectReact/switchSynchronization/SwitchSynchronization";
import FixConnectionSwitch from "@/components/escapeHatchesReact/useEffectReact/fixConnectionSwitch/FixConnectionSwitch";
import PopulateChain from "@/components/escapeHatchesReact/useEffectReact/populateChain/PopulateChain";
import FixVariable from "@/components/escapeHatchesReact/useEffectReact/fixVariable/FixVariable";
import FixDelay from "@/components/escapeHatchesReact/useEffectReact/fixDelay/FixDelay";
// import FixDelayedNotification from "@/components/escapeHatchesReact/useEffectReact/fixDelayedNotification/FixDelayedNotification";
import FixResettingInterval from "@/components/escapeHatchesReact/useEffectReact/fixResettingInterval/FixResettingInterval";
import FixRetriggeringAnimation from "@/components/escapeHatchesReact/useEffectReact/fixRetriggeringAnimation/FixRetriggeringAnimation";
import FixReconnectingChat from "@/components/escapeHatchesReact/useEffectReact/fixReconnectingChat/FixReconnectingChat";
// import FixEncriptedChat from "@/components/escapeHatchesReact/useEffectReact/fixEncriptedChat/FixEncriptedChat";
import CheckOnline from "@/components/escapeHatchesReact/customHooks/checkOnline/CheckOnline";
import SaveButton from "@/components/escapeHatchesReact/customHooks/SaveButton/SaveButton";
import NameForm from '@/components/escapeHatchesReact/customHooks/nameForm/NameForm';
// import ChatRoom from '@/components/escapeHatchesReact/customHooks/chatRoom/ChatRoom';
import OnlineStatus from '@/components/escapeHatchesReact/customHooks/onlineStatus/OnlineStatus';
import FedeInWelcome from '@/components/escapeHatchesReact/customHooks/fedeInWelcome/FedeInWelcome';
import ExtractUseCounter from '@/components/escapeHatchesReact/customHooks/extractUseCounter/ExtractUseCounter';
import MakeCounterDelay from '@/components/escapeHatchesReact/customHooks/makeCounterDelay/MakeCounterDelay';
import ResettingInterval from '@/components/escapeHatchesReact/customHooks/resettingInterval/ResettingInterval';


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
        <StopwatchWithRef />
        <FixBrokenChat />
        <FixBrokenReRender />
        <FixDebouncing />
        <ReadLatestState />
        {/*<ScrollintToElement />*/}
        <VideoWithUseEffect />
        <DataWithoutEffects />
        <CacheCalculation />
        <ResetStateWithoutEffects />
        <FixReconnectionOnKeystrokes />
        <SwitchSynchronization />
        <FixConnectionSwitch />
        <PopulateChain />
        <FixVariable />
        <FixDelay />
        {/*<FixDelayedNotification />*/}
        <FixResettingInterval />
        <FixRetriggeringAnimation />
        <FixReconnectingChat />
        {/*<FixEncriptedChat />*/}
        <CheckOnline />
        <SaveButton />
        <NameForm />
        {/*<ChatRoom />*/}
        <OnlineStatus />
        <FedeInWelcome />
        <ExtractUseCounter />
        <MakeCounterDelay />
        <ResettingInterval />
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
