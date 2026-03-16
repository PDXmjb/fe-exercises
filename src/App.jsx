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
import ImageCarousel from './exercises/image-carousel';
import InfiniteScroll from './exercises/infinite-scroll';
import KanbanBoard from './exercises/kanban-board';
import ModalDialog from './exercises/modal-dialog';
import MultiStepForm from './exercises/multi-step-form';
import RealtimeSearch from './exercises/realtime-search';
import Spreadsheet from './exercises/spreadsheet';
import StarRating from './exercises/star-rating';
import Tabs from './exercises/tabs';
// Intermediate
import TodoList from './exercises/todo-list';
import ToggleSwitch from './exercises/toggle-switch';
import UndoRedo from './exercises/undo-redo';
// Expert
import VirtualList from './exercises/virtual-list';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Novice */}
        <Route path="/counter" element={<Counter />} />
        <Route path="/toggle-switch" element={<ToggleSwitch />} />
        <Route path="/accordion" element={<AccordionExercise />} />
        <Route path="/star-rating" element={<StarRating />} />
        <Route path="/tabs" element={<Tabs />} />

        {/* Intermediate */}
        <Route path="/todo-list" element={<TodoList />} />
        <Route path="/modal-dialog" element={<ModalDialog />} />
        <Route path="/infinite-scroll" element={<InfiniteScroll />} />
        <Route path="/autocomplete" element={<Autocomplete />} />
        <Route path="/form-validation" element={<FormValidation />} />
        <Route path="/image-carousel" element={<ImageCarousel />} />
        <Route path="/drag-and-drop-list" element={<DragAndDropList />} />

        {/* Advanced */}
        <Route path="/data-table" element={<DataTable />} />
        <Route path="/multi-step-form" element={<MultiStepForm />} />
        <Route path="/kanban-board" element={<KanbanBoard />} />
        <Route path="/realtime-search" element={<RealtimeSearch />} />
        <Route path="/undo-redo" element={<UndoRedo />} />

        {/* Expert */}
        <Route path="/virtual-list" element={<VirtualList />} />
        <Route path="/spreadsheet" element={<Spreadsheet />} />
        <Route path="/collaborative-editor" element={<CollaborativeEditor />} />
      </Routes>
    </div>
  );
}

export default App;
