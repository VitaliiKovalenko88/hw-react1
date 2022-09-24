const works = [
  { id: "hw-1", name: "react" },
  { id: "hw-2", name: "reactClass" },
  { id: "hw-3", name: "lifecycles" },
  { id: "hw-4", name: "Hooks" },
  { id: "hw-5", name: "reactRoute" },
  { id: "hw-6", name: "redux" },
  { id: "hw-7", name: "asyncRedux" },
  { id: "hw-8", name: "Logins" },
  
];

export const getWorks = () => works;

export const getWorksById = (worksId) => {
  return works.find(({id}) => id === worksId);
}