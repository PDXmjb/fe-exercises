import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './App.scss';

import AccordionExercise from './exercises/accordion';
import Autocomplete from './exercises/autocomplete';
import CollaborativeEditor from './exercises/collaborative-editor';
// Novice
import Counter from './exercises/counter';
// Advanced
import DataTable from './exercises/data-table';
import DragAndDropList from './exercises/drag-and-drop-list';
import FormValidation from './exercises/form-validation';
import HackerNews from './exercises/hacker-news';
import ImageCarousel from './exercises/image-carousel';
import InfiniteScroll from './exercises/infinite-scroll';
import JSExercisesDisplayer from './exercises/js-exercises';
import KanbanBoard from './exercises/kanban-board';
import ModalDialog from './exercises/modal-dialog';
import MultiStepForm from './exercises/multi-step-form';
import ProductPage from './exercises/product-page';
import RealtimeSearch from './exercises/realtime-search';
import Spreadsheet from './exercises/spreadsheet';
import StarRating from './exercises/star-rating';
import Tabs from './exercises/tabs';
// Intermediate
import TodoList from './exercises/todo-list';
import ToggleSwitch from './exercises/toggle-switch';
import UndoRedo from './exercises/undo-redo';
import VectorExercise from './exercises/vector-exercise';
// Expert
import VirtualList from './exercises/virtual-list';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route element={<Home />} path="/" />

        {/* Novice */}
        <Route element={<Counter />} path="/counter" />
        <Route element={<ToggleSwitch />} path="/toggle-switch" />
        <Route element={<AccordionExercise />} path="/accordion" />
        <Route element={<StarRating />} path="/star-rating" />
        <Route element={<Tabs />} path="/tabs" />

        {/* Intermediate */}
        <Route element={<TodoList />} path="/todo-list" />
        <Route element={<ModalDialog />} path="/modal-dialog" />
        <Route element={<InfiniteScroll />} path="/infinite-scroll" />
        <Route element={<Autocomplete />} path="/autocomplete" />
        <Route element={<FormValidation />} path="/form-validation" />
        <Route element={<ImageCarousel />} path="/image-carousel" />
        <Route element={<DragAndDropList />} path="/drag-and-drop-list" />
        <Route element={<ProductPage />} path="/product-page" />
        <Route element={<JSExercisesDisplayer />} path="/js-exercises" />
        <Route element={<HackerNews />} path="/hacker-news" />
        <Route element={<VectorExercise />} path="/vector" />

        {/* Advanced */}
        <Route element={<DataTable />} path="/data-table" />
        <Route element={<MultiStepForm />} path="/multi-step-form" />
        <Route element={<KanbanBoard />} path="/kanban-board" />
        <Route element={<RealtimeSearch />} path="/realtime-search" />
        <Route element={<UndoRedo />} path="/undo-redo" />

        {/* Expert */}
        <Route element={<VirtualList />} path="/virtual-list" />
        <Route element={<Spreadsheet />} path="/spreadsheet" />
        <Route element={<CollaborativeEditor />} path="/collaborative-editor" />
      </Routes>
    </div>
  );
}

export default App;
