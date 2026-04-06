import { createContext, useContext, useState } from 'react';

const TabsContext = createContext(null);

function TabsContainer({ children }) {
  const [selectedTab, setSelectedTab] = useState('');

  const selectTab = (tab) => setSelectedTab(tab);

  return (
    <TabsContext.Provider value={{ selectedTab, selectTab }}>
      <div>{children}</div>
    </TabsContext.Provider>
  );
}

function Tab({ label, children }) {
  const { selectTab } = useContext(TabsContext);

  if (label !== selectTab) {
    return <button type="button">{label}</button>;
  }

  return (
    <>
      <button type="button" className="active">
        {label}
      </button>
      <div>{children}</div>
    </>
  );
}

TabsContainer.Tab = Tab;

export default TabsContainer;
