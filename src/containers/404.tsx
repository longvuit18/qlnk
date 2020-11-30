
import React from "react";
import { connectContainer } from "../libs/containers";


const PageNotFoundRaw  = () => {
    return (
        <div>404</div>
           
    )}

export const PageNotFound = connectContainer(PageNotFoundRaw);