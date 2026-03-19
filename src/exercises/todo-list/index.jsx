import { Link } from 'react-router-dom';
import './styles.scss';
import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';

export default function TodoList() {
  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem('taskList')) || [],
  ); // Load in from localstorage

  const [filter, setFilter] = useState(null);

  const setFilterHandler = (filterBy) => setFilter(filterBy);

  const {
    register,
    getValues,
    setValue,
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
            All
          </button>
          <button
            className={filter ? 'active' : ''}
            type="button"
            onClick={() => setFilterHandler(true)}
          >
            Complete only
          </button>
          <button
            className={filter === false ? 'active' : ''}
            type="button"
            onClick={() => setFilterHandler(false)}
          >
            Incomplete only
          </button>
        </div>

        <div className="task-list">
          {filteredTaskList.map((t, _index) => (
            <div className="task" key={t.id}>
              <p> {t.task}</p>
              <div>
                <span> {t.complete ? '☑' : '☐'}</span>
                <button type="button" onClick={() => removeItemHandler(t.id)}>
                  🗑️
                </button>
                <button
                  className="complete-button"
                  type="button"
                  onClick={() => toggleCompleteItemHandler(t.id)}
                >
                  {t.complete ? 'Mark incomplete' : 'Mark complete'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
