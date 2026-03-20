import { Link } from 'react-router-dom';
import './styles.scss';
import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';

export default function TodoList() {
  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem('taskList')) || [],
  ); // Load in from localstorage

  const [filter, setFilter] = useState(
    JSON.parse(localStorage.getItem('taskFilter') || null),
  );

  const setFilterHandler = (filterBy) => {
    setFilter(filterBy);
    localStorage.setItem('taskFilter', JSON.stringify(filterBy));
  };

  const {
    register,
    getValues,
    setValue,
    setFocus,
    formState: { errors },
  } = useForm();

  const addItemHandler = (event) => {
    event.preventDefault();
    const newList = [
      ...taskList,
      { id: crypto.randomUUID(), task: getValues('task'), complete: false },
    ];
    setTaskList(newList);
    localStorage.setItem('taskList', JSON.stringify(newList));
    setValue('task', '');
    setFocus('task');
  };

  const updateValue = (updatedArray) => {
    setTaskList(updatedArray);
    localStorage.setItem('taskList', JSON.stringify(updatedArray));
  };

  const removeItemHandler = (id) => {
    const updatedList = taskList.filter((t) => t.id !== id);
    updateValue(updatedList);
  };

  const toggleCompleteItemHandler = (id) => {
    const itemIndex = taskList.findIndex((t) => t.id === id);

    if (itemIndex > -1) {
      const updatedList = [...taskList];
      updatedList[itemIndex].complete = !updatedList[itemIndex].complete;
      updateValue(updatedList);
    }
  };

  const filteredTaskList = useMemo(
    () =>
      filter === null
        ? taskList
        : taskList.filter((t) => t.complete === filter),
    [taskList, filter],
  );

  console.log(getValues(), errors);

  return (
    <div className="exercise">
      <header className="exercise-header">
        <Link to="/" className="back-link">
          &larr; Back
        </Link>
        <h1>Todo List</h1>
        <p className="difficulty intermediate">Intermediate</p>
      </header>

      <section className="requirements">
        <h2>Requirements</h2>
        <ul>
          <li>Add new todos via input field</li>
          <li>Mark todos as complete/incomplete</li>
          <li>Delete todos</li>
          <li>Filter by: All, Active, Completed</li>
          <li>Persist to localStorage</li>
          <li>Show remaining count</li>
        </ul>
      </section>

      <section className="workspace">
        <h2>Your Solution</h2>
        <form className="task-form" onSubmit={addItemHandler}>
          <label htmlFor="task">Task:</label>
          <input
            className="task-input"
            {...register('task')}
            name="task"
            type="text"
            autoComplete="off"
          />
          <button className="task-button" type="submit">
            Add
          </button>
        </form>
        <div className="filter-buttons">
          <button
            className={filter === null ? 'active' : ''}
            type="button"
            onClick={() => setFilterHandler(null)}
          >
            All tasks
          </button>
          <button
            className={filter ? 'active' : ''}
            type="button"
            onClick={() => setFilterHandler(true)}
          >
            Complete
          </button>
          <button
            className={filter === false ? 'active' : ''}
            type="button"
            onClick={() => setFilterHandler(false)}
          >
            Incomplete
          </button>
        </div>

        <section className="task-list">
          {filteredTaskList.map((t, _index) => (
            <div className="task" key={t.id}>
              <p className="task-text"> {t.task}</p>
              <div className="task-item-buttons">
                <button type="button" onClick={() => removeItemHandler(t.id)}>
                  🗑️
                </button>
                <button
                  className="complete-button"
                  type="button"
                  onClick={() => toggleCompleteItemHandler(t.id)}
                >
                  {t.complete ? '☑' : '☐'}
                </button>
              </div>
            </div>
          ))}
        </section>
      </section>
    </div>
  );
}
