import React from "react";
import { Link } from "react-router-dom";

function BannerPath({list =[]}){

    const linkList = list.map((item, index)=> {
        if(index === list.length -1 ) return <li class="breadcrumb-item active">{item.title}</li>
        else return <li class="breadcrumb-item"><a href={item.url}>{item.title}</a></li>
    });
    
    return(
        <nav >
            <ol className="breadcrumb">
                {linkList}
            </ol>
        </nav>
    );
}
export default BannerPath;