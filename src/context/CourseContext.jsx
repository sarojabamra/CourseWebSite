import React, { createContext, useState } from "react";
import all_courses from '../courses/all_courses';

export const CourseContext= createContext(null);

const getDefaultList = () => {
    let list = {};
    for(let index=0; index <all_courses.length+1; index++){
        list[index]=0;
    } 
    return list;
}

const CourseContextProvider = (props) => {

    const [listItems, setListItems] = useState(getDefaultList())
    

    const addToList = (itemId) => {
        setListItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(listItems);
    }

    const markAsCompleted = (itemId) => {
        setListItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        console.log(listItems);
    }

    const contextValue = {all_courses, listItems, addToList, markAsCompleted};

    return(
        <CourseContext.Provider value={contextValue}>
            {props.children}
        </CourseContext.Provider>
    )
}

export default CourseContextProvider;