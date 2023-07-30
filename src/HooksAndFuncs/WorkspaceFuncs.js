export const getPeriodTimeLine = (fromDate, tillDate) => {
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  let from = new Date(fromDate);
  let to = new Date(tillDate);

  if (fromDate && tillDate){
    return `${monthNames[from.getMonth()]} ${from.getFullYear()} - ${monthNames[to.getMonth()]} ${to.getFullYear()}`
  }
  if (fromDate){
    return `Since: ${monthNames[from.getMonth()]} ${from.getFullYear()}`
  }
  if (tillDate){
    return `Till: ${monthNames[from.getMonth()]} ${from.getFullYear()}`
  }
}

export const getInputsKeys = (data) => {
  let result = {};

  for (let item of data.fields.content){
    result[item.name] = "";
  }

  return result;
}

//
export const toggleRepeaterItem = (state, setState, index) => {
  let newState = {...state};
  newState.items[index].isClosed = !newState.items[index].isClosed;

  setState(newState);
}

export const trashRepeaterItem = (state, setState, index) => {
  let newState = {...state};

  if (index > -1) {
    newState.items.splice(index, 1);
  }

  setState(newState);
}

export const addRepeaterItem = (state, setState) => {
  let newState = {...state};
      newState.items.push({
        isClosed: false,
        content: [...newState.sample.content],
      });

  setState(newState);
}