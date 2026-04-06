import { createContext, useContext, useState } from 'react';

const TabsContext = createContext(null);

function TabsContainer({ tabs, children }) {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const selectTab = (tab) => setSelectedTab(tab);

  return (
    <TabsContext.Provider value={{ selectedTab, selectTab }}>
      <div className="tabs-container">
        {tabs.map((t) => (
          <button
            type="button"
            key={t}
            className={selectedTab === t ? 'tab active' : 'tab'}
            onClick={() => selectTab(t)}
          >
            {t}
          </button>
        ))}
      </div>
      <div>{children}</div>
    </TabsContext.Provider>
  );
}

function Tab({ label, children }) {
  const { selectedTab } = useContext(TabsContext);

  if (label !== selectedTab) {
    return null;
  }

  return <div className="tab-content">{children}</div>;
}

TabsContainer.Tab = Tab;

export default TabsContainer;
